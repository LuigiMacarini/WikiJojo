document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.querySelector('.carrossel-images');
    const images = document.querySelectorAll(".carrossel-images img");
    const totalImages = images.length;
    let index = 0;

    function nextImage() {
        index++;
        if (index >= totalImages) {index = 0;}
        const descolc = -index * 100;
        carrossel.style.transform = `translateX(${descolc}%)`;}setInterval(nextImage, 2500); 
});
