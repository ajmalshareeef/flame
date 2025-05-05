
// Initialize Testimonials Carousel
function initTestimonialsCarousel() {
  $('#testimonials-carousel').owlCarousel({
    loop: true,
    margin: 30,
    center: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });
}

// Initialize when DOM is ready
$(document).ready(function() {
  initTestimonialsCarousel();
});
  
  // Load dependencies if needed
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery == 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
      script.onload = function() {
        const owlScript = document.createElement('script');
        owlScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
        owlScript.onload = initTestimonialsCarousel;
        document.head.appendChild(owlScript);
      };
      document.head.appendChild(script);
    } else {
      initTestimonialsCarousel();
    }
  });
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('navbarToggler');
    const navbarMenu = document.getElementById('navbarMenu');
    
    if (navbarToggler && navbarMenu) {
        navbarToggler.addEventListener('click', function() {
            // Toggle the active class on both elements
            this.classList.toggle('active');
            navbarMenu.classList.toggle('active');
            
            // Update aria-expanded attribute
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Prevent scrolling when menu is open
            document.body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link (for mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navbarToggler.classList.remove('active');
                    navbarMenu.classList.remove('active');
                    document.body.style.overflow = '';
                    navbarToggler.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('navbarToggler');
  const navLinks = document.getElementById('navbarMenu');
  
  if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function() {
          this.classList.toggle('active');
          navLinks.classList.toggle('active');
          
          // Prevent scrolling when menu is open
          document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
      });
      
      // Close menu when clicking on a link (for mobile)
      document.querySelectorAll('.nav-links a').forEach(link => {
          link.addEventListener('click', function() {
              if (window.innerWidth <= 768) {
                  menuToggle.classList.remove('active');
                  navLinks.classList.remove('active');
                  document.body.style.overflow = '';
              }
          });
      });
  }
  
  // Sticky header on scroll
  const header = document.querySelector('.main-header');
  
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
  
  // Initialize testimonials carousel if needed
  if (typeof jQuery !== 'undefined' && jQuery.fn.owlCarousel) {
      initTestimonialsCarousel();
  }
});

