document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;
    let index = 0;

    function showNextImage() {
        index++;
        if (index >= totalImages) {
            index = 0;
        }
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextImage, 2500); 
});
