

AOS.init();

        document.getElementById('menu-toggle').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('animate-fade-in');
        });

          // Filter Functionality
          const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioCards = document.querySelectorAll('.portfolio-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                filterBtns.forEach(b => b.classList.remove('active-filter'));
                btn.classList.add('active-filter');

                // Get filter value
                const filter = btn.dataset.filter;

                // Filter cards
                portfolioCards.forEach(card => {
                    const category = card.dataset.category;
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // ----- testimonial-slider ------

        const slider = document.getElementById('testimonial-slider');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        let index = 0;
    
        function updateSlider() {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
    
        nextBtn.addEventListener('click', () => {
            index = (index + 1) % 4;
            updateSlider();
        });
    
        prevBtn.addEventListener('click', () => {
            index = (index - 1 + 4) % 4;
            updateSlider();
        });
    
        setInterval(() => {
            index = (index + 1) % 4;
            updateSlider();
        }, 15000);

        // ---- Frequently Asked Questions ----

        function toggleFAQ(button) {
        let content = button.nextElementSibling;
        let icon = button.querySelector(".toggle-icon");
        
        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
            icon.textContent = "-";
        } else {
            content.classList.add("hidden");
            icon.textContent = "+";
        }
    }
