var Twit = require('twit');
var fs = require('fs');
var config = require('./config.js');
let nlp = require('nlp_compromise');
var moment = require('moment');
var replace = require('./replace.js');
var post = require('./post.js');
var T = new Twit(config);
var schedule = require('node-schedule');
var targetUserIdStr   = '89760824'; //John Tory
var myUserIdStr       = '838817657562533890'; // NewAgeTory

var maxFollowed = 475;

    ///////////////////////////////
    ///     UNFOLLOW SOMEONE    ///
    ///////////////////////////////

    T.get('friends/ids', { user_id: myUserIdStr, count: 5000, stringify_ids: true },  function (err, data, response) {

      var numFollowed = data.ids !== undefined ? data.ids : null;

      if(numFollowed === null){
        return;
      }

      //whittle largerst request to one user
    	let oldestFollowed = data.ids !== undefined ? data.ids[data.ids.length - 2] : null;
      console.log(oldestFollowed);

      	function unfollowThem(uderId){

      		var params = {
      			user_id: uderId,
      		}

      		T.post('friendships/destroy', params, (err, data, response) => {
      			if(err){
      				console.log("something went wrong! " + err);
      			} else {
      				console.log("you're not following " + uderId);
      			}
      		});
      	}

        if(numFollowed.length > maxFollowed){
          unfollowThem(oldestFollowed);
        }

    });
