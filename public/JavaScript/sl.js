
    // JavaScript for manual control of the carousel
    let currentSlide = 0;

    function showSlide(index) {
        const carouselWrapper = document.querySelector('.carousel-wrapper');
        const itemWidth = document.querySelector('.carousel-item').offsetWidth;

        currentSlide = index;
        carouselWrapper.style.transform = `translateX(${-currentSlide * itemWidth}px)`;
    }
