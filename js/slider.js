document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.slider-container');
  const slidesContainer = document.querySelector('.slides');
  const images = Array.from(slidesContainer.children);

  // Clone images and append to create a seamless loop
  images.forEach((image) => {
      const clone = image.cloneNode(true);
      slidesContainer.appendChild(clone);
  });

  // Set initial variables
  let currentPosition = 0;
  const scrollSpeed = 1; // Adjust speed as needed

  // Function to animate slider
  function animateSlider() {
      currentPosition -= scrollSpeed;

      // Reset to start for seamless looping
      if (Math.abs(currentPosition) >= slidesContainer.scrollWidth / 2) {
          currentPosition = 0;
      }

      slidesContainer.style.transform = `translateX(${currentPosition}px)`;
      requestAnimationFrame(animateSlider);
  }

  // Start animation
  animateSlider();
});
