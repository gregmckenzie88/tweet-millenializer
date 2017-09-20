
var Twit = require('twit');
var fs                = require('fs');
var config = require('./config.js');
let nlp = require('nlp_compromise');
var moment = require('moment');
var replace = require('./replace.js');
var post = require('./post.js');
var T = new Twit(config);

T.post('statuses/update', { status: 'This is a quote tweet  . This is a quote tweet asdf asdf asdf This is a quote tweet asdf asdf asdf https://twitter.com/TwitterDev/status/740196895784570880' }, function(err, data, response) {
  console.log(data)
})
