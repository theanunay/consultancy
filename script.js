document.addEventListener('DOMContentLoaded', () => {

    // ======== MOBILE NAVIGATION MENU ========
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle hamburger icon to 'X' icon
        if (navLinks.classList.contains('active')) {
            menuIcon.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });


    // ======== TESTIMONIAL SLIDER ========
    const slides = document.querySelectorAll('.testimonial-slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let currentSlide = 0;

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        // Show the correct slide
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0; // Loop back to the first
        }
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1; // Loop to the last
        }
        showSlide(currentSlide);
    }

    // Button event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-play the slider (optional)
    // setInterval(nextSlide, 5000); // Change slide every 5 seconds


    // ======== CONTACT FORM SUBMISSION (Mock) ========
    const contactForm = document.getElementById('consult-form');
    const successMessage = document.getElementById('form-success-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop the form from actually submitting to a server

        // In a real website, you would send this data to a backend or email service.
        // For this demo, we'll just show a success message.

        successMessage.textContent = 'Thank you! Your message has been sent. We will get back to you soon.';

        // Clear the form
        contactForm.reset();

        // Hide the message after a few seconds
        setTimeout(() => {
            successMessage.textContent = '';
        }, 5000);
    });

});