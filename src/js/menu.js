/* ===============================
            MENU
================================== */
(function () {
  var mainNav = document.querySelector('.main-nav');
  var toggle = document.querySelector('.main-nav__toggle');

  toggle.addEventListener("click", function (event) {
    event.preventDefault();
    if (mainNav.classList.contains('main-nav--open')) {
      mainNav.classList.remove('main-nav--open');
    } else {
      mainNav.classList.add('main-nav--open')
    }
  });
})();
/* ===============================
          END MENU
================================== */
