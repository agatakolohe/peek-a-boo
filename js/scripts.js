$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  
  $("p").click(function() {
    $("#otter-showing").fadeToggle();
    $("#otter-hidden").fadeToggle();
  });
}); 