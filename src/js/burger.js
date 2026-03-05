const menuButton = document.querySelector('.js-btn-burger-menu');
const closeButton = document.querySelector('.js-close-menu');
const burgerMenu = document.querySelector('.js-burger-menu');
const menuNavLinks = document.querySelectorAll('.nav-link-burger');
const logoEl = document.querySelector('.logo-link');

function openMenu() {
  if (!burgerMenu) return;

  burgerMenu.classList.add('active');
  burgerMenu.style.visibility = 'visible';
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  if (!burgerMenu) return;

  burgerMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');

  setTimeout(() => {
    burgerMenu.style.visibility = 'hidden';
  }, 300);
}

if (menuButton) {
  menuButton.addEventListener('click', openMenu);
}

if (closeButton) {
  closeButton.addEventListener('click', closeMenu);
}

document.addEventListener('click', event => {
  if (!burgerMenu || !menuButton) return;

  if (
    !burgerMenu.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    closeMenu();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

menuNavLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

if (logoEl) {
  logoEl.addEventListener('click', closeMenu);
}
