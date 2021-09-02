$(document).ready(function () {
  // Set time of Carousel Slider
  $('.carousel').carousel({
    interval: 6000
  });
  // When click on Gear button, toggle Options Box
  $('.gear-button').on("click", function () {
    $('.color-option').fadeToggle();
  });
  // Change Theme Color When click item of color option list
  $('.options-box .color-option li').on('click', function () {
    let themeData = $(this).attr('data-theme');
    $('link[href*="theme"]').attr('href', 'css/' + themeData + '.css');
  } );
  const scrollTopButton = $('.scroll-top');
  // When Window is scrolling more than 900px, show Scroll Top Button and others hide it
  $(window).scroll(function () {
    // console.log($(this).scrollTop()); // debug
    $(this).scrollTop() >= 900 ? scrollTopButton.fadeIn(1000) : scrollTopButton.fadeOut(1000);
  });
  // When Click on Scroll Top Button, Go to Top
  scrollTopButton.on('click', function () {
    $("html").animate({scrollTop: 0}, 600);
  });
  // Loading Screen fadeOut after the page loaded
  $('.loading-overlay .sk-chase').fadeOut(1000, function () {
    $('body').css('overflow', 'auto');
    $(this).parent().fadeOut(1000, function () {
      $(this).remove();
    });
  });
  // Nice Scroll
  $("body").niceScroll({
    cursorcolor: "var(--main-color)",
    cursorwidth: "14px"
  });
});







// Loading Screen after the page loaded
//$(window).load(function () {
//  $('.loading-overlay .sk-chase').fadeOut(1000, function () {
//    $('.loading-overlay').fadeOut(1000, function () {
//      $('body').css('overflow', 'auto');
//    });
//  });
//});
