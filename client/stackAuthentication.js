$(function(){
  // var token = window.localStorage.getItem('flockDocsToken');
  // if(token){

  $('.btn').click(function(){
    var userAnswer = $('.userAnswer').val();
    $.ajax({
      type: 'POST',
      url: window.location.href,
      data: {answer: userAnswer}
    });

    var postedAnswer = '<div class="answer"><hr><h4>Answer</h4><p>' + userAnswer + '</p>';
    $('.answers').prepend(postedAnswer);
    $('.userAnswer').val('');

    // shrink text area when submitted
    $userAnswer.animate({
      height: 25
    }, 1000);
  });

  // initialize text area's size
  var $userAnswer = $('.userAnswer');
  var parentWidth = $userAnswer.parent().width();
  $userAnswer.css({
    width: parentWidth,
    height: 25
  });
  // expand text area when clicked
  $userAnswer.click(function() {
    $userAnswer.animate({
      height: 150
    }, 1000);
  });

  $('body').click(function() {
    if ($userAnswer.css('height') === '150px') {
      $userAnswer.animate({
        height: 25
      }, 1000);
    }
  });
  // } else {
  //   $('.btn').text('Log in to Stack Overflow to answer');
  //   $('.btn').click(function(){
  //     window.open('https://stackexchange.com/oauth/dialog?client_id=4259&scope=&redirect_uri=http://www.google.com')
  //   });
  // }
});
