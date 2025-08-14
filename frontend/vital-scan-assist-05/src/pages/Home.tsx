import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Camera, Shield, Mic, UserCheck, Download, ArrowRight } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Camera,
      title: "AI-Powered Prescription Verification",
      description: "Instantly detect drug interactions and correct dosages.",
    },
    {
      icon: Shield,
      title: "Driver Safety Alert",
      description: "Stay safe on the road with drug & drowsiness detection.",
    },
    {
      icon: Mic,
      title: "Voice Input & Read-Aloud",
      description: "Talk to your assistant and hear results instantly.",
    },
    {
      icon: UserCheck,
      title: "Online Doctor Consultation",
      description: "Connect directly for medical advice.",
    },
    {
      icon: Download,
      title: "Download Medical Reports",
      description: "Get easy-to-share prescription summaries.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-gradient/5">
        <div className="absolute inset-0 bg-primary-gradient opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              MediVerify AI – Smarter,{" "}
              <span className="text-primary">Safer Healthcare</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From prescription checks to driver safety alerts, your health and safety in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary-gradient hover:opacity-90">
                <Link to="/start-now">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/predict">Try Prediction</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Healthcare AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our range of AI-powered tools designed to make healthcare safer and more accessible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Experience Safer Healthcare?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust MediVerify AI for their health and safety needs.
          </p>
          <Button asChild size="lg" className="bg-primary-gradient hover:opacity-90">
            <Link to="/start-now">
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 MediVerify AI. All rights reserved. Making healthcare safer with AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;