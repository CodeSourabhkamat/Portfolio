// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form Validation for Contact Form
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate name
    if (name === "") {
        alert("Name is required.");
        event.preventDefault();
        return;
    }
    
    // Validate phone
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        event.preventDefault();
        return;
    }
    
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }
    
    // Validate message
    if (message === "") {
        alert("Message is required.");
        event.preventDefault();
    }
});

// Fade-in Animation for Elements
const animatedElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

animatedElements.forEach(el => observer.observe(el));

// Apply 'fade-in' class to sections you want animated
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
});
