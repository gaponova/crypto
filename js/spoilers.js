//С одним открытым спойлером
$(document).ready(function () {
  $('.spoiler__title').click(function (event) {
    if ($('.spoilers').hasClass('one')) {
      $('.spoiler__title').not($(this)).removeClass('active');
      $('.spoiler__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});

//Все спойлеры раскрываются
$(document).ready(function () {
  $('.accordion__title').click(function (event) {
    if ($('.accordion').hasClass('one')) {
      $('.accordion__title').not($(this)).removeClass('active');
      $('.accordion__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});