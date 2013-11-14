$(document).ready(function() {
    if($(".flexslider.banners").length > 0) {
        $('.flexslider.banners').flexslider({
            animation: "slide",
            animationLoop: true,
            controlNav: false,
            slideshow: false,
            smoothHeight: true,
            itemMargin: 100,
            variableImageWidth: true,
            move: 0,
            before: function(slider) {
          var player = slider.slides.eq(slider.currentSlide).find('iframe.youtube');

        if (player.length !== 0) {
          var func = 'pauseVideo'; //this === frame ? 'playVideo' : 'pauseVideo'
          player[0].contentWindow.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
        }
      },
        });
    }
});
