function slider() {
  var space = 15;
  var speed = 1200;
  var swiperContainer = document.getElementById("swiper");
  var components = document.querySelectorAll(".slide-component");

  const swiper = new Swiper(".swiper", {
    loop: true,
    direction: "horizontal",
    speed: speed,

    slidesPerView: "auto",
    autoplay: {
      delay: 7000,
    },
    // spaceBetween: space,
    // centeredSlides: true,
    // touchMoveStopPropagation: false,
    // virtualTranslate: false,

    on: {
      init: function () {
        // this.el.classList.add("init");
        console.log("Init");
      },

      slideChange: function () {
        // kvInner.classList.add("slideChange");
      },

      transitionStart: function () {
        components.forEach((element) => {
          element.classList.remove("animation-left");
          element.classList.add("animation-stop");
        });
      },

      transitionEnd: function () {
        components.forEach((element) => {
          element.classList.add("animation-left");
          element.classList.remove("animation-stop");
        });
      },

      touchStart: function () {
        components.forEach((element) => {
          element.classList.remove("animation-left");
          element.classList.add("animation-stop");
        });
      },

      touchEnd: function () {
        // kvInner.classList.remove("touch");
        components.forEach((element) => {
          element.classList.add("animation-left");
          element.classList.remove("animation-stop");
        });
      },

      sliderMove: function () {
        // kvInner.classList.add("touch");
        // kvInner.classList.add("touchMove");
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

(function () {
  slider();
})();
