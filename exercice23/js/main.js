$(document).ready(function() {
    $(".btn btn-success").click(function() {
      $("#square").animate({
        right: '0',
        bottom: "0"
      }, 500);
    });
  });