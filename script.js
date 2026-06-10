// High-performance Intersection Observer for smooth entry
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.card, section, header').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
});

document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Request submitted. An AI solution architect will reach out shortly.');
});
