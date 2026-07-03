// Utility Functions
export function setCurrentYear() {
  try {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  } catch (error) {
    console.warn('Error setting year:', error);
  }
}
