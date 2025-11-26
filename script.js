let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');

function tabOpen(tabName, event) {
    let tabLinksArray = [...tabLinks];
    let tabContentsArray = [...tabContents];

    tabLinksArray.forEach(tabLink => {
        tabLink.classList.remove('active-link');
        tabLink.setAttribute('aria-selected', 'false');
    });

    tabContentsArray.forEach(tabContent => {
        tabContent.classList.remove('active-tab');
    });

    if (event?.currentTarget) {
        event.currentTarget.classList.add('active-link');
        event.currentTarget.setAttribute('aria-selected', 'true');
    }

    document.getElementById(tabName).classList.add('active-tab');
}

function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.querySelector('button[aria-label="Toggle navigation menu"]');
    const nav = document.querySelector('nav');

    if (mobileMenu && menuButton && nav && !nav.contains(e.target) && mobileMenu.classList.contains('flex')) {
        toggleMenu();
    }
});

// handle contact form submission via formspree
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const msgElement = document.getElementById('msg');
    const submitBtn = document.getElementById('submit-btn');

    if (form && msgElement && submitBtn) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Update UI to show sending state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            msgElement.textContent = 'Sending your message...';
            msgElement.style.color = '#00ff22';

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    msgElement.textContent = 'Thanks for your message! I\'ll get back to you soon.';
                    msgElement.style.color = '#00ff22';
                    form.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                msgElement.textContent = 'There was an error sending your message D: please try again or email me directly.';
                msgElement.style.color = '#ff0800';
            } finally {
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }
        });
    }

    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in-scroll elements
    document.querySelectorAll('.fade-in-scroll').forEach(el => {
        observer.observe(el);
    });

    // Animate skill bars when they come into view
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    bar.style.animation = 'none';
                    setTimeout(() => {
                        bar.style.animation = '';
                    }, 10);
                });
            }
        });
    }, observerOptions);

    const skillsTab = document.getElementById('skills');
    if (skillsTab) {
        skillObserver.observe(skillsTab);
    }
});

// Toggle genre sections on interests page
function toggleGenre(genreId) {
    const content = document.getElementById(`${genreId}-content`);
    const arrow = document.getElementById(`${genreId}-arrow`);
    
    if (content && arrow) {
        content.classList.toggle('hidden');
        arrow.classList.toggle('rotate-180');
    }
}

