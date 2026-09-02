let currentSlide = 0;

const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");


function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    }

    else if (index < 0) {
        currentSlide = slides.length - 1;
    }

    else {
        currentSlide = index;
    }


    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });


    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}


function changeSlide(direction) {
    showSlide(currentSlide + direction);
}


/* Automatically change image every 5 seconds */

setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);
