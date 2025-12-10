

    // Toggle sidebar pour mobile
    const sidenavToggle = document.getElementById('sidenavToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    sidenavToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      sidebarOverlay.classList.toggle('active');
    });

    sidebarOverlay.addEventListener('click', () => {
      sidebar.classList.remove('active');
      sidebarOverlay.classList.remove('active');
    });

    // Gestion de la page active
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'dashbord';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const linkPage = link.getAttribute('data-page');
      if (linkPage === currentPage) {
        link.classList.add('nav-link-active', 'bg-sidebar-accent', 'text-sidebar-accent-foreground');
        link.classList.remove('text-sidebar-foreground', 'hover:bg-sidebar-accent');
      } else {
        link.classList.remove('nav-link-active', 'bg-sidebar-accent', 'text-sidebar-accent-foreground');
      }
    });

    // Fermer la sidebar sur mobile après un clic sur un lien
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          sidebar.classList.remove('active');
          sidebarOverlay.classList.remove('active');
        }
      });
    });
