$(document).click(function() {
  // console.log('xx', $("#nation__list-list").is(":visible"))
  // console.log('xx2', $("#nation__list-list").css("display") === 'none')
  // if($("#nation__list-list").is(":visible")) {
  //   $("#nation__list-list").css("display", "none")
  // }
  // if($(".currency__custom_select #select-currency__list").is(":visible")) {
  //   $('.currency__custom_select #select-currency__list').css("display","none")
  // }
});

$( document ).ready(function() {
  // handle click list currency
  $(".currency__list-list li").click(function() {
    let text = $(this).text();
    $('.currency__custom_select .select-selected').text(text);
    $('.currency__custom_select .select-currency__list').css("display","none")
  });
  $('.currency__custom_select .select-selected').click(function () {
    if($(".currency__custom_select .select-currency__list").is(":hidden")) {
      $('.currency__custom_select .select-currency__list').css("display","block")
    } else {
      $('.currency__custom_select .select-currency__list').css("display","none")
    }
  })

  // handle click list nation
  $(".nation-selected").click(function () {
    if($(".nation__list-list").is(":hidden")) {
      $(".nation__list-list").css("display", "block")
    } else {
      $(".nation__list-list").css("display", "none")
    }
  });
  $(".nation__list-list li").click(function() {
    let text = $(this).text();
    let imgSrc = $("img", this).attr('src');
    $('.nation__custom_select .select-selected span').text(text);
    $('.nation__custom_select .select-selected img').attr("src", imgSrc);
    $(this).parent().css("display", "none");
  });
});
