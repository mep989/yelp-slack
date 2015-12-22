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

//controller.hears('hungry', 'direct_message,direct_mention,mention', function (bot, message) {
//  bot.reply(message, "What are you hungry for?");
//});

controller.hears(['hungry'],['direct_message','direct_mention','mention','ambient'],function(bot,message) {

	  // start a conversation to handle this response.
	  bot.startConversation(message,function(err,convo) {

	    convo.ask('What are you hungry for?',function(response,convo) {

	      convo.say('Mmmmm, ' + response.text);
        convo.say("Let's see what's looks good around you.")
	      convo.next();

	    });

	  })

	});
