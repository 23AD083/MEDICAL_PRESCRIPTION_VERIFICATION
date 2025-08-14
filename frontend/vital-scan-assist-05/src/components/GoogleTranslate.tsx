import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Add Google Translate script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    
    // Define the callback function
    (window as any).googleTranslateElementInit = function() {
      new (window as any).google.translate.TranslateElement(
        { pageLanguage: 'en' }, 
        'google_translate_element'
      );
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      delete (window as any).googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="fixed top-4 left-4 z-50">
      <div 
        id="google_translate_element" 
        className="bg-card/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border"
      ></div>
    </div>
  );
};

export default GoogleTranslate;