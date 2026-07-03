// Assistant Module

const MANUAL_RESPONSES = {
  'what is the best time to visit?':
    'Best time: May-September untuk cuaca cenderung cerah dan jalur trekking lebih nyaman. Untuk suasana lebih sepi, pilih weekday pagi.',
  'where can i stay overnight?':
    'Stay options: Homestay lokal di Samiran adalah pilihan terbaik karena dekat jalur wisata dan memberi pengalaman budaya yang lebih autentik.',
  'what should i pack?':
    'Packing tips: bawa jaket hangat, sepatu trekking anti-slip, botol minum isi ulang, jas hujan ringan, obat pribadi, dan sunscreen.'
};

function normalizeQuestion(text = '') {
  return text.trim().toLowerCase();
}

export class Assistant {
  constructor() {
    try {
      this.assistantToggle = document.querySelector('.assistant-toggle');
      this.assistantPanel = document.querySelector('.assistant-panel');
      this.assistantClose = document.querySelector('.assistant-close');
      this.assistantForm = document.querySelector('.assistant-form');
      this.assistantBody = document.querySelector('.assistant-body');
      this.quickActions = document.querySelectorAll('.assistant-quick-actions button');
      this.init();
    } catch (error) {
      console.warn('Assistant: Error initializing', error);
    }
  }

  init() {
    if (!this.assistantToggle) return;
    this.setupToggle();
    this.setupForm();
    this.setupQuickActions();
  }

  setupToggle() {
    if (this.assistantToggle) {
      this.assistantToggle.addEventListener('click', () => {
        this.assistantPanel?.classList.toggle('open');
      });
    }

    if (this.assistantClose) {
      this.assistantClose.addEventListener('click', () => {
        this.assistantPanel?.classList.remove('open');
      });
    }
  }

  setupForm() {
    if (this.assistantForm) {
      this.assistantForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = this.assistantForm.querySelector('input');
        if (!input || !input.value.trim()) return;

        const userMessage = input.value.trim();
        input.value = '';
        this.replyManually(userMessage);
      });
    }
  }

  setupQuickActions() {
    this.quickActions.forEach((button) => {
      button.addEventListener('click', () => {
        this.replyManually(button.dataset.question || button.textContent || '');
      });
    });
  }

  appendMessage(text, isUser = false) {
    if (!this.assistantBody) return;

    const message = document.createElement('div');
    message.className = `message ${isUser ? 'user' : 'bot'}`;
    message.textContent = text;
    this.assistantBody.appendChild(message);
    this.assistantBody.scrollTop = this.assistantBody.scrollHeight;
  }

  replyManually(userMessage) {
    this.appendMessage(userMessage, true);

    const answer = MANUAL_RESPONSES[normalizeQuestion(userMessage)];
    if (answer) {
      this.appendMessage(answer, false);
      return;
    }

    this.appendMessage('Saya hanya bisa menjawab 3 pertanyaan ini: Best time, Stay options, dan Packing tips. Silakan pilih tombol yang tersedia.', false);
  }
}
