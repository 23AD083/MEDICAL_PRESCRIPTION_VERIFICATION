import PrescriptionVerification from "@/components/PrescriptionVerification";
import DriverSafety from "@/components/DriverSafety";
import MedicineGuide from "@/components/MedicineGuide";
import DoctorConsultation from "@/components/DoctorConsultation";
import VoiceFeatures from "@/components/VoiceFeatures";
import DownloadReports from "@/components/DownloadReports";
import PredictNavigation from "@/components/PredictNavigation";
import medicalHeroBg from "@/assets/medical-bg-hero.jpg";
import { useEffect } from "react";
import { useNavigationAnnouncements } from "@/hooks/useVoiceAccessibility";

const Predict = () => {
  // Voice announcements for navigation
  useNavigationAnnouncements();

  useEffect(() => {
    // Add chatbot script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="dN8JsOGMbiwwd9yG0WRoo";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen" role="main" aria-label="AI Medical Predictions Application">
      {/* Hero Section with Background */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)), url(${medicalHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        role="banner"
        aria-label="AI Medical Predictions Hero Section"
      >
        <div className="absolute inset-0 bg-primary-gradient/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6" tabIndex={0}>
            AI-Powered Medical Predictions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" tabIndex={0}>
            Experience our comprehensive suite of AI tools designed to enhance your healthcare journey with intelligent predictions and personalized care.
          </p>
        </div>
      </section>
      
      {/* Top Navigation Cards */}
      <PredictNavigation />
      
      {/* Main Sections */}
      <div id="prescription-verification">
        <PrescriptionVerification />
      </div>
      <div id="driver-safety">
        <DriverSafety />
      </div>
      <VoiceFeatures />
      <div id="medicine-guide">
        <MedicineGuide />
      </div>
      <div id="doctor-consultation">
        <DoctorConsultation />
      </div>
      <DownloadReports />
    </main>
  );
};

export default Predict;