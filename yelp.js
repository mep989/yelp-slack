/**
* File for making calls to the yelp API
*/

//Load environment variables
require('dotenv').load();

// Using the npm library located at https://github.com/olalonde/node-yelp
var Yelp = require('yelp');

//Create a Yelp object
var yelp = new Yelp({
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET
});

yelp.search({term: 'food', location: 'Chicago'})
  .then(function (data) { //The API call was returned successfully
    console.log(data); //Log the API call response to the console
  }).catch(function (err) { //There was an error with the API call
    console.error(err); //Log the API call error to the console
  });
