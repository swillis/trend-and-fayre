// Can also be used with $(document).ready()
$(window).load(function() {

  var sum = 0,
      count = -1,
      all = $('ul.slides > li');
  all.each(function() {
      sum += +$('img:eq(0)', this).width();
      count++;
  });

  var avWidth = sum / count;

  $('.flexslider').flexslider({
    animation: "slide",
    itemWidth: avWidth,
    itemMargin: 10,
    controlNav: false,
    directionNav: true,
    // move: 2,
    slideshow: false
  });
});
