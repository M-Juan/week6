"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiper1 = new Swiper(".course-swiper", {
  autoplay: {
    disableOnInteraction: false,
    delay: 0
  },
  speed: 1500,
  loop: true,
  spaceBetween: 16,
  slidesPerView: "3",
  breakpoints: {
    375: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 6
    },
    992: {
      slidesPerView: 9
    }
  }
});
var swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var swiper2 = new Swiper(".myswiper", {
  // centeredSlides: true,
  // autoplay: {
  //     disableOnInteraction: false,
  //     delay: 0
  // },
  // speed: 1500,
  // loop: true,
  spaceBetween: 16,
  slidesPerView: 3,
  //多欄
  breakpoints: {
    375: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 6
    },
    992: {
      slidesPerView: 6
    }
  }
});
//# sourceMappingURL=all.js.map
