// Hero Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

// Initialize carousel properly
function initCarousel() {
    if (slides.length === 0) return;
    
    // Hide all slides first
    slides.forEach((slide, idx) => {
        slide.classList.remove('active', 'fade-in');
        slide.style.display = 'none';
        slide.style.opacity = '0';
    });
    
    // Show first slide
    slides[0].style.display = 'flex';
    slides[0].classList.add('active');
    slides[0].style.opacity = '1';
    
    // Set first indicator as active
    if (indicators.length > 0) {
        indicators[0].classList.add('active');
    }
}

function showSlide(n) {
    if (slides.length === 0) return;
    
    // Hide all slides
    slides.forEach((slide, idx) => {
        slide.classList.remove('active', 'fade-in');
        slide.style.display = 'none';
        slide.style.opacity = '0';
    });
    
    // Remove active from all indicators
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Calculate current slide index
    currentSlide = (n + slides.length) % slides.length;

    // Show current slide
    slides[currentSlide].style.display = 'flex';
    slides[currentSlide].style.opacity = '0';
    
    // Add active class and fade in
    requestAnimationFrame(() => {
        slides[currentSlide].classList.add('active');
        slides[currentSlide].style.opacity = '1';
    });
    
    // Set indicator as active
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.add('active');
    }
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function currentSlideIndex(n) {
    showSlide(n - 1);
}

// Auto-advance carousel
function autoAdvance() {
    if (slides.length > 1) {
        changeSlide(1);
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    
    // Add click handlers for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlideIndex(index + 1);
        });
    });
    
    // Start auto-advance only if there are multiple slides
    if (slides.length > 1) {
        let carouselInterval = setInterval(autoAdvance, 5000);
        
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', () => {
                clearInterval(carouselInterval);
            });
            heroSection.addEventListener('mouseleave', () => {
                carouselInterval = setInterval(autoAdvance, 5000);
            });
        }
    }
    
    // Initialize other animations
    const animatedElements = document.querySelectorAll('.service-modern-card, .why-choose-card, .project-card-v2, .team-card, .testimonial-card, .timeline-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add fade-in animation CSS
const style = document.createElement('style');
style.innerHTML = `
.hero-slide {
  transition: opacity 0.7s cubic-bezier(0.4,0,0.2,1);
  opacity: 0;
}
.hero-slide.active.fade-in {
  opacity: 1 !important;
}
`;
document.head.appendChild(style);

// Team Carousel Auto-scroll
function autoScrollTeam() {
    const teamCarousel = document.querySelector('.team-carousel');
    if (teamCarousel) {
        const scrollAmount = 320; // Width of one card + gap
        const maxScroll = teamCarousel.scrollWidth - teamCarousel.clientWidth;
        
        if (teamCarousel.scrollLeft >= maxScroll) {
            teamCarousel.scrollLeft = 0;
        } else {
            teamCarousel.scrollLeft += scrollAmount;
        }
    }
}

// Testimonials Carousel Auto-scroll
function autoScrollTestimonials() {
    const testimonialsCarousel = document.querySelector('.testimonials-carousel');
    if (testimonialsCarousel) {
        const scrollAmount = 370; // Width of one card + gap
        const maxScroll = testimonialsCarousel.scrollWidth - testimonialsCarousel.clientWidth;
        
        if (testimonialsCarousel.scrollLeft >= maxScroll) {
            testimonialsCarousel.scrollLeft = 0;
        } else {
            testimonialsCarousel.scrollLeft += scrollAmount;
        }
    }
}

// Start auto-scrolling for team and testimonials
setInterval(autoScrollTeam, 4000);
setInterval(autoScrollTestimonials, 3500);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!e.target.closest('.nav-menu') && !e.target.closest('.nav-toggle')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
    }
});

// Intersection Observer for animations
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

// Projects horizontal scroll enhancement
const projectsGrid = document.querySelector('.projects-grid-v2');
if (projectsGrid) {
    let isDown = false;
    let startX;
    let scrollLeft;

    projectsGrid.addEventListener('mousedown', (e) => {
        isDown = true;
        projectsGrid.style.cursor = 'grabbing';
        startX = e.pageX - projectsGrid.offsetLeft;
        scrollLeft = projectsGrid.scrollLeft;
    });

    projectsGrid.addEventListener('mouseleave', () => {
        isDown = false;
        projectsGrid.style.cursor = 'grab';
    });

    projectsGrid.addEventListener('mouseup', () => {
        isDown = false;
        projectsGrid.style.cursor = 'grab';
    });

    projectsGrid.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - projectsGrid.offsetLeft;
        const walk = (x - startX) * 2;
        projectsGrid.scrollLeft = scrollLeft - walk;
    });
}

// Initialize tooltips or other interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add any additional initialization code here
    
    // Ensure all images are loaded properly
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const number = parseInt(statNumber.textContent);
            animateCounter(statNumber, number);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        statsObserver.observe(card);
    });
});

// Form validation for contact form
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const name = this.querySelector('#name').value.trim();
        const email = this.querySelector('#email').value.trim();
        const message = this.querySelector('#message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically send the form data
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
`;

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize tooltips (if needed)
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.dataset.tooltip;
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 12px;
                z-index: 1000;
                pointer-events: none;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTooltips();
    
    // Add loading animation
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }, 1000);
    }

    // Services Carousel
    const servicesCarousel = document.querySelector('.services-carousel');
    const servicesContainer = document.querySelector('.services-carousel-container');
    
    if (servicesCarousel && servicesContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        // Mouse events for drag scrolling
        servicesContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            servicesContainer.style.cursor = 'grabbing';
            startX = e.pageX - servicesContainer.offsetLeft;
            scrollLeft = servicesContainer.scrollLeft;
        });
        
        servicesContainer.addEventListener('mouseleave', () => {
            isDown = false;
            servicesContainer.style.cursor = 'grab';
        });
        
        servicesContainer.addEventListener('mouseup', () => {
            isDown = false;
            servicesContainer.style.cursor = 'grab';
        });
        
        servicesContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - servicesContainer.offsetLeft;
            const walk = (x - startX) * 2;
            servicesContainer.scrollLeft = scrollLeft - walk;
        });
        
        // Touch events for mobile
        servicesContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - servicesContainer.offsetLeft;
            scrollLeft = servicesContainer.scrollLeft;
        });
        
        servicesContainer.addEventListener('touchmove', (e) => {
            if (!startX) return;
            e.preventDefault();
            const x = e.touches[0].pageX - servicesContainer.offsetLeft;
            const walk = (x - startX) * 2;
            servicesContainer.scrollLeft = scrollLeft - walk;
        });
        
        servicesContainer.addEventListener('touchend', () => {
            startX = null;
        });
        
        // Auto-scroll if there are many services
        const serviceCards = servicesCarousel.querySelectorAll('.service-card');
        if (serviceCards.length > 4) {
            let scrollDirection = 1;
            let scrollSpeed = 1;
            
            setInterval(() => {
                if (servicesContainer.scrollLeft >= servicesCarousel.scrollWidth - servicesContainer.clientWidth) {
                    scrollDirection = -1;
                } else if (servicesContainer.scrollLeft <= 0) {
                    scrollDirection = 1;
                }
                
                servicesContainer.scrollLeft += scrollDirection * scrollSpeed;
            }, 50);
        }
    }
});

// Team Carousel Navigation
function scrollTeamCarousel(direction) {
    const carousel = document.querySelector('.team-carousel');
    if (!carousel) return;
    
    const scrollAmount = 350; // Width of one team card + gap
    const currentScroll = carousel.scrollLeft;
    
    if (direction === 'left') {
        carousel.scrollTo({
            left: currentScroll - scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        carousel.scrollTo({
            left: currentScroll + scrollAmount,
            behavior: 'smooth'
        });
    }
} 