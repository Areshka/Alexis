
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

window.onload = function() {

  var video = document.getElementById('video');
  var control = document.getElementById('control');

  function switchState() {
    if (video.paused == true) {
      video.play();
      control.classList.remove("video__control--play");
      control.classList.add("video__control--pause");
    } else {
      video.pause();
      control.classList.remove("video__control--pause");
      control.classList.add("video__control--play");
    }
  }

  function checkKey(e) {
    if (e.keycode == 32 ) { //spacebar
      switchState();
    }
  }

  control.addEventListener('click', function() {
    switchState();
  }, false);

  window.addEventListener( "keypress", checkKey, false );
}
