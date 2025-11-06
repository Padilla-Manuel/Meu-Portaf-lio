document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    if (intro) {
        intro.addEventListener('animationend', () => {
            intro.remove();
        });
    }

    const projectCards = document.querySelectorAll('.cardPro');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // Modo Dark
    const toggle = document.getElementById('darkModeToggle');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Esta linha foi removida, pois o CSS agora controla a visibilidade dos ícones.
        // toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : 'meiaLua';
    });
});