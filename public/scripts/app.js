/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Fake data taken from tweets.json
var tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];
$(document).ready(function() {
  function createTweetElement(tweetData) {
    // var name = data.user.name;
    // var avatars = data.user.avatars.regular;
    // var handle = data.user.handle;
    // var content = data.content.text;
    // var created_at = data.created_at;
    // var $tweet = $('.article.tweet').addClass('tweet');

  function escape(str) {
    return str;
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

    var article = `<article class='tweet'>
          <header>
            <img src="${escape(tweetData.user.avatars.regular)}" alt="avatars" />
            <div class="user-info">
              <h2>${escape(tweetData.user.name)}</h2>
              <span>${escape(tweetData.user.handle)}</span>
          </div>
          </header>
          <div>${escape(tweetData.content.text)}</div>
          <footer>
            ${escape(tweetData.created_at)}
            <div class="icons">
              <i class="fa fa-flag" aria-hidden="true"></i>
              <i class="fa fa-retweet" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
            </div>
          </footer>
          </article>`;
    return article;
};
//   $('.tweet-dash').append(createTweetElement(tweetData));

function renderTweets(tweetData) {
  tweetData.forEach(function(tweet) {
    var newTweet= createTweetElement(tweet)
    $('.tweet-dash').prepend(newTweet);
  });
};
  renderTweets(tweetData);

});

//   // loops through tweets
//     // calls createTweetElement for each tweet
//     // takes return value and appends it to the tweets container
