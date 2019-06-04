/* ===============================
            SLIDER
================================== */
(function () {
  var slider = document.querySelector(".feedbacks__wrapper");
  var slides = slider.getElementsByClassName("feedbacks__item");
  var controls = document.getElementById("feedbacks__controls");
  var dots = document.querySelectorAll(".feedbacks__dot");
  var slideIndex = 1;
  var size = slider.clientWidth;

  showSlides(slideIndex);

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slider.style.width = slides.length * 100 + "%";

    for (var index = 0; index < slides.length; index++) {
      slides[index].style.width = 100 / slides.length + "%";
    }

    // убираем класс active у элементов управления dots
    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    //перемещаем слайдер на нужное количество px
    slider.style.marginLeft = -(100 * (slideIndex-1)) + "%";
    //добавляем класс active точке на которую нажали
    dots[slideIndex-1].className += " active";
  }

  // событие клика на блоке с точками
  controls.addEventListener("click", function(event) {
    var target = event.target; // элемент на котором кликнули
    var num = target.getAttribute('data-item'); // получаем атрибут data-item элемента, на котором кликнули
    if(num) currentSlide(num);
  });
})();
/* ===============================
          END SLIDER
================================== */
