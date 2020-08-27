$(document).ready(function () {
  var ecLogoSlider = $("#ecLogoSlider");
  ecLogoSlider.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1024: {
        items: 4,
      },
    },
  });

  var iphoneSlider = $("#iphoneSlider");
  iphoneSlider.owlCarousel({
    loop: true,
    margin: 40,
    autoplay: true,
    center: true,
    autoplayTimeout: 1500,
    items: 5,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

$(".iphone-slider-wrapper").height($(".worldBg").height());
AOS.init();
