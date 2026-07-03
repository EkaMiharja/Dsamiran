// Modal Module
import { MODAL_CONTENT } from '../../config/content.js';

export class Modal {
  constructor() {
    try {
      this.modal = document.getElementById('modal');
      this.modalBody = document.getElementById('modal-body');
      this.modalClose = document.querySelector('.modal-close');
      this.modalTriggers = document.querySelectorAll('[data-modal]');
      this.init();
    } catch (error) {
      console.warn('Modal: Error initializing', error);
    }
  }

  init() {
    if (!this.modal) return;
    this.setupTriggers();
    this.setupCloseButton();
    this.setupBackdropClick();
    this.setupEscapeKey();
  }

  setupTriggers() {
    this.modalTriggers.forEach((element) => {
      element.addEventListener('click', () => this.openModal(element.dataset.modal));
    });
  }

  setupCloseButton() {
    if (this.modalClose) {
      this.modalClose.addEventListener('click', () => this.closeModal());
    }
  }

  setupBackdropClick() {
    if (this.modal) {
      this.modal.addEventListener('click', (event) => {
        if (event.target === this.modal) {
          this.closeModal();
        }
      });
    }
  }

  setupEscapeKey() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.modal?.classList.contains('open')) {
        this.closeModal();
      }
    });
  }

  openModal(key) {
    const content = MODAL_CONTENT[key];
    if (!content || !this.modalBody) return;

    if (Array.isArray(content.items) && content.items.length > 0) {
      const cardsMarkup = content.items
        .map(
          (item) => `
            <article class="ecosystem-item-card">
              <img src="${item.image}" alt="${item.title}" loading="lazy" />
              <div class="ecosystem-item-info">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
              </div>
            </article>
          `
        )
        .join('');

      this.modalBody.innerHTML = `
        <div class="ecosystem-modal">
          <h3>${content.title}</h3>
          <p>${content.body}</p>
          <div class="ecosystem-items-grid">
            ${cardsMarkup}
          </div>
        </div>
      `;
    } else {
      this.modalBody.innerHTML = `<h3>${content.title}</h3><p>${content.body}</p>`;
    }

    this.modal.classList.add('open');
    this.modal.setAttribute('aria-hidden', 'false');
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.classList.remove('open');
    this.modal.setAttribute('aria-hidden', 'true');
  }
}
