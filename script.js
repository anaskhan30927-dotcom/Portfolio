/* ============================================
   PROFESSIONAL MICROBIOLOGY PORTFOLIO
   JavaScript - Navigation, Dark Mode & Interactions
   ============================================ */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on button click
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', 
            menuToggle.classList.contains('active') ? 'true' : 'false');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || menuToggle.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    const themeIcon = document.querySelector('.theme-icon');

    // Check for saved theme preference or default to light
    function getThemePreference() {
        const saved = localStorage.getItem('theme');
        if (saved) {
            return saved;
        }
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        return 'light';
    }

    // Apply theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            html.setAttribute('data-theme', 'dark');
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            html.removeAttribute('data-theme');
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    }

    // Initialize theme
    const initialTheme = getThemePreference();
    applyTheme(initialTheme);

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            const theme = e.matches ? 'dark' : 'light';
            applyTheme(theme);
        });
    }
});

// Scroll Reveal Animation (Fade In)
document.addEventListener('DOMContentLoaded', function() {
    // Only apply animations if user hasn't requested reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation to cards and sections
    const elementsToAnimate = document.querySelectorAll(
        '.education-card, .experience-card, .volunteer-card, .research-card, ' +
        '.award-card, .skill-category, .activity-item, .biotech-role, ' +
        '.contact-card, .framework-item'
    );

    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Active Nav Link Highlighting
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// Keyboard Navigation Enhancement
document.addEventListener('DOMContentLoaded', function() {
    // Improve keyboard navigation for all interactive elements
    const links = document.querySelectorAll('a, button');
    
    links.forEach(element => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && this.tagName !== 'A' && this.tagName !== 'BUTTON') {
                this.click();
            }
        });
    });
});

// Smooth Scroll Behavior (Fallback for older browsers)
document.addEventListener('DOMContentLoaded', function() {
    // Check if smooth scroll is supported
    const supportsScrollBehavior = 'scrollBehavior' in document.documentElement.style;
    
    if (!supportsScrollBehavior) {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }
});

// Print Optimization
window.addEventListener('beforeprint', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.display = 'none';
    }
});

window.addEventListener('afterprint', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.display = '';
    }
});

// Performance: Lazy loading images (optional - can be enhanced)
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (!img.complete) {
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Image will load naturally
                        obs.unobserve(entry.target);
                    }
                });
            });
            observer.observe(img);
        }
    });
}

// Console welcome message
console.log(
    '%c🔬 Welcome to Muhammad Anas Khan\'s Portfolio! 🔬',
    'color: #228B8B; font-size: 16px; font-weight: bold; padding: 10px;'
);
console.log(
    '%cMPhil Microbiology Student | Emerging Researcher',
    'color: #1a3a52; font-size: 14px; padding: 5px;'
);
console.log(
    'For questions or opportunities, reach out via the contact section!'
);
