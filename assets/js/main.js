(function ($) {
  "use strict";


  /*---------------------
     Header
  ---------------------*/
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
      $('.header-area').addClass('header-bg');
    } else {
      if ($('.navbar-collapse').hasClass('show')) {} else {
        $('.header-area').removeClass("header-bg");
      }
    }
  });


  /*---------------------
      Navbar
  ----------------------*/
  $('document').ready(function () {
    $('.dropdown-menu').hover(function () {
      $(this).siblings().toggleClass("active");
    });
  });


  /*---------------------
      AOS Animation
  ---------------------*/

  $('document').ready(function () {
    AOS.init();
  });


  /*---------------------
      Owl Carousel
  ----------------------*/
  $(document).ready(function () {
    $('.la-product-wrapper').owlCarousel({
      autoplay: true,
      margin: 15,
      loop: true,
      infinite: true,
      nav: true,
      dots: false,
      items: 4,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    });



    $('.testimonial-wrapper').owlCarousel({
      autoplay: true,
      margin: 15,
      loop: true,
      infinite: true,
      nav: true,
      dots: false,
      items: 4,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });

  $('.testimonial-wrapper-2').owlCarousel({
    autoplay: true,
    margin: 15,
    loop: true,
    infinite: true,
    nav: true,
    dots: false,
    items: 1,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  /*---------------------
    Counter Up
  ---------------------*/
  $('.counter').counterUp();



  /*---------------------
    Magnific Popup
  ---------------------*/
  $('.memories-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  /*---------------------
      Video Play
  ---------------------*/
  $('.play-btn').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',

      srcAction: 'iframe_src',
    }
  });

  /*---------------------
    Scroll to top
  ---------------------*/
  $('body').materialScrollTop();


  /*---------------------
    PreLoader
  ---------------------*/
  $("#preloader").introLoader({

    animation: {
      name: 'cssLoader',
      options: {
        exitFx: 'slideUp',
        ease: "easeOutSine",
        style: 'dark',
        delayBefore: 700,
        exitTime: 700
      }
    }

  });

  /*---------------------
    Elivated Zoom
  --------------------- */
  $(".elivate-lg-img").elevateZoom({
    gallery: 'thumb-img',
    zoomType: "inner",
    cursor: "crosshair",
  });


  $(document).ready(function () {
    $('.cv-carousel').carouselVertical().trigger('goTo', [5]);
  });



  /*---------------------
  Price Range Dynamic
  --------------------- */
  $(window).on('load', function () {

    $('#price-range-submit').hide();

    $("#min_price,#max_price").on('change', function () {

      $('#price-range-submit').show();

      var min_price_range = parseInt($("#min_price").val());

      var max_price_range = parseInt($("#max_price").val());

      if (min_price_range > max_price_range) {
        $('#max_price').val(min_price_range);
      }

      $("#slider-range").slider({
        values: [min_price_range, max_price_range]
      });

    });


    $("#min_price,#max_price").on("paste keyup", function () {

      $('#price-range-submit').show();

      var min_price_range = parseInt($("#min_price").val());

      var max_price_range = parseInt($("#max_price").val());

      if (min_price_range == max_price_range) {

        max_price_range = min_price_range + 100;

        $("#min_price").val(min_price_range);
        $("#max_price").val(max_price_range);
      }

      $("#slider-range").slider({
        values: [min_price_range, max_price_range]
      });

    });


    $(function () {
      $("#slider-range").slider({
        range: true,
        orientation: "horizontal",
        min: 0,
        max: 10000,
        values: [0, 10000],
        step: 100,

        slide: function (event, ui) {
          if (ui.values[0] == ui.values[1]) {
            return false;
          }

          $("#min_price").val(ui.values[0]);
          $("#max_price").val(ui.values[1]);
        }
      });

      $("#min_price").val($("#slider-range").slider("values", 0));
      $("#max_price").val($("#slider-range").slider("values", 1));

    });

    $("#slider-range,#price-range-submit").click(function () {

      var min_price = $('#min_price').val();
      var max_price = $('#max_price').val();

      $("#searchResults").text("Here List of products will be shown which are cost between " + "$" + +min_price + " " + "and" + " $" + max_price + ".");
    });

  });



  /*---------------------
   Contact Form
  ---------------------*/
  if ($('body').find('.contact-form').length !== 0) {
    // Form 1
    $('.cf-msg').hide();
    $('form#cf button#submit').on('click', function () {

      var firstName = $('#firstName').val();
      var email = $('#email').val();
      var subjectName = $('#subjectName').val();
      var msg = $('#msg').val();
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (!regex.test(email)) {
        alert('Please enter valid email');
        return false;
      }

      firstName = $.trim(firstName);
      subjectName = $.trim(subjectName);
      email = $.trim(email);
      msg = $.trim(msg);

      if (firstName != '' && email != '' && msg != '') {
        var values = "firstName=" + firstName + "&subjectName=" + subjectName + "&email=" + email + " &msg=" + msg;
        $.ajax({
          type: "POST",
          url: "assets/php/mail.php",
          data: values,
          success: function () {
            $('#firstName').val('');
            $('#subjectName').val('');
            $('#email').val('');
            $('#msg').val('');

            $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
            setTimeout(function () {
              $('.cf-msg').fadeOut('slow');
            }, 4000);
          }
        });
      } else {
        $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
      }
      return false;
    });

  }

  /*---------------------
  Product Details Page 
  --------------------- */
  $(window).on('load', function () {
    $('.xzoom, .xzoom-gallery').xzoom({
      zoomWidth: 400,
      title: true,
      tint: '#333',
      Xoffset: 15
    });
    $('.xzoom2, .xzoom-gallery2').xzoom({
      position: '#xzoom2-id',
      tint: '#ffa200'
    });
    $('.xzoom3, .xzoom-gallery3').xzoom({
      position: 'lens',
      lensShape: 'circle',
      sourceClass: 'xzoom-hidden'
    });
    $('.xzoom4, .xzoom-gallery4').xzoom({
      tint: '#006699',
      Xoffset: 15
    });
    $('.xzoom5, .xzoom-gallery5').xzoom({
      tint: '#006699',
      Xoffset: 15
    });

    //Integration with hammer.js
    var isTouchSupported = 'ontouchstart' in window;

    if (isTouchSupported) {
      //If touch device
      $('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function () {
        var xzoom = $(this).data('xzoom');
        xzoom.eventunbind();
      });

      $('.xzoom, .xzoom2, .xzoom3').each(function () {
        var xzoom = $(this).data('xzoom');
        $(this).hammer().on("tap", function (event) {
          event.pageX = event.gesture.center.pageX;
          event.pageY = event.gesture.center.pageY;
          var s = 1,
            ls;

          xzoom.eventmove = function (element) {
            element.hammer().on('drag', function (event) {
              event.pageX = event.gesture.center.pageX;
              event.pageY = event.gesture.center.pageY;
              xzoom.movezoom(event);
              event.gesture.preventDefault();
            });
          }

          xzoom.eventleave = function (element) {
            element.hammer().on('tap', function (event) {
              xzoom.closezoom();
            });
          }
          xzoom.openzoom(event);
        });
      });

      $('.xzoom4').each(function () {
        var xzoom = $(this).data('xzoom');
        $(this).hammer().on("tap", function (event) {
          event.pageX = event.gesture.center.pageX;
          event.pageY = event.gesture.center.pageY;
          var s = 1,
            ls;

          xzoom.eventmove = function (element) {
            element.hammer().on('drag', function (event) {
              event.pageX = event.gesture.center.pageX;
              event.pageY = event.gesture.center.pageY;
              xzoom.movezoom(event);
              event.gesture.preventDefault();
            });
          }

          var counter = 0;
          xzoom.eventclick = function (element) {
            element.hammer().on('tap', function () {
              counter++;
              if (counter == 1) setTimeout(openfancy, 300);
              event.gesture.preventDefault();
            });
          }

          function openfancy() {
            if (counter == 2) {
              xzoom.closezoom();
              $.fancybox.open(xzoom.gallery().cgallery);
            } else {
              xzoom.closezoom();
            }
            counter = 0;
          }
          xzoom.openzoom(event);
        });
      });

      $('.xzoom5').each(function () {
        var xzoom = $(this).data('xzoom');
        $(this).hammer().on("tap", function (event) {
          event.pageX = event.gesture.center.pageX;
          event.pageY = event.gesture.center.pageY;
          var s = 1,
            ls;

          xzoom.eventmove = function (element) {
            element.hammer().on('drag', function (event) {
              event.pageX = event.gesture.center.pageX;
              event.pageY = event.gesture.center.pageY;
              xzoom.movezoom(event);
              event.gesture.preventDefault();
            });
          }

          var counter = 0;
          xzoom.eventclick = function (element) {
            element.hammer().on('tap', function () {
              counter++;
              if (counter == 1) setTimeout(openmagnific, 300);
              event.gesture.preventDefault();
            });
          }

          function openmagnific() {
            if (counter == 2) {
              xzoom.closezoom();
              var gallery = xzoom.gallery().cgallery;
              var i, images = new Array();
              for (i in gallery) {
                images[i] = {
                  src: gallery[i]
                };
              }
              $.magnificPopup.open({
                items: images,
                type: 'image',
                gallery: {
                  enabled: true
                }
              });
            } else {
              xzoom.closezoom();
            }
            counter = 0;
          }
          xzoom.openzoom(event);
        });
      });

    } else {
      //If not touch device

      //Integration with fancybox plugin
      $('#xzoom-fancy').bind('click', function (event) {
        var xzoom = $(this).data('xzoom');
        xzoom.closezoom();
        $.fancybox.open(xzoom.gallery().cgallery, {
          padding: 0,
          helpers: {
            overlay: {
              locked: false
            }
          }
        });
        event.preventDefault();
      });

      //Integration with magnific popup plugin
      $('#xzoom-magnific').bind('click', function (event) {
        var xzoom = $(this).data('xzoom');
        xzoom.closezoom();
        var gallery = xzoom.gallery().cgallery;
        var i, images = new Array();
        for (i in gallery) {
          images[i] = {
            src: gallery[i]
          };
        }
        $.magnificPopup.open({
          items: images,
          type: 'image',
          gallery: {
            enabled: true
          }
        });
        event.preventDefault();
      });
    }
  });

}(jQuery));