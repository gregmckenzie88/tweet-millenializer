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

var maxFollowed = 4075;


T.get('users/search', { q: 'Toronto', count: 1 }, function(err, data, response) {
  console.log(data)
})