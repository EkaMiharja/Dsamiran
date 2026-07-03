// Main Application Entry Point
import { Navigation } from './modules/navigation.js';
import { Animations } from './modules/animations.js';
import { Timeline } from './modules/timeline.js';
import { Modal } from './modules/modal.js';
import { Carousel } from './modules/carousel.js';
import { Assistant } from './modules/assistant.js';
import { FAQ } from './modules/faq.js';
import { HeroEffects } from './modules/hero-effects.js';
import { setCurrentYear } from './modules/utils.js';

// Initialize all modules
function initializeApp() {
  try {
    console.log('🚀 Initializing Eco Journey App...');
    
    setCurrentYear();
    
    // Initialize each module with error handling
    const modules = [
      { name: 'Navigation', Class: Navigation },
      { name: 'Animations', Class: Animations },
      { name: 'Timeline', Class: Timeline },
      { name: 'Modal', Class: Modal },
      { name: 'Carousel', Class: Carousel },
      { name: 'Assistant', Class: Assistant },
      { name: 'FAQ', Class: FAQ },
      { name: 'HeroEffects', Class: HeroEffects }
    ];
    
    modules.forEach(({ name, Class }) => {
      try {
        new Class();
        console.log(`✅ ${name} initialized`);
      } catch (error) {
        console.warn(`⚠️ ${name} initialization warning:`, error.message);
      }
    });
    
    console.log('🌍 Eco Journey App Ready!');
  } catch (error) {
    console.error('❌ Application initialization error:', error);
  }
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
