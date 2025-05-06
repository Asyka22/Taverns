// Mobile menu toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Search toggle
const searchToggle = document.querySelector('.search-toggle');
const searchBar = document.querySelector('.search-bar');

searchToggle.addEventListener('click', () => {
  searchBar.classList.toggle('active');
});

// Close search when clicking outside
document.addEventListener('click', (e) => {
  if (!searchBar.contains(e.target) && e.target !== searchToggle) {
    searchBar.classList.remove('active');
  }
});