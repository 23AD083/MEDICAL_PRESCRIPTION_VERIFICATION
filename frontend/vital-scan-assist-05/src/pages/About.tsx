import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Award, Target, Users, Zap, Camera, Brain, Shield } from "lucide-react";

const About = () => {
  const timeline = [
    { year: "2023", event: "Company Founded", description: "MediVerify AI was established with a vision to revolutionize healthcare through AI" },
    { year: "2023", event: "AI Development", description: "Core AI algorithms for prescription verification developed and tested" },
    { year: "2024", event: "Driver Safety Launch", description: "Introduced revolutionary driver safety alert system" },
    { year: "2024", event: "Platform Expansion", description: "Added doctor consultation and comprehensive medicine guide features" },
  ];

  const howItWorks = [
    {
      step: 1,
      icon: Camera,
      title: "Scan & Upload",
      description: "Upload your prescription via camera or file upload for instant analysis"
    },
    {
      step: 2,
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced AI analyzes drug interactions, dosages, and safety concerns"
    },
    {
      step: 3,
      icon: Shield,
      title: "Safety Alerts",
      description: "Receive immediate warnings and safety recommendations"
    },
    {
      step: 4,
      icon: Users,
      title: "Doctor Consultation",
      description: "Connect with healthcare professionals for personalized advice"
    }
  ];

  const certificates = [
    { name: "Healthcare AI Certification", issuer: "Medical AI Institute", year: "2024" },
    { name: "Data Privacy Compliance", issuer: "Healthcare Data Security Board", year: "2024" },
    { name: "Medical Device Recognition", issuer: "Health Technology Authority", year: "2024" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-primary-gradient/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About MediVerify AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pioneering the future of healthcare with AI-powered solutions for safer, smarter medical care.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "Making healthcare safer with AI" – We are committed to leveraging cutting-edge artificial intelligence 
              to prevent medication errors, enhance driver safety, and provide accessible medical guidance to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Year-by-year growth and milestones in revolutionizing healthcare AI
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{item.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <CardTitle>{item.event}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              From scanning to doctor advice – our streamlined process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">
                    Step {step.step}
                  </Badge>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Certifications & Recognition
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted and certified by leading healthcare authorities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                  <Badge variant="outline" className="mt-2">{cert.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;