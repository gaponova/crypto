$(document).ready(function () {
  $('.spoiler__title').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
});