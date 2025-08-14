import { Button } from "@/components/ui/button";
import { Stethoscope, Shield, BookOpen, Calendar } from "lucide-react";
import heroImage from "@/assets/medical-hero.jpg";

const MedicalHero = () => {
  return (
    <section className="bg-medical-gradient py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              AI-Powered Medical Assistant
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Verify prescriptions, monitor driver safety, get medicine guidance, and book consultations - all powered by advanced AI technology.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-primary-gradient border-0 hover:opacity-90 transition-opacity">
                Get Started
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3">
                <Stethoscope className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">AI Prescription Check</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Driver Safety Alert</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Medicine Guide</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Free Consultations</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Medical AI Technology" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalHero;