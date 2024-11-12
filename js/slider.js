document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides');

    // Only run the slider code if the slidesContainer exists
    if (!slidesContainer) {
        return; // Exit if there's no .slides element on the page
    }

    const images = Array.from(slidesContainer.children);

    // Clone all images once to create an infinite loop effect
    images.forEach((image) => {
        const clone = image.cloneNode(true);
        slidesContainer.appendChild(clone);
    });

    let currentPosition = 0;
    const scrollSpeed = 0.65;

    // Function to animate slider continuously in a seamless loop
    function animateSlider() {
        currentPosition -= scrollSpeed;

        if (Math.abs(currentPosition) >= slidesContainer.scrollWidth / 2) {
            currentPosition = 0;
        }

        slidesContainer.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(animateSlider);
    }

    animateSlider();
});
