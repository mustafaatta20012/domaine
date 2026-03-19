/* ==========================================
   PAGE LOAD (Spinner + Phone Animation)
========================================== */

window.addEventListener("load", function () {
  // Spinner
  const spinner = document.getElementById("spinner");
  if (spinner) {
    spinner.classList.remove("show");
  }

  // Animate phone numbers
  animatePhoneNumbers();
});

/* ==========================================
   ANIMATE PHONE NUMBERS
========================================== */

function animatePhoneNumbers() {
  const numbers = document.querySelectorAll(".phone-number");

  numbers.forEach((el) => {
    const finalNumber = el.dataset.number;

    // حماية من الأخطاء
    if (!finalNumber) return;

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

/* ==========================================
   BACK TO TOP BUTTON (jQuery only)
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
