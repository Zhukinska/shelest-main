import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { Fancybox } from '@fancyapps/ui/dist/fancybox/';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const ROOMS_GALLERIES = {
  '1A': {
    area: '183.22 м²',
    price: '2500$ м²',
    images: [
      { thumb: './img/1A-1.jpg', full: './img/1A-1.jpg' },
      { thumb: './img/1A-2.jpg', full: './img/1A-2.jpg' },
      { thumb: 'img/1A-3.jpg', full: 'img/1A-3.jpg' },
      { thumb: 'img/1A-4.jpg', full: 'img/1A-4.jpg' },
      { thumb: 'img/1A-5.jpg', full: 'img/1A-5.jpg' },
    ],
  },
  '1B': {
    area: '184.36 м²',
    price: '2500$ м²',
    images: [
      { thumb: '/img/1B-1.jpg', full: '/img/1B-1.jpg' },
      { thumb: 'img/1B-2.jpg', full: 'img/1B-2.jpg' },
      { thumb: 'img/1B-3.jpg', full: 'img/1B-3.jpg' },
      { thumb: 'img/1B-4.jpg', full: 'img/1B-4.jpg' },
      { thumb: 'img/1B-5.jpg', full: 'img/1B-5.jpg' },
    ],
  },
  '2A': {
    area: '215.55 м²',
    price: '2500$ м²',
    images: [
      { thumb: 'img/2A-1.jpg', full: 'img/2A-1.jpg' },
      { thumb: 'img/2A-2.jpg', full: 'img/2A-2.jpg' },
      { thumb: 'img/2A-3.jpg', full: 'img/2A-3.jpg' },
      { thumb: 'img/2A-4.jpg', full: 'img/2A-4.jpg' },
      { thumb: 'img/2A-5.jpg', full: 'img/2A-5.jpg' },
    ],
  },
  '3A': {
    area: '243.84 м²',
    price: '2600$ м²',
    images: [
      { thumb: 'img/3A-1.jpg', full: 'img/3A-1.jpg' },
      { thumb: 'img/3A-2.jpg', full: 'img/3A-2.jpg' },
      { thumb: 'img/3A-3.jpg', full: 'img/3A-3.jpg' },
      { thumb: 'img/3A-4.jpg', full: 'img/3A-4.jpg' },
      { thumb: 'img/3A-5.jpg', full: 'img/3A-5.jpg' },
    ],
  },
  '4A': {
    area: '238.29 м²',
    price: '2600$ м²',
    images: [
      { thumb: 'img/4A-1.jpg', full: 'img/4A-1.jpg' },
      { thumb: 'img/4A-2.jpg', full: 'img/4A-2.jpg' },
      { thumb: 'img/4A-3.jpg', full: 'img/4A-3.jpg' },
      { thumb: 'img/4A-4.jpg', full: 'img/4A-4.jpg' },
      { thumb: 'img/4A-5.jpg', full: 'img/4A-5.jpg' },
    ],
  },
  '4B': {
    area: '276.8 м²',
    price: '2800$ м²',
    images: [
      { thumb: 'img/4B-1.jpg', full: 'img/4B-1.jpg' },
      { thumb: 'img/4B-2.jpg', full: 'img/4B-2.jpg' },
      { thumb: 'img/4B-3.jpg', full: 'img/4B-3.jpg' },
      { thumb: 'img/4B-4.jpg', full: 'img/4B-4.jpg' },
      { thumb: 'img/4B-5.jpg', full: 'img/4B-5.jpg' },
    ],
  },
  '5A': {
    area: '312.15 м²',
    price: '2800$ м²',
    images: [
      { thumb: 'img/5A-1.jpg', full: 'img/5A-1.jpg' },
      { thumb: 'img/5A-2.jpg', full: 'img/5A-2.jpg' },
      { thumb: 'img/5A-3.jpg', full: 'img/5A-3.jpg' },
      { thumb: 'img/5A-4.jpg', full: 'img/5A-4.jpg' },
      { thumb: 'img/5A-5.jpg', full: 'img/5A-5.jpg' },
    ],
  },
  '5B': {
    area: '365.14 м²',
    price: '2800$ м²',
    images: [
      { thumb: 'img/5B-1.jpg', full: 'img/5B-1.jpg' },
      { thumb: 'img/5B-2.jpg', full: 'img/5B-2.jpg' },
      { thumb: 'img/5B-3.jpg', full: 'img/5B-3.jpg' },
      { thumb: 'img/5B-4.jpg', full: 'img/5B-4.jpg' },
      { thumb: 'img/5B-5.jpg', full: 'img/5B-5.jpg' },
    ],
  },
  '5C': {
    area: '490.84 м²',
    price: '3000$ м²',
    images: [
      { thumb: 'img/5C-1.jpg', full: 'img/5C-1.jpg' },
      { thumb: 'img/5C-2.jpg', full: 'img/5C-2.jpg' },
      { thumb: 'img/5C-3.jpg', full: 'img/5C-3.jpg' },
      { thumb: 'img/5C-4.jpg', full: 'img/5C-4.jpg' },
      { thumb: 'img/5C-5.jpg', full: 'img/5C-5.jpg' },
    ],
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const roomsSwiper = new Swiper('.room-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 800,
    navigation: {
      nextEl: '.room-button-next',
      prevEl: '.room-button-prev',
    },

    roundLengths: true,
    slidesOffsetAfter: 26.25,
  });

  function renderRoom(roomKey) {
    const wrapper = document.querySelector(
      '.rooms .room-swiper .swiper-wrapper'
    );

    const titleEl = document.querySelector('.room-title');
    const areaEl = document.querySelector('.room-area');
    const priceEl = document.querySelector('.room-price');

    const roomData = ROOMS_GALLERIES[roomKey];
    if (!wrapper || !roomData) return;

    Fancybox.unbind('[data-fancybox^="room-"]');

    if (titleEl) titleEl.textContent = roomKey;
    if (areaEl) areaEl.textContent = roomData.area;
    if (priceEl) priceEl.textContent = roomData.price;

    wrapper.innerHTML = '';

    roomData.images.forEach((img, index) => {
      wrapper.insertAdjacentHTML(
        'beforeend',
        `
        <div class="swiper-slide">
          <a
            href="${img.full}"
            data-fancybox="room-${roomKey}"
            data-index="${index}"


          >
            <img src="${img.thumb}" alt="" />
          </a>
        </div>
        `
      );
    });

    if (roomsSwiper && roomsSwiper.update) {
      roomsSwiper.update();
      roomsSwiper.slideTo(0, 0);
    }

    Fancybox.bind(`[data-fancybox="room-${roomKey}"]`, {
      Carousel: {
        Toolbar: {
          display: {
            left: [],
            middle: [],
            right: ['close'],
          },
        },
        Thumbs: false,
      },

      on: {
        change: (fancybox, slide) => {
          if (typeof slide.index === 'number') {
            roomsSwiper.slideTo(slide.index);
          }
        },
      },
    });
  }
  document.querySelectorAll('.house-tabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      const room = btn.dataset.target;

      document
        .querySelectorAll('.house-tabs button')
        .forEach(b => b.classList.remove('is-active'));

      btn.classList.add('is-active');

      renderRoom(room);
    });
  });

  const activeBtn = document.querySelector('.house-tabs .is-active');
  if (activeBtn) renderRoom(activeBtn.dataset.target);
});
