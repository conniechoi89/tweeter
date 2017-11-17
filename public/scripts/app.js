
$(function() {

  var $tweetsContainer = $('.tweet-container');

  function escape(str) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
  }

  function createTweetElement(tweetData) {
    var article = `
      <article class='tweet'>
        <header>
          <img src="${escape(tweetData.user.avatars.regular)}" alt="avatars" />
          <div class="user-info">
            <h2>${escape(tweetData.user.name)}</h2>
            <span>${escape(tweetData.user.handle)}</span>
        </div>
        </header>
        <div>${escape(tweetData.content.text)}</div>
        <footer>
          ${moment(tweetData.created_at).fromNow()}
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
      .error(data => console.log("error", data));
  }


  function submitTweet(e) {
    e.preventDefault();
    const $form = $(this);
    const $textArea = $form.find('#tweetText');
    const inputLength = $textArea.val().length;
    if (!inputLength) {
      alert('Cannot be empty');

    } else if (inputLength > maxLength) {
      alert('Tooooooo Lonnnnnnnggggg');

    } else {
      $.post('/tweets', $form.serialize())
      .success(() => {
        loadTweets();
        $textArea.val('');
      })
      .error(data => alert('ERROR talking to server!  Help!'));
    };

  }


 $("form").on("submit", submitTweet);


  loadTweets();
  const maxLength = 140;

  $(".new-tweet").hide();
  $(".compose").click(function(e) {
    $(".new-tweet").slideToggle();
    $("textarea").focus();
  });
});


