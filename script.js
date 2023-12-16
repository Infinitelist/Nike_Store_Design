/* Rutherford Labbe: 09-28-2023 */

/* Plays video */
var video = document.getElementById("myVideo");
video.play();

// Section indicators
let slideIndex = 1;
showSlides(slideIndex);

// Next card
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Current card
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Dot slider
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("grid_item_section");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}