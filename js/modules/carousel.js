// Carousel Module
export class Carousel {
  constructor() {
    try {
      this.carouselSlides = document.querySelectorAll('.carousel-slide');
      this.prevButton = document.querySelector('.carousel-btn.prev');
      this.nextButton = document.querySelector('.carousel-btn.next');
      this.activeSlide = 0;
      this.autoPlayInterval = null;
      this.init();
    } catch (error) {
      console.warn('Carousel: Error initializing', error);
    }
  }

  init() {
    if (this.carouselSlides.length === 0) return;
    this.setupButtons();
    this.startAutoPlay();
  }

  setupButtons() {
    if (this.prevButton) {
      this.prevButton.addEventListener('click', () => this.prevSlide());
    }
    if (this.nextButton) {
      this.nextButton.addEventListener('click', () => this.nextSlide());
    }
  }

  showSlide(index) {
    this.carouselSlides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === index);
    });
  }

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.carouselSlides.length;
    this.showSlide(this.activeSlide);
    this.resetAutoPlay();
  }

  prevSlide() {
    this.activeSlide = (this.activeSlide - 1 + this.carouselSlides.length) % this.carouselSlides.length;
    this.showSlide(this.activeSlide);
    this.resetAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => this.nextSlide(), 6000);
  }

  resetAutoPlay() {
    clearInterval(this.autoPlayInterval);
    this.startAutoPlay();
  }

  destroy() {
    clearInterval(this.autoPlayInterval);
  }
}
