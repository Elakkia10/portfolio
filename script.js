// Add an event listener to trigger animations when the page loads
document.addEventListener('DOMContentLoaded', function() {
    animateElements();
});

// Function to animate elements when the page loads
function animateElements() {
    // Get elements to animate
    var header = document.getElementById('header');
    var columns = document.querySelectorAll('.column');
    var passageBox = document.querySelector('.passage_box');
    var container3 = document.querySelector('.container3');

    // Add classes to trigger animations
    header.classList.add('slideInFromLeft');
    columns.forEach(function(column, index) {
        column.classList.add('slideInFromLeft');
        column.style.animationDelay = (index * 0.5) + 's'; // Staggered animation delay
    });
    passageBox.classList.add('slideInFromLeft');
    container3.classList.add('slideInFromLeft');
}
// Add an event listener to trigger animations after a short delay
window.addEventListener('load', function() {
    setTimeout(animateElements, 500);
});

// Function to animate elements when triggered
function animateElements() {
    // Get the header text element
    var headerText = document.querySelector('.header-text');

    // Add a class to trigger the animation
    headerText.classList.add('fade-in');
}
