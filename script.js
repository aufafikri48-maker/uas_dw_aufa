// ===== GREETING BERDASARKAN WAKTU =====
function updateGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    let greeting = '';
    
    if (hour >= 5 && hour < 12) {
        greeting = 'Selamat Pagi';
    } else if (hour >= 12 && hour < 15) {
        greeting = 'Selamat Siang';
    } else if (hour >= 15 && hour < 18) {
        greeting = 'Selamat Sore';
    } else {
        greeting = 'Selamat Malam';
    }
    
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}

// ===== NAVBAR SCROLL EFFECT =====
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(220, 53, 69, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = '';
        navbar.style.backdropFilter = '';
        navbar.style.boxShadow = '';
    }
}

// ===== FORM VALIDATION =====
function validateContactForm() {
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        }, false);
    });
}

// ===== FORM SUBMISSION HANDLER =====
function handleFormSubmission() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (this.checkValidity()) {
                // Simulasi pengiriman form
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda dalam waktu 1x24 jam.');
                    form.reset();
                    form.classList.remove('was-validated');
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            }
        });
    });
}

// ===== SERVICE CARDS ANIMATION =====
function animateServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// ===== CURRENT YEAR IN FOOTER =====
function updateCurrentYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// ===== ACTIVE NAV LINK HIGHLIGHT =====
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        if (currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === linkPage.replace('.html', ''))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== INITIALIZE ALL FUNCTIONS =====
function init() {
    // Update greeting
    updateGreeting();
    
    // Update greeting setiap 30 detik
    setInterval(updateGreeting, 30000);
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Jalankan sekali saat load
    
    // Form validation
    validateContactForm();
    
    // Form submission
    handleFormSubmission();
    
    // Animate service cards
    if (document.querySelector('.service-card')) {
        animateServiceCards();
    }
    
    // Update year in footer
    updateCurrentYear();
    
    // Set active nav link
    setActiveNavLink();
    
    // Console info
    console.log('Bengkel Motor Pro - Website UAS Desain Web');
    console.log('Nama: SHAKTAR MARCHIANO GYANENDRA');
    console.log('NIM: 24670129');
    console.log('Kelas: 3E');
    console.log('GitHub Pages: https://marchiano133.github.io/bengkel-motor/');
}

// ===== DOCUMENT READY =====
document.addEventListener('DOMContentLoaded', init);