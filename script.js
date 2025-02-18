// JavaScript for automatic slideshow functionality
let slideIndex = {};

// Function to initialize slideshow
function initSlideshow(id) {
    slideIndex[id] = 0;
    showSlides(id);
    // Automatically change slides every 5 seconds (5000 ms)
    setInterval(function() {
        nextSlide(id);
    }, 5000);
}

// Function to show the current slide
function showSlides(id) {
    let slides = document.querySelectorAll(`#${id} .slide`);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex[id]++;
    if (slideIndex[id] > slides.length) {slideIndex[id] = 1;} // Reset index if it exceeds the number of slides
    slides[slideIndex[id] - 1].style.display = "block"; // Display the current slide
}

// Function to show the next slide manually
function nextSlide(id) {
    slideIndex[id]++;
    let slides = document.querySelectorAll(`#${id} .slide`);
    if (slideIndex[id] > slides.length) {
        slideIndex[id] = 1; // Go back to the first slide
    }
    showSlides(id);
}

// Function to show the previous slide manually
function prevSlide(id) {
    slideIndex[id]--;
    let slides = document.querySelectorAll(`#${id} .slide`);
    if (slideIndex[id] < 1) {
        slideIndex[id] = slides.length; // Go to the last slide if below 1
    }
    showSlides(id);
}

// Initialize both slideshows on page load
window.onload = function() {
    initSlideshow('upcoming-events');
    initSlideshow('featured-events');
};
