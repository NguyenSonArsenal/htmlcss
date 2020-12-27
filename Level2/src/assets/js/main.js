/* ============================= 1, init  ============================= */
$(document).ready(function() {
  owl.init();
  headerTop.init();
  menuDesktop.init()
  menuMobile.init()
});


/* ============================= 1. OWL ============================= */
const owl = {
  init: function () {
    this.clientSlider();
  },
  clientSlider() {
    $(".owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      items: 1,
      touchDrag: true,
      mouseDrag: true,
      navText: ["<i class='ion-ios-arrow-left'></i>", "<i class='ion-ios-arrow-right'></i>"],
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
      }
    });
  }
}

/* ============================= 2. HEADER TOP ============================= */

const headerTop = {
  init() {
    this.handleClickListCurrency();
    this.handleClickListNation();
  },

  handleClickListCurrency() {
    $(".currency__list-list li").click(function() {
      let text = $(this).text();
      $('.currency__custom_select .select-selected').text(text);
      $('.currency__custom_select .select-currency__list').css("display","none")
    });
    $('.currency__custom_select .select-selected').click(function () {
      $("#currency__list-list").toggle();
    })
  },

  handleClickListNation() {
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
  },
}

/* ============================= 3. HEADER BOTTOM DESkTOP ============================= */
const menuDesktop = {
  init: function () {
    this.hoverMenuBlogLevel1();
    this.handleIconSearch();
  },
  hoverMenuBlogLevel1() {
    $(".item-dropdown__menu-blog .a-nav-link").hover(
      function () {
        $(this).find('.fa-angle-right').hide();
        $(this).find('.fa-angle-left').show();
      }, function () {
        $(this).find('.fa-angle-left').hide();
        $(this).find('.fa-angle-right').show();
      })
  },
  handleIconSearch() {
    $('.modalSearch .close_search .fa-times').click(function () {
      $("div.search_overlay").removeClass('open');
      $(".modalSearch").hide();
    })
    $(".navbar-nav__nav-item-nav-link i.icon__search").click(function () {
      $("div.search_overlay").addClass('open');
      $(".modalSearch").show();
    })
  }
}

// Bind to scroll
$(window).scroll(function(){
  if ($(this).scrollTop() > 200) {
    $('.header__bottom').addClass('sticky');
  } else {
    $('.header__bottom').removeClass('sticky');
  }
});

/* ============================= 4. HEADER BOTTOM MOBILE ============================= */
const menuMobile = {
  init: function () {
    this.handleClickCart();
  },
  handleClickCart() {
    $('.icon__control-item-cart > .navbar-nav__nav-item-nav-link').click(function () {
      $('.cart__box').slideToggle('slow');
    })

    $('.cart__box-sp .ion-close').click(function () {
      $('.cart__box').hide('slow');
    })

    $('.navbar__icon__control .ion-android-menu').click(function () {
      $(this).hide();
      $('.navbar__icon__control .ion-android-close').show();
      $('.navbar-collapse').show();
      $('.cart__box-sp').hide('slow');
    })
    $('.navbar__icon__control .ion-android-close').click(function () {
      $(this).hide();
      $('.navbar__icon__control .ion-android-menu').show();
      $('.navbar-collapse').hide();
    })

    $('.navbar-nav-l1').click(function () {
      $('.navbar-collapse').not(this).find('.dropdown-menu__list').hide('slow');
      if($(this).find('.dropdown-menu__list').css('display') == 'none'){
        $(this).find('.dropdown-menu__list').show('slow');
      } else {
        $(this).find('.dropdown-menu__list').hide('slow');
      }
    })
  }
}
