const carousel = document.getElementById('carousel');

let index = 0;
const slides = carousel.children;

function moveToSlide(index) {
    const width = slides[0].offsetWidth;
    carousel.style.transform = `translateX(-${index * width}px)`;
}

// Optional: Autoplay functionality
setInterval(() => {
    index = (index + 1) % slides.length;
    moveToSlide(index);
}, 3000); // Change slide every 3 seconds
