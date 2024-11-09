window.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    
    // Duplicate images for seamless infinite scrolling
    images.forEach((image) => {
      const clone = image.cloneNode(true);
      slidesContainer.appendChild(clone);
    });
  });
  