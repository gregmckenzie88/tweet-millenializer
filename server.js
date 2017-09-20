var Twit              = require('twit');
var fs                = require('fs');
var config            = require('./config.js');
let nlp               = require('nlp_compromise');
var moment            = require('moment');
var replace           = require('./replace.js');
var post              = require('./post.js');
var T                 = new Twit(config);
var pipes             = require('./pipes.js');
var follower          = require('./follow.js');
var schedule          = require('node-schedule');
var targetUserIdStr   = '89760824'; //John Tory
var myUserIdStr       = '838817657562533890'; // NewAgeTory

///////////////////////////////
///      FOLLOWER CHURN     ///
///////////////////////////////

  // EVERY 3 MINUTES
  var j = schedule.scheduleJob('*/15 * * * *', function(){
      follower(targetUserIdStr, myUserIdStr);
  });

///////////////////////////////
///       USER STREAM       ///
///////////////////////////////

  var stream = T.stream('statuses/filter', { tweet_mode: 'extended', follow : [targetUserIdStr] });
  stream.on('tweet', function (tweet, err) {
    pipes(tweet);
  });

  stream.on('error', (err) => {
    console.log('error!', err);
  });
