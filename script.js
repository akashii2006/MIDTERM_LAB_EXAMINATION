/*
========================================
PORTFOLIO WEBSITE JAVASCRIPT
CCS114 - Web Technologies Laboratory Exam
========================================

Sources Referenced:
- DOM Manipulation: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- Event Listeners: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- Smooth Scroll: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
- Scroll Event: https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll_event
- Form Submit Event: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
- Mouse Events: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
*/

/*
========================================
NAVBAR SCROLL EFFECT
Source: https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll_event
========================================
*/
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/*
========================================
SMOOTH SCROLLING FOR NAVIGATION LINKS
Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
========================================
*/
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

/*
========================================
ACTIVE NAVIGATION LINK HIGHLIGHTING
Highlights current section in navbar
========================================
*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
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

/*
========================================
SCROLL REVEAL ANIMATION
Elements fade in when scrolling into view
========================================
*/
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/*
========================================
PROGRESS BAR ANIMATION
Animates skill bars when they come into view
========================================
*/
const progressBars = document.querySelectorAll('.progress-bar');

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        }
    });
};

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);

/*
========================================
CONTACT FORM SUBMISSION ANIMATION
Source: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
Shows visual feedback without server submission
========================================
*/
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('.btn-submit');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
        btn.classList.remove('btn-submit');
        btn.classList.add('btn-success');
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.add('btn-submit');
            btn.classList.remove('btn-success');
            btn.disabled = false;
            this.reset();
        }, 2000);
    }, 1500);
});

/*
========================================
GALLERY ITEM HOVER EFFECT ENHANCEMENT
Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
========================================
*/
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});