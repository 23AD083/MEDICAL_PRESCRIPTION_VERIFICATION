import { useEffect } from 'react';

// Enhanced voice accessibility hooks for specific components
export const useVoiceAnnouncement = () => {
  const announce = (text: string, priority = false) => {
    if ('speechSynthesis' in window) {
      if (priority) {
        speechSynthesis.cancel();
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.volume = 0.7;
      speechSynthesis.speak(utterance);
    }
  };

  return { announce };
};

// Auto-announce form errors and success messages
export const useFormAnnouncements = () => {
  const { announce } = useVoiceAnnouncement();

  const announceError = (fieldName: string, errorMessage: string) => {
    announce(`Error in ${fieldName}: ${errorMessage}`, true);
  };

  const announceSuccess = (message: string) => {
    announce(`Success: ${message}`, true);
  };

  const announceFormSection = (sectionName: string) => {
    announce(`Now in ${sectionName} section`);
  };

  return { announceError, announceSuccess, announceFormSection };
};

// Navigation announcements
export const useNavigationAnnouncements = () => {
  const { announce } = useVoiceAnnouncement();

  useEffect(() => {
    // Announce page changes
    const currentPath = window.location.pathname;
    let pageName = '';
    
    switch (currentPath) {
      case '/':
        pageName = 'Home page';
        break;
      case '/predict':
        pageName = 'AI Medical Predictions page';
        break;
      case '/about':
        pageName = 'About page';
        break;
      case '/contact':
        pageName = 'Contact page';
        break;
      case '/start-now':
        pageName = 'Get Started page';
        break;
      default:
        pageName = 'Unknown page';
    }
    
    // Announce after a short delay to ensure page content is loaded
    const timer = setTimeout(() => {
      announce(`Navigated to ${pageName}. Use voice commands or keyboard navigation to explore.`);
    }, 1000);

    return () => clearTimeout(timer);
  }, [announce]);

  return { announce };
};

export default { useVoiceAnnouncement, useFormAnnouncements, useNavigationAnnouncements };