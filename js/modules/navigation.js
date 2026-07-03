// Navigation Module
export class Navigation {
  constructor() {
    try {
      this.navToggle = document.querySelector('.menu-toggle');
      this.navLinks = document.querySelector('.nav-links');
      this.navAnchors = document.querySelectorAll('.nav-links a');
      this.navbar = document.querySelector('.topbar');
      this.sectionTargets = [];
      this.scrollRaf = null;
      this.init();
    } catch (error) {
      console.warn('Navigation: DOM elements not found', error);
    }
  }

  init() {
    this.setupToggle();
    this.setupAnchors();
    this.setupScrollSpy();
  }

  setupToggle() {
    if (!this.navToggle || !this.navLinks) return;

    this.navToggle.addEventListener('click', () => {
      const isOpen = this.navLinks.classList.toggle('open');
      this.navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  setupAnchors() {
    this.navAnchors.forEach((anchor) => {
      anchor.addEventListener('click', () => {
        this.setActiveLink(anchor.getAttribute('href'));
        this.closeMenu();
      });
    });
  }

  setupScrollSpy() {
    this.sectionTargets = Array.from(this.navAnchors)
      .map((anchor) => {
        const href = anchor.getAttribute('href');
        if (!href || !href.startsWith('#')) return null;

        const section = document.querySelector(href);
        if (!section) return null;

        return { href, section };
      })
      .filter(Boolean);

    if (this.sectionTargets.length === 0) return;

    const handleScroll = () => {
      if (this.scrollRaf !== null) return;

      this.scrollRaf = window.requestAnimationFrame(() => {
        this.scrollRaf = null;
        this.updateActiveFromScroll();
      });
    };

    this.updateActiveFromScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
  }

  updateActiveFromScroll() {
    const navbarHeight = this.navbar?.offsetHeight || 0;
    const marker = navbarHeight + 24;
    let currentHref = this.sectionTargets[0]?.href || '#home';

    this.sectionTargets.forEach(({ href, section }) => {
      if (section.offsetTop <= window.scrollY + marker) {
        currentHref = href;
      }
    });

    this.setActiveLink(currentHref);
  }

  setActiveLink(href) {
    if (!href) return;

    this.navAnchors.forEach((anchor) => {
      const isActive = anchor.getAttribute('href') === href;
      anchor.classList.toggle('active', isActive);
    });
  }

  closeMenu() {
    if (this.navLinks) {
      this.navLinks.classList.remove('open');
    }
    if (this.navToggle) {
      this.navToggle.setAttribute('aria-expanded', 'false');
    }
  }
}
