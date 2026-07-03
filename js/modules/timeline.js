// Timeline Module
import { TIMELINE_CONTENT } from '../../config/content.js';

export class Timeline {
  constructor() {
    try {
      this.timelineItems = document.querySelectorAll('.zigzag-timeline .timeline-item');
      this.popupBackdrop = document.getElementById('timeline-popup-backdrop');
      this.popupClose = document.getElementById('timeline-popup-close');
      this.popupImage = document.getElementById('timeline-popup-image');
      this.popupYear = document.getElementById('timeline-popup-year');
      this.popupTitle = document.getElementById('timeline-popup-title');
      this.popupText = document.getElementById('timeline-popup-text');
      this.init();
    } catch (error) {
      console.warn('Timeline: Error initializing', error);
    }
  }

  init() {
    if (this.timelineItems.length > 0) {
      this.setupEventListeners();
      const activeItem = document.querySelector('.zigzag-timeline .timeline-item.active') || this.timelineItems[0];
      if (activeItem) {
        this.setActiveItem(activeItem);
      }
    }
  }

  setupEventListeners() {
    this.timelineItems.forEach((item) => {
      const titleButton = item.querySelector('.timeline-title');
      const yearButton = item.querySelector('.timeline-year-btn');

      if (titleButton) {
        titleButton.addEventListener('click', (event) => {
          event.stopPropagation();
          this.setActiveItem(item);
        });
      }

      if (yearButton) {
        yearButton.addEventListener('click', (event) => {
          event.stopPropagation();
          this.openPopupForItem(item);
        });
      }
    });

    if (this.popupClose) {
      this.popupClose.addEventListener('click', () => this.closePopup());
    }

    if (this.popupBackdrop) {
      this.popupBackdrop.addEventListener('click', (event) => {
        if (event.target === this.popupBackdrop) {
          this.closePopup();
        }
      });
    }

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.closePopup();
      }
    });
  }

  setActiveItem(item) {
    this.timelineItems.forEach((entry) => entry.classList.remove('active'));
    item.classList.add('active');
  }

  openPopupForItem(item) {
    this.setActiveItem(item);

    const contentKey = item.dataset.timeline || 'trekking';
    const content = TIMELINE_CONTENT[contentKey] || TIMELINE_CONTENT.trekking;
    
    if (this.popupYear) {
      this.popupYear.textContent = content.year || '';
    }

    if (this.popupTitle) {
      this.popupTitle.textContent = content.title;
    }

    if (this.popupText) {
      this.popupText.textContent = content.text;
    }

    if (this.popupImage) {
      this.popupImage.src = content.image;
      this.popupImage.alt = content.imageAlt || content.title;
    }

    if (this.popupBackdrop) {
      this.popupBackdrop.classList.add('open');
      this.popupBackdrop.setAttribute('aria-hidden', 'false');
    }
  }

  closePopup() {
    if (!this.popupBackdrop) return;
    this.popupBackdrop.classList.remove('open');
    this.popupBackdrop.setAttribute('aria-hidden', 'true');
  }
}
