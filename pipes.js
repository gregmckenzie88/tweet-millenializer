var Twit = require('twit');
var fs                = require('fs');
var config = require('./config.js');
// let nlp = require('nlp_compromise');
var moment = require('moment');
var replace = require('./replace.js');
var post = require('./post.js');
var T = new Twit(config);

var targetUserIdStr   = '89760824'; //John Tory
var myUserIdStr       = '838817657562533890'; // NewAgeTory
///////////////////////////////////////

module.exports = function(tweet){
	let tweetObj = {};

	// ASSIGN TEXT
	if (tweet.truncated === false){
	    tweetObj.text = replace.cleanse(tweet.text);
	    tweetObj.media_url = tweet.entities.media !== undefined ? tweet.entities.media[0].media_url : null;
	} else {
	    tweetObj.text = replace.cleanse(tweet.extended_tweet.full_text);
	    tweetObj.media_url = tweet.extended_tweet.entities.media !== undefined ? tweet.extended_tweet.entities.media[0].media_url : null;
	}

	 // QUOTED TWEET
	tweetObj.quote_id = tweet.quoted_status !== undefined ? tweet.quoted_status.id_str : null;

	 // MEDIA TYPE
	 if (tweet.extended_tweet !== undefined){

	    tweetObj.media_type = tweet.extended_tweet.extended_entities !== undefined ? tweet.extended_tweet.extended_entities.media[0].type : null;

	 } else if (tweet.extended_entities !== undefined){

	    tweetObj.media_type = tweet.extended_entities.media[0].type;

	 } else {

	    tweetObj.media_type = null;

	 }

	 // CONNECT MEDIA URL FOR VIDEO
	 if (tweetObj.media_type === 'video' && tweet.extended_tweet){

	    var varients = tweet.extended_tweet.extended_entities !== undefined ? tweet.extended_tweet.extended_entities.media[0].video_info.variants.filter(i => {return i.bitrate === 832000}) : null;

	    tweetObj.media_url = varients[0].url;

	 } else if (tweetObj.media_type === 'video' && tweet.extended_entities){

	    var varients = tweet.extended_entities.media !== undefined ? tweet.extended_entities.media[0].video_info.variants.filter(i => {return i.bitrate === 832000}) : null;

	    tweetObj.media_url = varients[0].url;

	 }

	 // CONNECT MEDIA URL FOR gif
	 if (tweetObj.media_type === 'animated_gif' && tweet.extended_tweet){

	    var varients = tweet.extended_tweet.extended_entities.media[0].video_info.variants.filter(i => {return i.bitrate === 0});

	    tweetObj.media_url = varients[0].url;

	 } else if (tweetObj.media_type === 'animated_gif' && tweet.extended_entities){

	    var varients = tweet.extended_entities.media[0].video_info.variants.filter(i => {return i.bitrate === 0});
	    tweetObj.media_url = varients[0].url;

	 }

	 //CONNECT ARRAY OF TRASH URLS
	 tweetObj.trash_url = [];
	 //photo
	 if (tweetObj.media_type === 'photo' && tweet.extended_tweet){

	    var varients = tweet.extended_tweet.extended_entities.media;
	    var filteredVarients = [];
	    varients.forEach( i => {filteredVarients.push(i.url)});


	    filteredVarients.forEach(i =>{tweetObj.trash_url.push(i)});

	 } else if (tweetObj.media_type === 'photo' && tweet.extended_entities){

	    var varients = tweet.extended_entities.media;
	    var filteredVarients = [];
	    varients.forEach( i => {filteredVarients.push(i.url)});

	    // tweetObj.trash_url = [];
	    filteredVarients.forEach(i =>{tweetObj.trash_url.push(i)});

	 }

	 //video
	 if (tweetObj.media_type === 'video' && tweet.extended_tweet){

	    var varients = tweet.extended_tweet.extended_entities.media;
	    var filteredVarients = [];
	    varients.forEach( i => {filteredVarients.push(i.url)});

	    // tweetObj.trash_url = [];
	    filteredVarients.forEach(i =>{tweetObj.trash_url.push(i)});

	 } else if (tweetObj.media_type === 'video' && tweet.extended_entities){

	    var varients = tweet.extended_entities.media;
	    var filteredVarients = [];
	    varients.forEach( i => {filteredVarients.push(i.url)});

	    // tweetObj.trash_url = [];
	    filteredVarients.forEach(i =>{tweetObj.trash_url.push(i)});

	 }

	 //animated_gif
	 if (tweetObj.media_type === 'animated_gif' && tweet.extended_tweet){

	    var varients = tweet.extended_tweet.extended_entities.media;
	    var filteredVarients = [];
	    varients.forEach( i => {filteredVarients.push(i.url)});

	    // tweetObj.trash_url = [];
	    filteredVarients.forEach(i =>{tweetObj.trash_url.push(i)});

	 } else if (tweetObj.media_type === 'animated_gif' && tweet.extended_entities){

	    var varients = tweet.extended_entities.media;
	    var filteredVarients = [];
	    varients.forEach( i => {filteredVarients.push(i.url)});

	    // tweetObj.trash_url = [];
	    filteredVarients.forEach(i =>{tweetObj.trash_url.push(i)});

	 }


	 //cleanse text of urls
	 tweetObj.trash_url.map(function(i){
	 	var replace = i;
	 	var re = new RegExp(replace,"g");
	 	tweetObj.text = tweetObj.text.replace(re, "");
	 })

	 ///////////////////////////////
	 ///        TWEET IT         ///
	 ///////////////////////////////

	 if(tweet.retweeted_status === undefined && tweet.in_reply_to_user_id === null && tweet.lang === 'en'){
	   post.tweetIt(tweetObj);
	 }
}
