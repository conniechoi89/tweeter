"use strict";

module.exports = function makeDataHelpers(db) {
  return {


    saveTweet: function(newTweet, callback) {
      db.collection('tweets').insertOne(newTweet, function (err, tweet) {
        if(err) callback(err);
        callback(null, tweet);
      });
    },

    getTweets: function(callback) {
      db.collection('tweets').find().toArray(function (err, tweet) {
        console.log("rohit ",tweet);
        if(err) callback(err);
        callback(null, tweet);
      });
    }
  }
}

