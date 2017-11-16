/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


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

$(document).ready(function() {

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
      var newTweet= createTweetElement(tweet)
      $('.tweet-dash').prepend(newTweet);
    });
  };
  //renderTweets(tweetData);

//   $('.tweet-dash').append(createTweetElement(tweetData));

 //   // loops through tweets
//     // calls createTweetElement for each tweet
//     // takes return value and appends it to the tweets container


  function loadTweets(){
    //makes an ajax call to load the data from /tweets
    $.ajax({
      type: "GET",
      url: "/tweets",
      //data: $form.serialize(),
      success: function(result){
        console.log("success", result);
        renderTweets(result);
      },
      error: function(error){
        console.log("error", error);
      }
    })
  }
  loadTweets();


  function submitTweet(event) {
    event.preventDefault();
    const $form = $(this);
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $form.serialize(),
      success: function(result){
        console.log("success", result);
        var newTweet = {
              "user": {
                "name": "Connie",
                "avatars": {
                  "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
                  "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
                  "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
                },
                "handle": "@connie_great"
              },
              "content": {
                "text": $('#tweetText').val()
              },
              "created_at": 1461113796368
            }
        var temp = createTweetElement(newTweet)
        $('.tweet-dash').prepend(temp);
      },
      error: function(error){
        console.log("error", error);
      }
    })
      // .done(() => {
      //   const type = $form.find('input[name="type"]').val();
      //   console.log(type);
      //   //$('.tweet-dash').prepend(`<textarea>${(form)}</textarea>`);
      // })
  }

  // const $form = $('.new-tweet');

  // $(".new-tweet form").on("submit", submitTweet);


  // function loadTweets()

});
  // //Two methods:
  // //1. the method of id
  // <input type="text" id="myTest" class="mygod" />
  // $('#myTest').val()


  // //2. Method to access through the class
  // $('.mygod').val();


