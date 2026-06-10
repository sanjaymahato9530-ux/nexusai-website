// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, section').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
});

// Mock form handling
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('NexusAI: Request accepted. An agent will contact you shortly.');
    e.target.reset();
});
