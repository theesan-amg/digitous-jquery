$("button").click(function(){
    $("#square").animate({
        width: '+=500px'
    }, 3000, function() { 
      console.log("animation terminée !");
    });
})