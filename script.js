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
});
