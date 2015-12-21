/**
* Main file for Yelp Slackbot
*/

//Load environment variables
require('dotenv').load();

//Load libraries
var botkit = require('botkit');
//var yelp = require('yelp');

var controller = botkit.slackbot({
  debug:false
});

controller.spawn({
  token: process.env.SLACKBOT_TOKEN
}).startRTM();

controller.hears('hungry', 'direct_message,direct_mention,mention', function (bot, message) {
  bot.reply(message, "What are you hungry for?");
});
