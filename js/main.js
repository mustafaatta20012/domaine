(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);
/* ==========================================
   SPINNER LOADER
   Hide loading spinner after full page load
========================================== */

window.addEventListener("load", function () {
  const spinner = document.getElementById("spinner");

  if (spinner) {
    spinner.classList.remove("show");

    // تأخير بسيط لإعطاء تأثير تلاشي ناعم
    setTimeout(function () {
      spinner.style.display = "none";
    }, 500);
  }
});

/* ==========================================
   BACK TO TOP BUTTON
   Show when scrolling down, hide when up
========================================== */

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // عند أعلى الصفحة يختفي
  if (scrollTop <= 100) {
    backToTopBtn.classList.remove("show");
  }

  // عند النزول يظهر
  else if (scrollTop > lastScrollTop) {
    backToTopBtn.classList.add("show");
  }

  // عند الصعود يختفي
  else {
    backToTopBtn.classList.remove("show");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
// show number phone 

    function animatePhoneNumbers() {

  const numbers = document.querySelectorAll(".phone-number");

  numbers.forEach(el => {

    const finalNumber = el.dataset.number;
    let current = "";
    let i = 0;

    function typeNumber() {
      if (i < finalNumber.length) {
        current += finalNumber[i];
        el.textContent = current;
        i++;
        setTimeout(typeNumber, 120);
      }
    }

    typeNumber();

  });

}

window.addEventListener("load", animatePhoneNumbers);

