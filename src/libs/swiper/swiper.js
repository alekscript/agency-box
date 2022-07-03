import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 60,
    loop: true,
    navigation: {
        nextEl: '.next__btn',
        prevEl: '.prev__btn',
      },
      breakpoints: {
        // mobile + tablet - 320-990
        320: {
          slidesPerView: 1
        },
        // desktop >= 991
        768: {
          slidesPerView: 2
        },
        993: {
            slidesPerView: 3
          }
      }
  });