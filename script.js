// Google-style loading screen functionality - Fixed 3 second loading
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    
    // Always show loading for exactly 3 seconds
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        mainContent.classList.add('visible');
        
        // Initialize animations after loading
        initializeAnimations();
    }, 3000); // Exactly 3 seconds
    
    // Preload images in background without blocking the 3-second timer
    const images = document.querySelectorAll('.project-image');
    images.forEach(img => {
        if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
            img.addEventListener('error', () => {
                console.warn('Image failed to load:', img.src);
                // Add fallback styling for failed images
                img.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)';
                img.classList.add('loaded'); // Still mark as loaded to prevent issues
            });
        }
    });
});

// Initialize all animations
function initializeAnimations() {
    // Typing effect for hero title (without blinking cursor)
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 120);
    }
    
    // Initialize intersection observer
    initializeIntersectionObserver();
    
    // Initialize parallax effects
    initializeParallax();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize enhanced interactions
    initializeEnhancedInteractions();
}

// Enhanced typing effect (without blinking cursor)
function typeWriter(element, text, speed = 120) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
        // No cursor line - just clean typing effect
    }
    
    type();
}

// Enhanced intersection observer
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Special handling for project images
                if (entry.target.classList.contains('project-image-container')) {
                    animateProjectImage(entry.target);
                }
                
                // Animate text elements with stagger
                if (entry.target.classList.contains('project-description')) {
                    animateTextElements(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const elements = document.querySelectorAll('.intro, .experience, .skills, .project-item, .project-image-container, .project-description');
    elements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Enhanced project image animation
function animateProjectImage(container) {
    const image = container.querySelector('.project-image');
    if (image && image.classList.contains('loaded')) {
        // Smooth reveal animation
        image.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        image.style.transform = 'scale(1)';
        image.style.opacity = '1';
        
        // Add subtle bounce effect
        setTimeout(() => {
            image.style.transform = 'scale(1.02)';
            setTimeout(() => {
                image.style.transform = 'scale(1)';
            }, 300);
        }, 400);
    }
}

// Animate text elements with stagger effect
function animateTextElements(container) {
    const textElements = container.querySelectorAll('p, li');
    textElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `all 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100);
    });
}

// Enhanced parallax scrolling
function initializeParallax() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        // Hero parallax with smoother movement
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.2;
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        // Project images parallax with improved performance
        const projectImages = document.querySelectorAll('.project-image-container');
        projectImages.forEach((container, index) => {
            const rect = container.getBoundingClientRect();
            const speed = 0.05 + (index * 0.02);
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = -(scrolled - container.offsetTop) * speed;
                const image = container.querySelector('.project-image');
                if (image && image.classList.contains('loaded')) {
                    image.style.transform = `translateY(${yPos}px) scale(1)`;
                }
            }
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
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
}

// Enhanced interactions
function initializeEnhancedInteractions() {
    // Enhanced project container interactions
    const projectContainers = document.querySelectorAll('.project-image-container');
    
    projectContainers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 25px 80px rgba(0, 0, 0, 0.6)';
            
            const image = this.querySelector('.project-image');
            if (image && image.classList.contains('loaded')) {
                image.style.transform = 'scale(1.05)';
            }
        });
        
        container.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
            
            const image = this.querySelector('.project-image');
            if (image && image.classList.contains('loaded')) {
                image.style.transform = 'scale(1)';
            }
        });
        
        // Enhanced click effect
        container.addEventListener('click', function() {
            this.style.transform = 'translateY(-4px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            }, 150);
        });
    });

    // Enhanced skill items interaction
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(15px)';
            this.style.borderColor = '#4a9eff';
            this.style.color = '#ffffff';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.borderColor = '#1a1a1a';
            this.style.color = '#cccccc';
        });
    });

    // Enhanced link interactions
    const links = document.querySelectorAll('a:not(.project-image-container)');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Enhanced cursor trail effect
let mouseX = 0;
let mouseY = 0;
let trail = [];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function createEnhancedCursorTrail() {
    // Create trail elements if they don't exist
    if (document.querySelectorAll('.cursor-trail').length === 0) {
        for (let i = 0; i < 6; i++) {
            const trailElement = document.createElement('div');
            trailElement.className = 'cursor-trail';
            trailElement.style.cssText = `
                position: fixed;
                width: ${8 - i}px;
                height: ${8 - i}px;
                background: rgba(74, 158, 255, ${0.9 - i * 0.15});
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                mix-blend-mode: screen;
            `;
            document.body.appendChild(trailElement);
        }
    }
    
    if (trail.length > 6) {
        trail.shift();
    }
    
    trail.push({ x: mouseX, y: mouseY });
    
    const trailElements = document.querySelectorAll('.cursor-trail');
    trail.forEach((point, index) => {
        if (trailElements[index]) {
            trailElements[index].style.left = (point.x - (8 - index) / 2) + 'px';
            trailElements[index].style.top = (point.y - (8 - index) / 2) + 'px';
        }
    });
}

setInterval(createEnhancedCursorTrail, 40);

// Enhanced floating background elements
function createFloatingElements() {
    const container = document.body;
    
    for (let i = 0; i < 4; i++) {
        const element = document.createElement('div');
        element.className = 'floating-bg-element';
        element.style.cssText = `
            position: fixed;
            width: ${Math.random() * 100 + 80}px;
            height: ${Math.random() * 100 + 80}px;
            background: radial-gradient(circle, rgba(74, 158, 255, 0.03) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            animation: floatBg ${Math.random() * 40 + 30}s infinite linear;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            opacity: 0;
        `;
        container.appendChild(element);
    }
}

// Enhanced floating animation
const enhancedFloatingStyle = document.createElement('style');
enhancedFloatingStyle.textContent = `
    @keyframes floatBg {
        0% {
            transform: translateY(100vh) rotate(0deg) scale(0.5);
            opacity: 0;
        }
        10% {
            opacity: 1;
            transform: translateY(90vh) rotate(36deg) scale(0.7);
        }
        50% {
            transform: translateY(50vh) rotate(180deg) scale(1);
        }
        90% {
            opacity: 1;
            transform: translateY(10vh) rotate(324deg) scale(0.7);
        }
        100% {
            transform: translateY(-10vh) rotate(360deg) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(enhancedFloatingStyle);

// Initialize floating elements
document.addEventListener('DOMContentLoaded', createFloatingElements);

// Enhanced project credits animation
document.addEventListener('DOMContentLoaded', () => {
    const creditElements = document.querySelectorAll('.project-credits p');
    
    creditElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-30px)';
        element.style.transition = `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.15}s`;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(element);
    });
});

// Performance optimization
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate animations on resize
        initializeParallax();
    }, 250);
});

// Preload images for better performance
function preloadImages() {
    const images = ['images/health-whisper.jpg', 'images/neuro-synk.jpg', 'images/binary-box.jpg'];
    images.forEach(src => {
        const img = new Image();
        img.onload = () => console.log(`Preloaded: ${src}`);
        img.onerror = () => console.warn(`Failed to preload: ${src}`);
        img.src = src;
    });
}

// Initialize preloading
document.addEventListener('DOMContentLoaded', preloadImages);

// Enhanced error handling for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.project-image');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Image failed to load:', this.src);
            // Create a placeholder or fallback
            this.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.innerHTML = '<div style="color: #666; font-size: 1rem;">Image Loading...</div>';
        });
    });
});