/**
* Main file for Yelp Slackbot
*/

//Load environment variables
require('dotenv').load();

//Load libraries
var botkit = require('botkit');
var yelp = require('yelp');

var controller = botkit.slackbot({
  debug:false
});

controller.spawn({
  token: process.env.SLACKBOT_TOKEN
}).startRTM();

//controller.hears('hungry', 'direct_message,direct_mention,mention', function (bot, message) {
//  bot.reply(message, "What are you hungry for?");
//});

function yelp_search(food){
  yelp.search({term: food, location: 'Chicago', limit: 2, sort: 2})
    .then(function (data) { //The API call was returned successfully
      return (data.businesses[0].name); //Log the API call response to the console
    }).catch(function (err) { //There was an error with the API call
     console.error(err); //Log the API call error to the console
     });
};

controller.hears(['hungry'],['ambient'],function(bot,message) {

	  // start a conversation to handle this response.
	  bot.startConversation(message,function(err,convo) {

	    convo.ask('What are you hungry for?',function(response,convo) {

	      convo.say('Mmmmm, ' + response.text);
        convo.say("Let's see what's looks good around you.");
        var reco = yelp_search(response.text)
        convo.next();
      });
      convo.ask("What about this?", function(response,convo){
        convo.say(reco)
        convo.next();
        });

	    });

	  });
