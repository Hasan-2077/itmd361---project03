document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const slidesContainer = document.querySelector('.slides');
    const images = Array.from(slidesContainer.children);
  
    // Clone images and append to create a seamless loop
    images.forEach((image) => {
      const clone = image.cloneNode(true);
      slidesContainer.appendChild(clone);
    });
})
