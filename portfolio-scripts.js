// Typing Effect for Hero Section
function typeWriter(text, element, speed = 100) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Scroll Animation for Skills
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  });

  elements.forEach(element => {
    observer.observe(element);
  });
}

// Progress Bar Animation
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');
  
  progressBars.forEach(bar => {
    const target = bar.getAttribute('data-target');
    bar.style.width = '0%';
    
    setTimeout(() => {
      bar.style.width = target + '%';
    }, 100);
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar Animation
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// Experience Timeline Animation
function animateTimeline() {
  const timelineItems = document.querySelectorAll('.experience-item');
  
  timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.3}s`;
    item.classList.add('animate-timeline');
  });
}

// Initialize Particles Background
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    move: {
      enable: true,
      speed: 6
    }
  }
});

// Initialize All Animations
document.addEventListener('DOMContentLoaded', () => {
  // Start typing effect
  const heroText = document.querySelector('.hero-text');
  typeWriter('Data Engineer & Azure Specialist', heroText);
  
  // Initialize animations
  animateOnScroll();
  animateProgressBars();
  animateTimeline();
  
  // Initialize skill bars
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    bar.style.width = percentage + '%';
  });
});
