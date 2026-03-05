import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import { Fancybox } from '@fancyapps/ui/dist/fancybox/';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.preview-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: 800,

    navigation: {
      nextEl: '.projects-next',
      prevEl: '.projects-prev',
    },

    roundLengths: true,
    slidesOffsetAfter: 26.1188,
    slidesOffsetBefore: 26.1188,
  });

  Fancybox.bind('[data-fancybox="projects"]', {
    Carousel: {
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ['close'],
        },
      },

      Thumbs: {
        type: 'classic',
      },
    },
  });
});
