document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        if (burger && nav && navLinks.length > 0) {
            burger.addEventListener('click', () => {
                nav.classList.toggle('nav-active');

                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                    }
                });

                burger.classList.toggle('toggle');
            });

            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    // Hanya tutup nav jika link adalah internal (hash link)
                    if (link.getAttribute('href').startsWith('#')) {
                        nav.classList.remove('nav-active');
                        burger.classList.remove('toggle');
                        navLinks.forEach(item => {
                            item.style.animation = '';
                        });
                    }
                    // Jika bukan hash link (misal: ke halaman proyek), biarkan browser navigasi
                });
            });
        }
    };

    // Smooth scrolling untuk link yang hanya mengandung hash (internal)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah perilaku default (melompat tiba-tiba)

            // Pastikan ID target ada di halaman saat ini
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                // Jika ID tidak ditemukan, mungkin link menuju halaman lain
                // Atau bisa juga tambahkan fallback untuk kasus ini
                window.location.href = targetId;
            }
        });
    });

    // Update Current Year in Footer
    const updateCurrentYear = () => {
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    };

    // Basic form submission (Anda perlu backend untuk pengiriman aktual)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;

            console.log('Form Submitted!');
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Message: ${message}`);

            alert('Terima kasih, Syam! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.');

            contactForm.reset();
        });
    }

    // Initialize functions
    navSlide();
    updateCurrentYear();
});