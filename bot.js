/**
* Main file for Yelp Slackbot
*/

var botkit = require('botkit');
//var yelp = require('yelp');
var creds = require('./creds.json');

var controller = botkit.slackbot({
  debug:true
});

controller.spawn({
  token: creds.slackbot_token
}).startRTM;

controller.hears('hungry', 'direct_message,direct_mention,mention', function (bot, message) {
  bot.reply(message, "What are you hungry for?");
});
