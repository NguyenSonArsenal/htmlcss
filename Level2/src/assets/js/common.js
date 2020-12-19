$( document ).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    items:1,
    touchDrag: true,
    mouseDrag: true,
    navText: ["<i class='ion-ios-arrow-left'></i>", "<i class='ion-ios-arrow-right'></i>"],
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
    }
  });

  // handle click list currency
  $(".currency__list-list li").click(function() {
    let text = $(this).text();
    $('.currency__custom_select .select-selected').text(text);
    $('.currency__custom_select .select-currency__list').css("display","none")
  });
  $('.currency__custom_select .select-selected').click(function () {
    $("#currency__list-list").toggle();
  })

  // handle click list nation
  $(".nation-selected").click(function () {
    $("#nation__list-list").toggle();
  });
  $(".nation__list-list li").click(function() {
    let text = $(this).text();
    let imgSrc = $("img", this).attr('src');
    $('.nation__custom_select .select-selected span').text(text);
    $('.nation__custom_select .select-selected img').attr("src", imgSrc);
    $(this).parent().css("display", "none");
  });


  /* ===============================================================================
    Menu
   ===============================================================================
  */
});
