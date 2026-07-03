// Hero Effects Module
export class HeroEffects {
  constructor() {
    try {
      this.hero = document.querySelector('.hero');
      this.parallaxLayer = document.querySelector('.hero-parallax');
      this.title = document.querySelector('.hero-title[data-typing-text]');
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.mobileViewport = window.matchMedia('(max-width: 700px)').matches;
      this.parallaxRaf = null;
      this.init();
    } catch (error) {
      console.warn('HeroEffects: Error initializing', error);
    }
  }

  init() {
    if (this.title) {
      this.setupTyping();
    }

    if (this.hero && this.parallaxLayer) {
      this.setupParallax();
    }
  }

  setupTyping() {
    const text = this.title.dataset.typingText?.trim();
    if (!text) return;

    if (this.reducedMotion) {
      this.title.textContent = text;
      return;
    }

    this.title.classList.add('typing-active');
    this.title.textContent = '';

    let index = 0;
    let isDeleting = false;

    const loopTyping = () => {
      if (!this.title) return;

      this.title.textContent = text.slice(0, index);

      if (!isDeleting) {
        if (index < text.length) {
          index += 1;
          window.setTimeout(loopTyping, 48);
          return;
        }

        isDeleting = true;
        window.setTimeout(loopTyping, 1300);
        return;
      }

      if (index > 0) {
        index -= 1;
        window.setTimeout(loopTyping, 24);
        return;
      }

      isDeleting = false;
      window.setTimeout(loopTyping, 340);
    };

    window.setTimeout(loopTyping, 180);
  }

  setupParallax() {
    if (this.reducedMotion || this.mobileViewport) {
      this.parallaxLayer.style.transform = 'translateY(0)';
      return;
    }

    const updateParallax = () => {
      this.parallaxRaf = null;
      if (!this.hero || !this.parallaxLayer) return;

      const rect = this.hero.getBoundingClientRect();
      const offset = Math.max(-70, Math.min(70, rect.top * -0.18));
      this.parallaxLayer.style.transform = `translateY(${offset.toFixed(2)}px)`;
    };

    const onScroll = () => {
      if (this.parallaxRaf !== null) return;
      this.parallaxRaf = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }
}
