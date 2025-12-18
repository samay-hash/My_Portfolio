window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
        animateStats();
        window.scrollTo(0, 0);
    }, 1000)
});

function animateStats() {
    const metricValues = document.querySelectorAll('.metric-value[data-target]');
    metricValues.forEach((el, index) => {
        setTimeout(() => {
            const target = parseInt(el.dataset.target);
            let current = 0;
            const increament = target / 40;
            const timer = setInterval(() => {
                current += increament;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                el.textContent = Math.floor(current);
            }, 30)
        }, index * 200);
    });
}

function switchTab(btn, tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

function filterGallery(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            item.style.animation = 'tabFade 0.4s ease-out';
        } else {
            item.style.display = 'none';
        }
    });
}
