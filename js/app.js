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

/* #Popup
  ======================================================= */
const popups = document.querySelectorAll('.popup');
const popupTogglers = document.querySelectorAll('.popup-toggler');
const popupClosers = document.querySelectorAll('.popup-close');
const popupBackdrops = document.querySelectorAll('.popup-backdrop');
const body = document.querySelector('body');

if (popups && popupTogglers) {
  popups.forEach((popup) => {
    gsap.set(popup, {
      display: 'block'
    });
  });
  
  popupTogglers.forEach((toggler) => {
    toggler.addEventListener('click', (e) => {
      e.preventDefault();

      const popup = document.querySelector(toggler.dataset.popup);

      body.classList.add('no-scroll');
      popup.classList.add('show');
    });
  });
}

if (popupClosers) {
  popupClosers.forEach((closer) => {
    closer.addEventListener('click', (e) => {
      e.preventDefault();

      const popup = closer.closest('.popup');

      body.classList.remove('no-scroll');
      popup.classList.remove('show');
    })
  });
}

if (popupBackdrops) {
  popupBackdrops.forEach((backdrop) => {
    backdrop.addEventListener('click', (e) => {
      e.preventDefault();

      const popup = backdrop.closest('.popup');

      body.classList.remove('no-scroll');
      popup.classList.remove('show');
    })
  });
}

/* #Size Popup
  ======================================================= */
// Sliders
var sizePopupSlider1 = document.getElementById('sizePopupSlider1');
var sizePopupSlider2 = document.getElementById('sizePopupSlider2');

if (sizePopupSlider1) {
  noUiSlider.create(sizePopupSlider1, {
    range: {
      'min': 60,
      'max': 115
    },
    step: 5,
    start: 60,
    behaviour: 'tap-drag',
    pips: {
      mode: 'steps',
      stepped: true,
      density: 10
    }
  });
}

if (sizePopupSlider2) {
  noUiSlider.create(sizePopupSlider2, {
    range: {
      'min': 60,
      'max': 115
    },
    step: 5,
    start: 60,
    behaviour: 'tap-drag',
    pips: {
      mode: 'steps',
      stepped: true,
      density: 10
    }
  });
}