(function () {
  'use strict';

  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.main-nav__link--active').classList.remove('main-nav__link--active');
        document.querySelector('a[href*= ' + i + ']').className += "  main-nav__link--active";
      }
    }
  };

})();
