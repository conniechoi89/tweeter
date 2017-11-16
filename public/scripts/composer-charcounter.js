$(document).ready(function() {
  var maxLength = 140;
  $('.new-tweet textarea').keyup(function() {
    const counter = $('.counter');
    var length = maxLength-$(this).val().length;
    counter.text(length);
    if(length < 0) {
      counter.css('color','red')
    } else {
      counter.css('color','black')
    };
  });
})