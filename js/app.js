/* #Customer Bar
================================================== */
new Swiper(".customer-bar .swiper-container", {
  breakpoints: {
    0: {
      slidesPerView: 3.3,
      allowTouchMove: true

    },
    1024: {
      slidesPerView: 5,
      allowTouchMove: false
    }
  },
  pagination: {
    el: ".customer-bar .swiper-pagination",
  },
});