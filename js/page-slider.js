function slider() {
  var space = 15;
  var speed = 1200;
  var swiperContainer = document.getElementById("swiper");
  var components = document.querySelector(".swiper-slide");

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
        anime({
          targets: ".swiper-slide",
          translateX: -20,
          easing: "linear",
          duration: 1180,
        });
      },

      transitionEnd: function () {
        anime({
          targets: ".swiper-slide",
          translateX: -100,
          easing: "linear",
          duration: 6990,
        });
      },

      touchStart: function () {
        // kvInner.classList.add("touch");
      },

      touchEnd: function () {
        // kvInner.classList.remove("touch");
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
