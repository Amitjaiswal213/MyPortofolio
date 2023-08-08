// Smooth scrolling when clicking on links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
    window.scroll({
        top: target.offsetTop - 60, // Adjust scrolling position to accommodate header height
        behavior: 'smooth'
    });
    }
});
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
mobileMenu.classList.toggle('show');
});

// Close mobile menu on link click
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
mobileMenuLinks.forEach(link => {
link.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
});
});
