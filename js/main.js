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

//     function animatePhoneNumbers() {

//   const numbers = document.querySelectorAll(".phone-number");

//   numbers.forEach(el => {

//     const finalNumber = el.dataset.number;
//     let current = "";
//     let i = 0;

//     function typeNumber() {
//       if (i < finalNumber.length) {
//         current += finalNumber[i];
//         el.textContent = current;
//         i++;
//         setTimeout(typeNumber, 120);
//       }
//     }

//     typeNumber();

//   });

// }

// window.addEventListener("load", animatePhoneNumbers);
