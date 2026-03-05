const section = document.querySelector('.image-structure');
const img2 = document.querySelector('.img-2');

window.addEventListener('scroll', () => {
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // коли секція в зоні перегляду
  if (rect.top < windowHeight && rect.bottom > 0) {
    const progress = 1 - rect.top / windowHeight;
    const opacityValue = Math.min(Math.max(progress, 0), 1);
    img2.style.opacity = opacityValue;
  }
});
