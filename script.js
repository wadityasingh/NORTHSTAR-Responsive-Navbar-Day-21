
document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('primary-nav');
  const navOverlay = document.getElementById('nav-overlay');
  const navLinks = document.querySelectorAll('.nav-link, .nav-cta');
  const allNavItems = document.querySelectorAll('.nav-link');

  // Breakpoint matching CSS media query (max-width: 768px)
  const mobileBreakpoint = window.matchMedia('(max-width: 768px)');

  /**
   * Check if mobile navigation is currently open
   * @returns {boolean}
   */
  const isMenuOpen = () => {
    return hamburgerBtn.getAttribute('aria-expanded') === 'true';
  };

  /**
   * Opens the mobile navigation menu
   */
  const openMenu = () => {
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    hamburgerBtn.classList.add('is-active');
    hamburgerBtn.setAttribute('aria-label', 'Close navigation menu');

    navMenu.classList.add('is-open');
    if (navOverlay) {
      navOverlay.classList.add('is-visible');
    }
    document.body.classList.add('menu-open');
  };

  /**
   * Closes the mobile navigation menu
   * @param {boolean} restoreFocus - Whether to set focus back on the hamburger button
   */
  const closeMenu = (restoreFocus = false) => {
    if (!isMenuOpen()) return;

    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.classList.remove('is-active');
    hamburgerBtn.setAttribute('aria-label', 'Toggle navigation menu');

    navMenu.classList.remove('is-open');
    if (navOverlay) {
      navOverlay.classList.remove('is-visible');
    }
    document.body.classList.remove('menu-open');

    if (restoreFocus && hamburgerBtn) {
      hamburgerBtn.focus();
    }
  };

  /**
   * Toggles the mobile navigation menu state
   */
  const toggleMenu = () => {
    if (isMenuOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // 1. Toggle button event
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });
  }

  // 2. Close on navigation link click & update active link
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      // If mobile menu is open, close it
      if (isMenuOpen()) {
        closeMenu();
      }

      // Update active state if it's a primary nav-link
      if (link.classList.contains('nav-link')) {
        allNavItems.forEach((item) => {
          item.classList.remove('active');
          item.removeAttribute('aria-current');
        });
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  });

  // 3. Close on outside click (clicking overlay or outside header)
  if (navOverlay) {
    navOverlay.addEventListener('click', () => {
      closeMenu();
    });
  }

  document.addEventListener('click', (event) => {
    if (!isMenuOpen()) return;

    const isInsideMenu = navMenu.contains(event.target);
    const isInsideButton = hamburgerBtn.contains(event.target);

    if (!isInsideMenu && !isInsideButton) {
      closeMenu();
    }
  });

  // 4. Close on Escape key press with focus restoration
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMenuOpen()) {
      closeMenu(true);
    }
  });

  // 5. Reset navigation state when resizing beyond mobile breakpoint
  const handleResize = () => {
    if (!mobileBreakpoint.matches && isMenuOpen()) {
      closeMenu(false);
    }
  };

  // Attach resize listener with media query API for optimal performance
  if (mobileBreakpoint.addEventListener) {
    mobileBreakpoint.addEventListener('change', (e) => {
      if (!e.matches && isMenuOpen()) {
        closeMenu(false);
      }
    });
  } else {
    // Fallback for older browsers
    window.addEventListener('resize', handleResize);
  }
});
