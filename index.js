document.getElementById('menu-icon').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu.style.display === 'flex') {
      mobileMenu.style.display = 'none';
  } else {
      mobileMenu.style.display = 'flex';
  }
});


 
