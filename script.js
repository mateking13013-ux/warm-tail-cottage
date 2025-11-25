// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for sticky navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Web3Forms submission handling for all forms
    const forms = document.querySelectorAll('form.web3form');
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const statusEl = form.querySelector('.form-status');
            const submitBtn = form.querySelector('button[type=\"submit\"]');
            const originalText = submitBtn ? submitBtn.textContent : '';
            if (submitBtn) {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
            }

            const formData = new FormData(form);
            if (!formData.get('access_key')) {
                formData.set('access_key', '2b7794b2-ad87-44fd-b8b2-81f94982f768');
            }

            try {
                const response = await fetch(form.action || 'https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                const result = await response.json();
                if (result.success) {
                    const redirect = formData.get('redirect');
                    if (redirect) {
                        window.location.href = redirect;
                    } else {
                        showStatus('Thank you! Your submission has been received.', 'success');
                        form.reset();
                    }
                } else {
                    showStatus('There was a problem sending your form. Please try again.', 'error');
                }
            } catch (err) {
                console.error(err);
                showStatus('Network error. Please try again.', 'error');
            } finally {
                if (submitBtn) {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            }

            function showStatus(message, type) {
                if (statusEl) {
                    statusEl.textContent = message;
                    statusEl.className = `form-status ${type}`;
                    statusEl.style.display = 'block';
                } else {
                    alert(message);
                }
            }
        });
    });

    // Mobile menu toggle (if needed for future mobile menu)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // Add active state to navigation based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Remove active class from all links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });

    // CTA button functionality
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // "View Available Puppies" button
    const viewPuppiesBtn = document.querySelector('.btn-primary');
    if (viewPuppiesBtn && viewPuppiesBtn.textContent.includes('View Available Puppies')) {
        viewPuppiesBtn.addEventListener('click', function() {
            const puppiesSection = document.querySelector('#puppies');
            if (puppiesSection) {
                const offsetTop = puppiesSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // "Schedule a Visit" button
    const scheduleVisitBtn = document.querySelector('.btn-secondary');
    if (scheduleVisitBtn && scheduleVisitBtn.textContent.includes('Schedule a Visit')) {
        scheduleVisitBtn.addEventListener('click', function() {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Puppy inquiry buttons
    const puppyButtons = document.querySelectorAll('.puppy-btn');
    puppyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const puppyName = this.textContent.includes('Inquire About') 
                ? this.textContent.replace('Inquire About ', '')
                : 'Waitlist';
            
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Pre-fill the message field if it exists
                const messageField = document.querySelector('#message');
                if (messageField && puppyName !== 'Waitlist') {
                    messageField.value = `I am interested in learning more about ${puppyName}.`;
                } else if (messageField) {
                    messageField.value = 'I would like to join the waitlist for available puppies.';
                }
                
                // Focus on the name field
                const nameField = document.querySelector('#name');
                if (nameField) {
                    nameField.focus();
                }
            }
        });
    });

    // Book "Learn More" buttons
    const bookButtons = document.querySelectorAll('.book-btn');
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookTitle = this.closest('.book-info').querySelector('h3').textContent;
            
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Pre-fill the message field if it exists
                const messageField = document.querySelector('#message');
                if (messageField) {
                    messageField.value = `I would like to learn more about the book: ${bookTitle}`;
                }
                
                // Focus on the name field
                const nameField = document.querySelector('#name');
                if (nameField) {
                    nameField.focus();
                }
            }
        });
    });

    // Add some animation effects on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .puppy-card, .book-card, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #ca0f48 !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);
