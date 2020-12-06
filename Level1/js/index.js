// Chờ cho tới khi mọi thứ trên trang web được load xong sẽ chạy những gì bên trong ready
$(document).ready(function () {
  $('.link_portfolio').click(function () {
    scrollTo('.item_portfolio');
  });
  $('.link_about').click(function () {
    scrollTo('.item_about');
  });
  $('.link_contact').click(function () {
    scrollTo('.item_contact');
  });
});

function scrollTo(id, offset) {
  var speed = 500;
  var target = $(id ? id : 'html');
  var position = target.offset().top - (offset ? offset : 40);
  $("html, body").animate({scrollTop: position}, speed, "swing");
}

// Được thực hiện khi thực hiện scroll
$(window).scroll(function () {
  let scroll = $(this).scrollTop();
  let portfolioOffset = $('.item_portfolio').position().top - 100; // Khoảng cách từ vị trí class item_portfolio tới top
  let aboutOffset = $('.item_about').position().top  - 100;
  let contactOffset = $('.item_contact').position().top  - 100;

  switch (true) {
    case scroll >= contactOffset:
        $(".link_contact").addClass("active");
        $(".link_portfolio").removeClass("active");
        $(".link_about").removeClass("active");
        break;
    case scroll >= aboutOffset:
      $(".link_about").addClass("active");
      $(".link_contact").removeClass("active");
      $(".link_portfolio").removeClass("active");
      break;

    case scroll >= portfolioOffset:
      $(".link_portfolio").addClass("active");
      $(".link_contact").removeClass("active");
      $(".link_about").removeClass("active");
      break;
  }
});
