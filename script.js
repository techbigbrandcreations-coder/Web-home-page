// Hero Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Auto advance slides
    let slideTimer = setInterval(nextSlide, slideInterval);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            clearInterval(slideTimer);
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    });

    // Pause on hover
    const sliderContainer = document.querySelector('.hero-slider');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideTimer);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        slideTimer = setInterval(nextSlide, slideInterval);
    });

    // Smooth scroll for navigation links
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

    // Add to cart animation
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = '✓ Added!';
            this.style.backgroundColor = '#27ae60';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 2000);
        });
    });

    // Wishlist button toggle
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === '♡') {
                this.textContent = '♥';
                this.style.color = '#e74c3c';
            } else {
                this.textContent = '♡';
                this.style.color = '';
            }
        });
    });

    // Intersection Observer for fade-in animations
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
    const animatedElements = document.querySelectorAll('.feature-card, .product-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});



const productsMenu = document.querySelector('.main-nav-link:nth-child(1)');
const hiddenProduct = document.querySelector('.product-menu');


productsMenu.addEventListener('click', () => {  
    if (hiddenProduct.style.display === 'flex') {
        hiddenProduct.style.display = 'none';
        hiddenProduct.style.transition = 'display 0.5s ease';
        hiddenProduct.style.animation = 'slideUp 0.5s forwards';
    } else {
        hiddenProduct.style.display = 'flex';
        hiddenProduct.style.transition = 'display 0.5s ease';
        hiddenProduct.style.animation = 'slideUp 0.5s backwards';
    }

    
});

const subProducts = document.querySelectorAll('.sub-product-button');
const colorArray = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33'];
subProducts.forEach((button, index) => {
    button.style.backgroundColor = colorArray[index % colorArray.length];   
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease';
    }
    );
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
        button.style.transition = 'transform 0.3s ease';
    }
    );

});// your code goes here
