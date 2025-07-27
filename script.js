        // ========== MENU MOBILE ========== 
        const mobileMenu = document.querySelector('.mobile-menu');
        const navMenu = document.querySelector('.nav-menu');

        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // ========== ANIMAÇÃO DE FADE IN AO ROLAR ========== 
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observar todas as seções
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        // ========== NAVBAR TRANSPARENTE/SÓLIDA AO ROLAR ========== 
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(0, 0, 0, 0.98)';
            } else {
                navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            }
        });

        // ========== ROLAGEM SUAVE PERSONALIZADA ========== 
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 70; // Compensar altura do navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // ========== ANIMAÇÃO DE ENTRADA DOS CARDS DE PREÇO ========== 
        const priceCards = document.querySelectorAll('.price-card');
        priceCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });

        // ========== ADICIONAR EFEITO PARALLAX SUTIL NO HERO ========== 
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });