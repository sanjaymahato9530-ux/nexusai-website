// FIX: Ensure DOM is fully loaded before attaching listeners
document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scroll Fix
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form Handling
    const form = document.getElementById('contactForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Request received!');
        });
    }
});
