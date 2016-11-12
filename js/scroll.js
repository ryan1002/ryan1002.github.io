$(function(){

  $('a[href^="#"]').click(function(event){

    var target = $(this).attr('href');
    var strip  = target.slice(1);
    var anchor = $("a[name='" + strip + "']");

    event.preventDefault();

    $('html, body').animate({

      scrollTop: anchor.offset().top

    }, '1200');

  });

});
