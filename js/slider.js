document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const slidesContainer = document.querySelector('.slides');
    const images = Array.from(slidesContainer.children);
  
    // Clone images twice to ensure seamless looping
    images.forEach((image) => {
        const clone1 = image.cloneNode(true);
        const clone2 = image.cloneNode(true);
        slidesContainer.appendChild(clone1);
        slidesContainer.appendChild(clone2);
    });

    // Initial variables
    let currentPosition = 0;
    const scrollSpeed = 0.9; // Adjust speed as needed

    // Function to animate slider continuously
    function animateSlider() {
        currentPosition -= scrollSpeed;

        // Reset position smoothly when halfway through the cloned slides
        if (Math.abs(currentPosition) >= slidesContainer.scrollWidth / 3) {
            currentPosition = 0;
        }

        slidesContainer.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(animateSlider);
    }

    // Start the animation
    animateSlider();
});
