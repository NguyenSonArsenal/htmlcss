$( document ).ready(function() {
  $(".currency__list-list li").click(function() {
    let text = $(this).text();
    $('.select-selected').text(text);
    $('.select-currency__list').css("display","none")
  });
  $('.select-selected').click(function () {
    $('.select-currency__list').css("display","block")
  })
});
