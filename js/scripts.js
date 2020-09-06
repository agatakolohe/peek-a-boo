$(document).ready(function () {
  $(".clickable").click(function () {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".eat").click(function () {
    $("#otter-showing").fadeToggle();
    $("#otter-hidden").fadeToggle();
  });

  $(".mlem").click(function () {
    $("#mlem-showing").slideToggle();
    $("#mlem-hidden").slideToggle();
  });
});
