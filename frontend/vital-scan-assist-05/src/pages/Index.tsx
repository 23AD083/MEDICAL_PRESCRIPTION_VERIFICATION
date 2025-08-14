import MedicalHero from "@/components/MedicalHero";
import PrescriptionVerification from "@/components/PrescriptionVerification";
import DriverSafety from "@/components/DriverSafety";
import MedicineGuide from "@/components/MedicineGuide";
import DoctorConsultation from "@/components/DoctorConsultation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MedicalHero />
      <PrescriptionVerification />
      <DriverSafety />
      <MedicineGuide />
      <DoctorConsultation />
    </div>
  );
};

export default Index;
