$(document).ready(function() {
     $(window).scroll(function() { 
        if ($(this).scrollTop() > 20) {
             $('.navbar').addClass("sticky");
     }
      else { $('.navbar').removeClass("sticky"); 
    } 

});

   
// toggle menu/navbar script
 $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
      });

 });

   