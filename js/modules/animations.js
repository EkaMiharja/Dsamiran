// Animation Module
export class Animations {
  constructor() {
    try {
      this.revealElements = document.querySelectorAll('.reveal');
      this.counterElements = document.querySelectorAll('[data-counter]');
      this.init();
    } catch (error) {
      console.warn('Animations: Error initializing', error);
    }
  }

  init() {
    if (this.revealElements.length > 0 || this.counterElements.length > 0) {
      this.setupIntersectionObserver();
    }
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.matches('[data-counter]')) {
              this.animateCounter(entry.target);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    this.revealElements.forEach((element) => observer.observe(element));
    this.counterElements.forEach((counter) => observer.observe(counter));
  }

  animateCounter(element) {
    const target = Number(element.dataset.counter || 0);
    const duration = 1100;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      element.textContent = value.toString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = target.toString();
      }
    };

    requestAnimationFrame(step);
  }
}
