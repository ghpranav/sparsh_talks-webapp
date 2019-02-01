$(document).ready(function () {

  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).on('click', '.navbar-collapse.in', function (e) {
  if ($(e.target).is('a:not(".dropdown-toggle")')) {
    $(this).collapse('hide');
  }
});