/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


    // var name = data.user.name
    // var avatars = data.user.avatars.regular;
    // var handle = data.user.handle;
    // var content = data.content.text;
    // var created_at = data.created_at;
    // var $tweet = $('.article.tweet').addClass('tweet');

$(function() {

  var $tweetsContainer = $('.tweet-container');

  function escape(str) {
      return str;
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
  }

  function createTweetElement(tweetData) {
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
  }; //function CreateTweetData closes here.

  function renderTweets(tweetData) {
    tweetData.forEach(function(tweet) {
      $tweetsContainer.prepend(createTweetElement(tweet));
    });
  };


  function loadTweets() {

    $.get('/tweets')
      .success(tweets => renderTweets(tweets))
      .error(error => console.log('error', error));

  }

  function submitTweet(e) {
    e.preventDefault();
    const $form = $(this);

    $.post('/tweets', $form.serialize())
      .success(() => loadTweets())
      .error(data => alert(data.error));

  }

  loadTweets();

  $("form").on("submit", submitTweet);

});


  // //Two methods:
  // //1. the method of id
  // <input type="text" id="myTest" class="mygod" />
  // $('#myTest').val()


  // //2. Method to access through the class
  // $('.mygod').val();


