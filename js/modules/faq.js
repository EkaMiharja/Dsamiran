// FAQ Module
export class FAQ {
  constructor() {
    try {
      this.faqItems = document.querySelectorAll('.faq-item');
      this.init();
    } catch (error) {
      console.warn('FAQ: Error initializing', error);
    }
  }

  init() {
    if (this.faqItems.length > 0) {
      this.setupEventListeners();
    }
  }

  setupEventListeners() {
    this.faqItems.forEach((item) => {
      const button = item.querySelector('.faq-question');
      if (button) {
        button.addEventListener('click', () => this.handleFaqClick(item));
      }
    });
  }

  handleFaqClick(item) {
    this.faqItems.forEach((entry) => entry.classList.remove('active'));
    item.classList.add('active');
  }
}
