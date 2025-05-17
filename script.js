// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections and content cards
document.querySelectorAll('.section, .content-card').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Observe gallery images for staggered animation
document.querySelectorAll('.gallery-img').forEach((img, index) => {
    img.style.transitionDelay = `${index * 0.2}s`;
    img.classList.add('fade-in');
    observer.observe(img);
});

// Form submission handler with animation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Add success animation
    const button = this.querySelector('.submit-btn');
    button.innerHTML = '✓ Sent!';
    button.style.backgroundColor = '#4CAF50';
    
    // Reset form and button after delay
    setTimeout(() => {
        this.reset();
        button.innerHTML = 'SEND MESSAGE';
        button.style.backgroundColor = '';
    }, 3000);
});

// Add hover effect to work items
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

