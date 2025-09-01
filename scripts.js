const musicBtn = document.getElementById('musicBtn');
        const musicBtnMobile = document.getElementById('musicBtnMobile');
        const bgMusic = document.getElementById('bgMusic');
        let isPlaying = false;
        bgMusic.volume = 0.5;
        bgMusic.loop = true;

        musicBtn.addEventListener('click', () => {
            if (isPlaying) {
                bgMusic.pause();
                musicBtn.innerHTML = '<i class="fas fa-music"></i>';
                musicBtnMobile.innerHTML = '<i class="fas fa-music"></i>';
            } else {
                bgMusic.play();
                musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
                musicBtnMobile.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        });
        musicBtnMobile.addEventListener('click', () => {
            if (isPlaying) {
                bgMusic.pause();
                musicBtn.innerHTML = '<i class="fas fa-music"></i>';
                musicBtnMobile.innerHTML = '<i class="fas fa-music"></i>';
            } else {
                bgMusic.play();
                musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
                musicBtnMobile.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        });

        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        function hideMobileMenu() {
            mobileMenu.classList.add('hidden');
        }

        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        const statusMessage = document.getElementById('status-message');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically handle form submission, e.g., via AJAX
            contactForm.reset();
            statusMessage.classList.remove('hidden');
            setTimeout(() => {
                statusMessage.classList.add('hidden');
            }, 5000);
        });