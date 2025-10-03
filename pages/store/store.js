// Wait until the DOM is loaded to scope behavior to the store page only
document.addEventListener('DOMContentLoaded', () => {
  const storeSection = document.getElementById('store');
  if (!storeSection) return;

  // Attach hover effects to each product card
  const productCards = storeSection.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-15px) scale(1.02)';
      card.style.boxShadow = '0 25px 50px rgba(102, 126, 234, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = ''; // Reset to stylesheet default
    });
  });
});