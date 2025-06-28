document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.project-slider');
  if (!slider) return;

  const SCROLL_SPEED = 30; // ← augmente cette valeur si tu veux un scroll plus rapide

  const handleWheel = (e) => {
    e.preventDefault();
    slider.scrollLeft += e.deltaY * SCROLL_SPEED;
  };

  slider.addEventListener('wheel', handleWheel, { passive: false });

  // Cleanup (optionnel si tu montes/démontes dynamiquement)
  window.addEventListener('beforeunload', () => {
    slider.removeEventListener('wheel', handleWheel);
  });
});
