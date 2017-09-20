var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);
var image_downloader = require('image-downloader');
var fs                = require('fs');
var exec = require('child_process').exec;

module.exports = {
	tweetIt: function(txt){

		var tweet = {
			status: txt.text,
		};

		///////////////////////////////
		///      QUOTED TWEET       ///
		///////////////////////////////

		if(txt.quote_id !== null){
			tweet.status = txt.text + " https://twitter.com/TwitterDev/status/" + txt.quote_id;
			T.post('statuses/update', tweet, (err, data, response) => {
				if(err){
					console.log("tweet failed 💩 " + err);
				} else {
					console.log("tweet (no pic) success! 🐥");
				}
			});
		}


		///////////////////////////////
		///      PHOTO CONTENT      ///
		///////////////////////////////

		else if (txt.media_type === 'photo'){

			//save file form url
			options = {
			    url: txt.media_url,
			    dest: 'image-store/photo.jpg',        // Save to /path/to/dest/photo.jpg
			    done: function(err, filename, image) {
			        if (err) {
			            throw err;
			        }
			        // console.log('File saved to', filename);
			    },
			};
			// console.log(options);
			image_downloader(options);


			//upload file from disk

			function upload(){
				var b64content = fs.readFileSync('image-store/photo.jpg', { encoding: 'base64' })

				T.post('media/upload', { media_data: b64content }, function (err, data, response) {
				  // now we can assign alt text to the media, for use by screen readers and
				  // other text-based presentations and interpreters
				  var mediaIdStr = data.media_id_string
				  // var altText = "Small flowers in a planter on a sunny balcony, blossoming."
				  var meta_params = { media_id: mediaIdStr }

				  T.post('media/metadata/create', meta_params, function (err, data, response) {
				    if (!err) {
				      // now we can reference the media and post a tweet (media will attach to the tweet)
				      var params = { status: txt.text, media_ids: [mediaIdStr] }

				      T.post('statuses/update', params, function (err, data, response) {
				        console.log("tweet with picture");
				      })
				    }
				  })
				});

				// clear directory

				var path = 'image-store/*';

				exec('rm -r ' + path, function (err, stdout, stderr) {
				  // your callback goes here
				});
			}

			setTimeout(upload, 6000);

		}

		///////////////////////////////
		///      VIDEO CONTENT      ///
		///////////////////////////////

		else if (txt.media_type === 'video'){

			//save file form url
			options = {
			    url: txt.media_url,
			    dest: 'image-store/video.mp4',        // Save to /path/to/dest/video.jpg
			    done: function(err, filename, image) {
			        if (err) {
			            throw err;
			        }
			        // console.log('File saved to', filename);
			    },
			};
			// console.log(options);
			image_downloader(options);

			function videoUpload(){
				var filePath = 'image-store/video.mp4'
				T.postMediaChunked({ file_path: filePath }, function (err, data, response) {
				  // console.log(data)

				  var mediaIdStr = data.media_id_string ? data.media_id_string : null;

				  var params = { status: txt.text, media_ids: [mediaIdStr] }

				  T.post('statuses/update', params, function (err, data, response) {
				    if(err){
				    	console.log("tweet failed 💩 " + err);
				    } else {
				    	console.log("tweet (video) success! 🐥");
				    }

				  });

				});

			}

			setTimeout(videoUpload, 6000);
		}

		///////////////////////////////
		///       GIF CONTENT       ///
		///////////////////////////////

		else if (txt.media_type === 'animated_gif'){

			//save file form url
			options = {
			    url: txt.media_url,
			    dest: 'image-store/video.mp4',        // Save to /path/to/dest/video.jpg
			    done: function(err, filename, image) {
			        if (err) {
			            throw err;
			        }
			        // console.log('File saved to', filename);
			    },
			};
			// console.log(options);
			image_downloader(options);

			function videoUpload(){
				var filePath = 'image-store/video.mp4'
				T.postMediaChunked({ file_path: filePath }, function (err, data, response) {
				  // console.log(data)

				  var mediaIdStr = data.media_id_string;

				  var params = { status: txt.text, media_ids: [mediaIdStr] }

				  T.post('statuses/update', params, function (err, data, response) {
				    if(err){
				    	console.log("tweet failed 💩 " + err);
				    } else {
				    	console.log("tweet (video) success! 🐥");
				    }

				  });

				});

			}

			setTimeout(videoUpload, 6000);
		}



		///////////////////////////////
		///        NO CONTENT       ///
		///////////////////////////////
		else {

			T.post('statuses/update', tweet, (err, data, response) => {
				if(err){
					console.log("tweet failed 💩 " + err);
				} else {
					console.log("tweet (no pic) success! 🐥");
				}
			});
		}
	}
}
