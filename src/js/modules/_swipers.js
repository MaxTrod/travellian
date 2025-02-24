import Swiper from "swiper";
import { Pagination, Navigation, EffectFade, Manipulation} from "swiper/modules";
import * as kek from "./_photo-swipe.js";


let heroSwiper, destSwiper, tripSlider;
export let gallery;
let config = {
  modules: [Pagination, Navigation, EffectFade],
  effect: "fade",
  slidesPerView: 1,
  resizeObserver: true,
  observer: true,
  observeParents: true,
  updateOnWindowResize: true,
  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".hero__arrow.swiper-button-next",
    prevEl: ".hero__arrow.swiper-button-prev",
  }
}

let galleryConfig = {
  modules: [Navigation],
  observer: true,
  resizeObserver: true,
  observeParents: true,
  updateOnWindowResize: true,
  spaceBetween: 16,
  slidesPerView: 1,
  navigation: {
    prevEl: '.slider-control__prev--gallery',
    nextEl: '.slider-control__next--gallery',
  },
  breakpoints: {
    1151.98: {
      spaceBetween: 32,
      slidesPerView: 4,
    }
  }
}

function initSliders() {
  if(document.querySelector('.hero__slider')) {
    heroSwiper = new Swiper('.hero__slider', config);
    function kek() {
      if( (window.innerWidth >= 767.98)  && (window.innerHeight >= 640)  ) {
        heroSwiper.destroy(true, true);
        heroSwiper = new Swiper('.hero__slider', config);
        heroSwiper.enable();
      }
      if( (window.innerWidth <= 767.98)  && (window.innerHeight <= 640)  ) {
        heroSwiper.destroy(true, true);
        heroSwiper = new Swiper('.hero__slider', config);
        heroSwiper.disable();
      }
      if( (window.innerWidth >= 767.98)  && (window.innerHeight <= 640)  ) {
        heroSwiper.destroy(true, true);
        heroSwiper = new Swiper('.hero__slider', config);
        heroSwiper.disable();
      }
      if( (window.innerWidth <= 767.98)  && (window.innerHeight >= 640)  ) {
        heroSwiper.destroy(true, true);
        heroSwiper = new Swiper('.hero__slider', config);
        heroSwiper.disable();
      }
    }
    kek();
    window.addEventListener('resize', kek);
  }
  if(document.querySelector('.destinations__slider')) {
    new Swiper('.destinations__slider', { 
      modules: [Navigation],
      observer: true,
      observeParents: true,
      spaceBetween: 16,
      navigation: {
        prevEl: '.slider-control__prev--dest',
        nextEl: '.slider-control__next--dest',
      },
      breakpoints: {
        1151.98: {
          slidesPerView: "auto",
          spaceBetween: 32,
        },
      }
    });
  }
  if(document.querySelector('.offer__slider')) {
    new Swiper('.offer__slider', { 
      modules: [Navigation],
      observer: true,
      observeParents: true,
      spaceBetween: 16,
      slidesPerView: 1,
      navigation: {
        prevEl: '.slider-control__prev--offer',
        nextEl: '.slider-control__next--offer',
      },
      breakpoints: {
        1151.98: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      }
    });
  }
  if(document.querySelector('.trip__slider')) {
      tripSlider = new Swiper('.trip__slider', { 
      observer: true,
      observeParents: true,
      spaceBetween: 32,
      slidesPerView: "auto",
      breakpoints: {
        320: {
          spaceBetween: 0,
        },
        1151.98: {
          slidesPerView: "auto",
          spaceBetween: 32,
          
        }
      }
    });
    function tripDisable() {
      if(window.innerWidth <= 1151.98) {
        tripSlider.disable();
      } else {
        tripSlider.enable();
      }
    }
    tripDisable();
    window.addEventListener('resize', tripDisable);
  }
  if(document.querySelector('.gallery__slider')) {
    gallery = new Swiper('.gallery__slider', galleryConfig);
  }
  if(document.querySelector('.feedback__slider')) {
    new Swiper('.feedback__slider', {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      spaceBetween: 16,
      slidesPerView: 1,
      navigation: {
        prevEl: '.slider-control__prev--feed',
        nextEl: '.slider-control__next--feed',
      },
      breakpoints: {
        767.98: {
          slidesPerView: "auto",
          spaceBetween: 32,
        },
      }
    })
  }
}
initSliders();

const gallerySlider = document.querySelector('.gallery__slider');
const galleryWrapper = document.querySelector('.gallery__wrapper');

const firstSlider = `
          <div class="gallery__wrapper swiper-wrapper popup-gallery">
            <div class="gallery__slide swiper-slide">
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/1_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/1.jpg" srcset="img/gallery/1_2x.jpg 2x" loading="lazy" alt="men">
              </a>
            </div>
            <div class="gallery__slide swiper-slide">
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/2_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/2.jpg" srcset="img/gallery/2_2x.jpg 2x" loading="lazy" alt="men">
              </a>
            </div>
            <div class="gallery__slide swiper-slide">
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/3_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/3.jpg" srcset="img/gallery/3_2x.jpg 2x" loading="lazy" alt="men">
              </a>
            </div>
            <div class="gallery__slide swiper-slide">
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/4_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/4.jpg" srcset="img/gallery/4_2x.jpg 2x" loading="lazy" alt="men">
              </a>
            </div>
            <div class="gallery__slide swiper-slide">
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/1_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/1.jpg" srcset="img/gallery/1_2x.jpg 2x" loading="lazy" alt="men">
              </a>
            </div>
            <div class="gallery__slide swiper-slide">
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/2_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/2.jpg" srcset="img/gallery/2_2x.jpg 2x" loading="lazy" alt="men">
              </a>
            </div>
            <div class="gallery__slide swiper-slide">
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/3_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/3.jpg" srcset="img/gallery/3_2x.jpg 2x" loading="lazy" alt="men">
              </a>
            </div>
            <div class="gallery__slide swiper-slide">
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/4_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/4.jpg" srcset="img/gallery/4_2x.jpg 2x" loading="lazy" alt="men">
              </a>
            </div>
          </div>
`;
const secondSlider = `
            <div class="gallery__wrapper swiper-wrapper popup-gallery">
            <div class="gallery__slide swiper-slide">
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/1_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/1.jpg" srcset="img/gallery/1_2x.jpg 2x" loading="lazy" alt="men">
              </a>
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/2_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/2.jpg" srcset="img/gallery/2_2x.jpg 2x" loading="lazy" alt="men">
              </a>
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/3_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/3.jpg" srcset="img/gallery/3_2x.jpg 2x" loading="lazy" alt="men">
              </a>
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/4_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/4.jpg" srcset="img/gallery/4_2x.jpg 2x" loading="lazy" alt="men">
              </a>
            </div>
            <div class="gallery__slide swiper-slide">
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/1_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/1.jpg" srcset="img/gallery/1_2x.jpg 2x" loading="lazy" alt="men">
              </a>
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/2_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/2.jpg" srcset="img/gallery/2_2x.jpg 2x" loading="lazy" alt="men">
              </a>
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/3_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/3.jpg" srcset="img/gallery/3_2x.jpg 2x" loading="lazy" alt="men">
              </a>
              <a data-pswp-width="" data-pswp-height="" class="popup-gallery__item" href="img/gallery/4_3x.jpg">
                <img class="popup-gallery__image" width="365" height="570" src="img/gallery/4.jpg" srcset="img/gallery/4_2x.jpg 2x" loading="lazy" alt="men">
              </a>
            </div>
          </div>
`;


let resizeTimeout;
function changeSlider() {
  if (window.innerWidth <= 1151.98) {
    gallerySlider.innerHTML = secondSlider;
  } else {
    gallerySlider.innerHTML = firstSlider;
  }
  gallery = new Swiper('.gallery__slider', galleryConfig);
  kek.initGallery();
}

function debounce(func, wait) {
  return function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(func, wait);
  };
}

// Инициализация при загрузке страницы
changeSlider();

// Добавляем слушатель на изменение размера окна
window.addEventListener('resize', debounce(changeSlider, 300)); // 300 мс — задержка для дебаунса

// window.addEventListener('load', function(e) {
//   initSliders();
// });














