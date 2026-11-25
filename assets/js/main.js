document.getElementById('year').textContent = new Date().getFullYear();
    function toggleMenu() {
      const nav = document.getElementById('navLinks');
      const button = document.querySelector('.menu-toggle');
      nav.classList.toggle('open');
      button.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    }
    function closeMenu() {
      document.getElementById('navLinks').classList.remove('open');
      document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
    }
