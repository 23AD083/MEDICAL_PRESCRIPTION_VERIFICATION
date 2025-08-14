import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Shield, BookOpen, Calendar } from "lucide-react";

interface NavigationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const NavigationCard = ({ icon, title, description, onClick }: NavigationCardProps) => (
  <Card 
    className="cursor-pointer group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm"
    onClick={onClick}
  >
    <CardContent className="p-6 text-center">
      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const PredictNavigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navigationCards = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "AI Prescription Verification",
      description: "Upload or scan prescriptions for instant drug information and interaction warnings",
      sectionId: "prescription-verification"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Driver Safety Alert",
      description: "AI-powered drowsiness and medication detection for safer driving",
      sectionId: "driver-safety"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Medicine Guide",
      description: "Simple medicine guidance for common health conditions in easy language",
      sectionId: "medicine-guide"
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Doctor Consultation",
      description: "Book free online consultations with qualified medical professionals",
      sectionId: "doctor-consultation"
    }
  ];

  return (
    <section className="py-16 bg-medical-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Choose Your AI Medical Tool
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click on any feature below to jump directly to that section and explore our comprehensive medical AI tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {navigationCards.map((card, index) => (
            <NavigationCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              onClick={() => scrollToSection(card.sectionId)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PredictNavigation;