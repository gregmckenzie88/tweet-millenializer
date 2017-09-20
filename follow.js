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


module.exports = function(targetAccount, myAccount){

    ///////////////////////////////
    ///      GET FOLLOWERS      ///
    ///////////////////////////////

    var listTargets = [
      '17881732', // Rick Mercer
      '18177126', //strombo
      '163562125', //norm kelly
      '30106099', //jus reign
      '19025957', //ttc notices
      '44394176', //winnie harlow
      '463933187', //TPS oporations
      '210238655', // IISuperwomanII
      '2294853474', // TheTorontoZoo
      '243679064', //YRP
      '1223101', //blogto
      '18776647', // ryerson u
      '19000033', //cbc toronto
      '7280572', //torontoist
      '19377913', //toronto comms
      '17659340', //ctv toronto
      '55594930', //maple leafs
      '73406718', //raptors
      '14705603'
    ];


                                                                                                          //up to 200
    T.get('followers/list', { user_id: listTargets[Math.floor(Math.random() * listTargets.length)], count: 200 },  function (err, data, response) {

      if(data.errors){
        console.log('💩! You\'ve exceeded your follower request limit');
      } else {
      //whittle largerst request to one user
    	let users = data.users !== undefined ? data.users : null;
    	let notFollowing = data.users !== undefined ? data.users.filter(i => i.following === false && i.followers_count > 9 && i.follow_request_sent === false) : null;
    	let notFollowingIds = notFollowing !== null ? notFollowing.map(i => i.screen_name) : null;
    	let oneFollower = notFollowingIds !== null ? notFollowingIds[Math.floor(Math.random() * notFollowingIds.length)] : null;

      	//follow that user
      	function followThem(screenName){

      		let params = {
      			screen_name: screenName,
      			follow: true
      		}

      		T.post('friendships/create', params, (err, data, response) => {
      			if(err){
      				console.log("something went wrong! " + err);
      			} else {
      				console.log("you're following " + screenName);
      			}
      		});
      	}

        function delay(){
          followThem(oneFollower);
        }

        setTimeout(delay, Math.floor(Math.random() * 2000 + 1000));

      }
    });

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

} // module exports end
