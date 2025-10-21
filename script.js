console.log("Script loaded"); // Debug: Confirm script runs

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        console.log("Hamburger clicked"); // Debug: Confirm click
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
        console.log("Menu link clicked"); // Debug: Confirm link click
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
} else {
    console.log("Error: Hamburger or NavMenu not found"); // Debug: Check elements
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
