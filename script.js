(() => {
  'use strict';

  const TIMELINE_CONTENT = {
    trekking: {
      year: '01',
      title: 'SEJARAH',
      text: 'Desa Wisata Samiran merupakan desa yang terletak di lereng Gunung Merapi dan Gunung Merbabu, menjadikannya dianugerahi panorama alam yang indah dan udara yang sejuk. Sejak dahulu, masyarakat Samiran menggantungkan kehidupannya pada sektor pertanian, peternakan, dan berbagai kearifan lokal yang diwariskan secara turun-temurun.',
      image: 'image/gallery/new-selo.jpg',
      imageAlt: 'Tari New Selo performance'
    },
    homestays: {
      year: '02',
      title: 'LOKASI',
      text: 'Desa Wisata Samiran terletak di Kecamatan Selo, Kabupaten Boyolali, Provinsi Jawa Tengah, tepat di kawasan lereng Gunung Merapi dan Gunung Merbabu. Berada pada jalur penghubung antara Kota Boyolali, Kota Surakarta, dan Kota Magelang, desa ini memiliki akses yang cukup mudah dijangkau oleh wisatawan.',
      image: 'image/lokasi.jpg',
      imageAlt: 'Lokasi Desa Samiran'
    },
    umkm: {
      year: '03',
      title: 'DAYA TARIK',
      text: 'Desa Wisata Samiran menawarkan berbagai aktivitas wisata yang menarik, mulai dari soft trekking dan hard trekking, berburu golden sunrise, live in bersama masyarakat lokal, hingga menikmati pertunjukan seni dan budaya khas masyarakat pegunungan. Selain itu, pengunjung juga dapat menikmati kuliner khas pegunungan dan berbelanja oleh-oleh di kios suvenir yang dikelola oleh masyarakat setempat.',
      image: 'image/gallery/tarian-soreng.jpg',
      imageAlt: 'Tari Soreng performance'
    },
    photo: {
      year: '04',
      title: 'KEUNIKAN',
      text: 'Berada di antara Gunung Merapi dan Gunung Merbabu pada ketinggian sekitar 1.600 mdpl, Desa Wisata Samiran memiliki suasana pegunungan yang sejuk dan autentik.',
      image: 'image/gallery/tarian-topeng-ireng.jpg',
      imageAlt: 'Tari Topeng Ireng performance'
    }
  };

  const MODAL_CONTENT = {
    'facility-1': {
      title: 'Homestays',
      body: 'Homestay di Desa Wisata Samiran dikelola oleh masyarakat setempat dengan mengutamakan kenyamanan dan keramahan bagi setiap wisatawan. Selain menyediakan fasilitas yang memadai, homestay juga menghadirkan pengalaman menginap yang autentik dengan suasana pegunungan yang sejuk, sehingga pengunjung dapat merasakan kehidupan dan budaya masyarakat lokal secara langsung.'
    },
    'facility-2': {
      title: 'Tempat Makan',
      body: 'Beragam warung dan rumah makan di Desa Wisata Samiran menyajikan kuliner khas pegunungan dengan bahan baku lokal yang segar. Selain menikmati hidangan tradisional, wisatawan dapat merasakan suasana makan yang tenang dengan panorama Gunung Merapi dan Gunung Merbabu, menciptakan pengalaman kuliner yang khas dan berbeda dari destinasi lainnya.'
    },
    'facility-3': {
      title: 'Kios Suvenir',
      body: 'Sebagai pusat oleh-oleh khas Desa Wisata Samiran, kios suvenir menawarkan berbagai produk unggulan seperti olahan susu sapi, keripik sayuran, dan hasil karya UMKM lokal. Selain mendukung perekonomian masyarakat, setiap produk menjadi kenangan khas yang dapat dibawa pulang oleh wisatawan.'
    },
    'attraction-1': {
      title: 'Tari Topeng Ireng',
      body: 'Tarian yang menggambarkan kamuflase wajah dari para prajurit yang sedang bergerilya di hutan belantara di kaki lereng Gunung Merapi. Dengan wajah yang dirias dominan warna hitam membuat tarian ini menjadi begitu gagah dan menarik untuk saksikan.'
    },
    'attraction-2': {
      title: 'Tari Soreng',
      body: 'Soreng berarti prajurit. Tarian ini mengisahkan pasukan perang di bawah pimpinan Adipati Aryo Penangsang. Gerakannya menggambarkan semangat, keberanian, dan kesetiaan pasukan saat berlatih perang.'
    },
    'attraction-3': {
      title: 'Atraksi Alam Gardu Pandang New Selo',
      body: 'Gardu Pandang New Selo merupakan salah satu spot terbaik untuk menikmati panorama Gunung Merapi dan Merbabu. Berada di lereng Merapi, lokasi ini menawarkan udara sejuk, pemandangan pegunungan yang luas, serta lanskap perbukitan dan permukiman penduduk.'
    },
    'ecosystem-1': {
      title: 'Flora highlights',
      body: 'Explore medicinal plants, endemic trees, and lush corners that demonstrate how biodiversity supports the village.',
      items: [
        {
          title: 'Edelweiss Jawa',
          description: 'Bunga pegunungan yang tumbuh di area dataran tinggi dengan udara sejuk.',
          image: 'image/ecosystem-flora/edelweiss.jpg'
        },
        {
          title: 'Pinus Merkusii',
          description: 'Pohon pinus dominan yang menjaga kestabilan lereng dan mikroklimat kawasan.',
          image: 'image/ecosystem-flora/pinus-merkusii.jpg'
        },
        {
          title: 'Paku Hutan',
          description: 'Tumbuhan bawah tajuk yang membantu menjaga kelembapan tanah hutan.',
          image: 'image/ecosystem-flora/paku-hutan.jpg'
        },
        {
          title: 'Tanaman Obat Lokal',
          description: 'Ragam herbal tradisional yang dimanfaatkan warga untuk pengobatan alami.',
          image: 'image/ecosystem-flora/tanaman-obat-lokal.jpg'
        }
      ]
    },
    'ecosystem-2': {
      title: 'Fauna highlights',
      body: 'Observe native birds, butterflies, and small wildlife living in the protected habitat around the village.',
      items: [
        {
          title: 'Elang Jawa',
          description: 'Burung pemangsa langka yang menjadi indikator sehatnya rantai makanan.',
          image: 'image/ecosystem-fauna/elang-jawa.jpg'
        },
        {
          title: 'Kupu-kupu Gunung',
          description: 'Penyerbuk alami dengan warna cerah yang umum di jalur trekking.',
          image: 'image/ecosystem-fauna/kupu-kupu-gunung.webp'
        },
        {
          title: 'Burung Kutilang',
          description: 'Spesies burung lokal dengan suara khas yang sering terdengar di pagi hari.',
          image: 'image/ecosystem-fauna/burung-kutilang.jpg'
        },
        {
          title: 'Lutung Jawa',
          description: 'Primata endemik yang hidup berkelompok pada area hutan campuran.',
          image: 'image/ecosystem-fauna/lutung-jawa.jpg'
        }
      ]
    },
    'ecosystem-3': {
      title: 'Conservation work',
      body: 'Learn how the community reduces waste, maintains green spaces, and shares knowledge with visitors.',
      items: [
        {
          title: 'Bank Sampah Desa',
          description: 'Program pemilahan dan pengelolaan sampah berbasis komunitas.',
          image: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&w=900&q=80'
        },
        {
          title: 'Penanaman Pohon',
          description: 'Aksi rutin reboisasi untuk menambah tutupan hijau di wilayah rawan erosi.',
          image: 'image/ecosystem-conservation/penanaman-pohon.jpeg'
        },
        {
          title: 'Edukasi Pengunjung',
          description: 'Sesi interpretasi alam agar wisatawan memahami etika berwisata berkelanjutan.',
          image: 'image/ecosystem-conservation/edukasi-pengunjung.webp'
        },
        {
          title: 'Kebun Bibit',
          description: 'Pembibitan tanaman lokal untuk mendukung restorasi ekosistem jangka panjang.',
          image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80'
        }
      ]
    },
    'gallery-1': {
      title: 'Tari Soreng',
      body: 'Soreng berarti prajurit. Tarian ini mengisahkan pasukan perang di bawah pimpinan Adipati Aryo Penangsang. Gerakannya menggambarkan semangat, keberanian, dan kesetiaan pasukan saat berlatih perang.'
    },
    'gallery-2': {
      title: 'Tari Topeng Ireng',
      body: 'Tarian yang menggambarkan kamuflase wajah dari para prajurit yang sedang bergerilya di hutan belantara di kaki lereng Gunung Merapi. Dengan wajah yang dirias dominan warna hitam membuat tarian ini menjadi begitu gagah dan menarik untuk saksikan.'
    },
    'gallery-3': {
      title: 'Edukasi Pengolahan Permen Susu',
      body: 'dukasi pengolahan permen susu menjadi salah satu atraksi edukatif yang menunjukkan bagaimana susu segar dapat diolah menjadi produk bernilai jual tinggi. Peserta belajar mengenai tahapan pembuatan permen mulai dari pemanasan susu.'
    },
    'gallery-4': {
      title: 'Atraksi Alam Gardu Pandang New Selo',
      body: 'Gardu Pandang New Selo merupakan salah satu spot terbaik untuk menikmati panorama Gunung Merapi dan Merbabu. Berada di lereng Merapi, lokasi ini menawarkan udara sejuk, pemandangan pegunungan yang luas, serta lanskap perbukitan dan permukiman penduduk.'
    }
  };

  const MANUAL_RESPONSES = {
    'what is the best time to visit?':
      'Best time: May-September untuk cuaca cenderung cerah dan jalur trekking lebih nyaman. Untuk suasana lebih sepi, pilih weekday pagi.',
    'where can i stay overnight?':
      'Stay options: Homestay lokal di Samiran adalah pilihan terbaik karena dekat jalur wisata dan memberi pengalaman budaya yang lebih autentik.',
    'what should i pack?':
      'Packing tips: bawa jaket hangat, sepatu trekking anti-slip, botol minum isi ulang, jas hujan ringan, obat pribadi, dan sunscreen.'
  };

  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const $ = (selector, root = document) => root.querySelector(selector);

  class Navigation {
    constructor() {
      this.navToggle = $('.menu-toggle');
      this.navLinks = $('.nav-links');
      this.navAnchors = $$('.nav-links a');
      this.navbar = $('.topbar');
      this.sectionTargets = [];
      this.scrollRaf = null;
      this.init();
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
      this.sectionTargets = this.navAnchors
        .map((anchor) => {
          const href = anchor.getAttribute('href');
          if (!href || !href.startsWith('#')) return null;
          const section = $(href);
          return section ? { href, section } : null;
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
      this.navLinks?.classList.remove('open');
      if (this.navToggle) this.navToggle.setAttribute('aria-expanded', 'false');
    }
  }

  class Animations {
    constructor() {
      this.revealElements = $$('.reveal');
      this.counterElements = $$('[data-counter]');
      this.init();
    }

    init() {
      if (this.revealElements.length > 0 || this.counterElements.length > 0) {
        this.setupIntersectionObserver();
      }
    }

    setupIntersectionObserver() {
      if (!('IntersectionObserver' in window)) {
        this.revealElements.forEach((element) => element.classList.add('visible'));
        this.counterElements.forEach((counter) => this.animateCounter(counter));
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.matches('[data-counter]')) {
              this.animateCounter(entry.target);
            }
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

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

  class HeroEffects {
    constructor() {
      this.hero = $('.hero');
      this.parallaxLayer = $('.hero-parallax');
      this.title = $('.hero-title[data-typing-text]');
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.mobileViewport = window.matchMedia('(max-width: 700px)').matches;
      this.parallaxRaf = null;
      this.init();
    }

    init() {
      if (this.title) this.setupTyping();
      if (this.hero && this.parallaxLayer) this.setupParallax();
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

  class CardInteractions {
    constructor() {
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.pointerFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      if (this.reducedMotion || !this.pointerFine) return;
      this.elements = $$('.hero-card, .info-card, .profile-card, .modal-content, .faq-item');
      this.raf = null;
      this.last = new Map();
      this.init();
    }

    init() {
      this.elements.forEach((el) => {
        el.addEventListener('mousemove', (e) => this.onMove(e, el));
        el.addEventListener('mouseleave', () => this.reset(el));
      });
    }

    onMove(e, el) {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      this.last.set(el, { x, y });
      if (this.raf) return;
      this.raf = requestAnimationFrame(() => this.update());
    }

    update() {
      this.raf = null;
      this.last.forEach((pos, el) => {
        const rotateY = (pos.x * 2) * 6;
        const rotateX = (-pos.y * 2) * 6;
        el.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
      });
    }

    reset(el) {
      el.style.transform = '';
      el.style.transition = 'transform 260ms cubic-bezier(.2,.9,.2,1)';
      window.setTimeout(() => { el.style.transition = ''; }, 280);
    }
  }

  class Timeline {
    constructor() {
      this.timelineItems = $$('.zigzag-timeline .timeline-item');
      this.popupBackdrop = $('#timeline-popup-backdrop');
      this.popupClose = $('#timeline-popup-close');
      this.popupImage = $('#timeline-popup-image');
      this.popupYear = $('#timeline-popup-year');
      this.popupTitle = $('#timeline-popup-title');
      this.popupText = $('#timeline-popup-text');
      this.init();
    }

    init() {
      if (this.timelineItems.length > 0) {
        this.setupEventListeners();
        const activeItem = $('.zigzag-timeline .timeline-item.active') || this.timelineItems[0];
        if (activeItem) this.setActiveItem(activeItem);
      }
    }

    setupEventListeners() {
      this.timelineItems.forEach((item) => {
        const titleButton = $('.timeline-title', item);
        const yearButton = $('.timeline-year-btn', item);

        titleButton?.addEventListener('click', (event) => {
          event.stopPropagation();
          this.setActiveItem(item);
        });

        yearButton?.addEventListener('click', (event) => {
          event.stopPropagation();
          this.openPopupForItem(item);
        });
      });

      this.popupClose?.addEventListener('click', () => this.closePopup());
      this.popupBackdrop?.addEventListener('click', (event) => {
        if (event.target === this.popupBackdrop) this.closePopup();
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') this.closePopup();
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

      if (this.popupYear) this.popupYear.textContent = content.year || '';
      if (this.popupTitle) this.popupTitle.textContent = content.title;
      if (this.popupText) this.popupText.textContent = content.text;
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

  class Modal {
    constructor() {
      this.modal = $('#modal');
      this.modalBody = $('#modal-body');
      this.modalClose = $('.modal-close');
      this.modalTriggers = $$('[data-modal]');
      this.init();
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
      this.modalClose?.addEventListener('click', () => this.closeModal());
    }

    setupBackdropClick() {
      this.modal?.addEventListener('click', (event) => {
        if (event.target === this.modal) this.closeModal();
      });
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
        const cardsMarkup = content.items.map((item) => `
          <article class="ecosystem-item-card">
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
            <div class="ecosystem-item-info">
              <h4>${item.title}</h4>
              <p>${item.description}</p>
            </div>
          </article>
        `).join('');

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

  class Carousel {
    constructor() {
      this.carouselSlides = $$('.carousel-slide');
      this.prevButton = $('.carousel-btn.prev');
      this.nextButton = $('.carousel-btn.next');
      this.activeSlide = 0;
      this.timer = null;
      this.init();
    }

    init() {
      if (this.carouselSlides.length === 0) return;
      this.showSlide(this.activeSlide);
      this.prevButton?.addEventListener('click', () => this.prevSlide());
      this.nextButton?.addEventListener('click', () => this.nextSlide());
      this.timer = window.setInterval(() => this.nextSlide(), 6000);
    }

    showSlide(index) {
      this.carouselSlides.forEach((slide, slideIndex) => {
        slide.classList.toggle('active', slideIndex === index);
      });
    }

    nextSlide() {
      this.activeSlide = (this.activeSlide + 1) % this.carouselSlides.length;
      this.showSlide(this.activeSlide);
    }

    prevSlide() {
      this.activeSlide = (this.activeSlide - 1 + this.carouselSlides.length) % this.carouselSlides.length;
      this.showSlide(this.activeSlide);
    }
  }

  class FAQ {
    constructor() {
      this.faqItems = $$('.faq-item');
      this.init();
    }

    init() {
      this.faqItems.forEach((item) => {
        const button = $('.faq-question', item);
        button?.addEventListener('click', () => {
          this.faqItems.forEach((entry) => entry.classList.remove('active'));
          item.classList.add('active');
        });
      });
    }
  }

  class Assistant {
    constructor() {
      this.assistantToggle = $('.assistant-toggle');
      this.assistantPanel = $('.assistant-panel');
      this.assistantClose = $('.assistant-close');
      this.assistantForm = $('.assistant-form');
      this.assistantBody = $('.assistant-body');
      this.quickActions = $$('.assistant-quick-actions button');
      this.init();
    }

    init() {
      if (!this.assistantToggle) return;
      this.setupToggle();
      this.setupForm();
      this.setupQuickActions();
    }

    setupToggle() {
      this.assistantToggle?.addEventListener('click', () => {
        this.assistantPanel?.classList.toggle('open');
      });

      this.assistantClose?.addEventListener('click', () => {
        this.assistantPanel?.classList.remove('open');
      });
    }

    setupForm() {
      this.assistantForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = this.assistantForm.querySelector('input');
        if (!input || !input.value.trim()) return;
        const userMessage = input.value.trim();
        input.value = '';
        this.replyManually(userMessage);
      });
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
      const answer = MANUAL_RESPONSES[userMessage.trim().toLowerCase()];
      if (answer) {
        this.appendMessage(answer, false);
        return;
      }
      this.appendMessage('Saya hanya bisa menjawab 3 pertanyaan ini: Best time, Stay options, dan Packing tips. Silakan pilih tombol yang tersedia.', false);
    }
  }

  function setCurrentYear() {
    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
  }

  function bootstrapFallback() {
    document.documentElement.classList.add('js-enabled');
    setCurrentYear();
    new Navigation();
    new Animations();
    new Timeline();
    new Modal();
    new Carousel();
    new Assistant();
    new FAQ();
    new HeroEffects();
    try {
      new CardInteractions();
    } catch (error) {
      void error;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrapFallback);
  } else {
    bootstrapFallback();
  }
})();