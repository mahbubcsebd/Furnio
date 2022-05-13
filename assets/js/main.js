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

}(jQuery));