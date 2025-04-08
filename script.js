document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        if (window.innerWidth <= 768) {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    const burgerMenu = document.querySelector('.burger-menu');
    const videoBackground = document.querySelector('.video-background');
    const overlay = document.querySelector('.overlay');
    
    burgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
    });
    
    document.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
    });
    
    document.querySelector('.burger-dropdown').addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                burgerMenu.classList.remove('active');
            }
        });
    });
    
    // Плавное исчезновение фона при скролле
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const opacity = 1 - Math.min(scrollPosition / 500, 0.7);
        
        videoBackground.style.opacity = opacity;
        overlay.style.opacity = opacity;
        
        if (scrollPosition > 50) {
            document.body.classList.add('scrolled');
            document.querySelector('nav').style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        } else {
            document.body.classList.remove('scrolled');
            document.querySelector('nav').style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        }
    });

    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
            const dropdownToggle = link.closest('.dropdown').querySelector('.dropdown-toggle');
            dropdownToggle.classList.add('active');
        }
    });
});