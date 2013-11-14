$(window).load(function() {
    if($(".flexslider.banners").length > 0) {
        $('.flexslider.banners').flexslider({
            animation: "slide",
            animationLoop: true,
            controlNav: false,
            slideshow: false,
            smoothHeight: true,
            variableImageWidth: true
        });
    }
});

$(window).load(function() {
  $('.flexslider.banners').fadeIn(1000);
})
