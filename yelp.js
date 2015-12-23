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
/*
function yelp_search(term){
  yelp.search({term: 'food', location: 'Chicago', limit: 2, sort:2, category_filter: 'restaurants'})
  .then(function (data) { //The API call was returned successfully
    console.log(data.businesses[0].name);
    console.log(data.businesses[0].url);
  }).catch(function (err) { //There was an error with the API call
    console.error(err); //Log the API call error to the console
  });
  */
function yelp_search(food){
  yelp.search({term: food, location: 'Chicago', limit: 2, sort: 2})
    .then(function (data) { //The API call was returned successfully
      console.log(data.businesses[0].name); //Log the API call response to the console
    }).catch(function (err) { //There was an error with the API call
     console.error(err); //Log the API call error to the console
     });
};
yelp_search('mexican')
