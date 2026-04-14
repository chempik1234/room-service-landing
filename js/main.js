// RoomService Landing Page - Main JavaScript

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'var(--dark-bg)';
        navbar.style.boxShadow = 'none';
    }
});

// No form handling needed - users go directly to control panel

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.feature-card, .option-card, .pricing-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add loading animation to code window
const codeWindow = document.querySelector('.code-window');
if (codeWindow) {
    codeWindow.style.opacity = '0';
    codeWindow.style.transform = 'translateY(20px)';
    codeWindow.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    setTimeout(() => {
        codeWindow.style.opacity = '1';
        codeWindow.style.transform = 'translateY(0)';
    }, 500);
}

// Copy code functionality (optional enhancement)
document.querySelectorAll('.code-window pre, .terminal-window pre').forEach(pre => {
    pre.style.cursor = 'pointer';
    pre.title = 'Click to copy';

    pre.addEventListener('click', () => {
        const code = pre.textContent;
        navigator.clipboard.writeText(code).then(() => {
            const originalTitle = pre.title;
            pre.title = 'Copied!';
            setTimeout(() => {
                pre.title = originalTitle;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    });
});

// Mobile menu handling (Bootstrap handles most, but this adds smooth closing)
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', () => {
        setTimeout(() => {
            if (!navbarCollapse.classList.contains('show')) {
                // Menu is closing
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.addEventListener('click', () => {
                        navbarCollapse.classList.remove('show');
                        navbarToggler.classList.add('collapsed');
                    });
                });
            }
        }, 100);
    });
}

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section[id^="features"], section[id^="options"], section[id^="pricing"], section[id^="quickstart"]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedScroll = debounce(() => {
    // Your scroll-related code here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Console message for developers
console.log('%c🚀 RoomService', 'font-size: 24px; font-weight: bold; color: #3b82f6;');
console.log('%cReal-time room management for frontend developers', 'font-size: 14px; color: #64748b;');
console.log('%cInterested in contributing? Check out our GitHub!', 'font-size: 12px; color: #94a3b8;');
