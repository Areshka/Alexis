(function () {
  var slider = document.querySelector(".feedbacks__wrapper");
  var slides = slider.getElementsByClassName("feedbacks__item");
  var dots = document.querySelectorAll(".feedbacks__dot");
  var slideIndex = 1;
  var size = slider.clientWidth;

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slider.style.transform = "translateX(" + (-(slideIndex - 1) * size) + "px";
    dots[slideIndex - 1].className += " active";
  }

  showSlides(slideIndex);
  for (var i = 0; i < dots.length; i++) {
    alert(dots[i] );
    // dots[i].addEventListener("click", function () {
    //    currentSlide(i+1);
    //   alert(i+1);
    // });
  }
})();
