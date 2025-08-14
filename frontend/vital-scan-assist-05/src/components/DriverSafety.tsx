import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Shield, AlertCircle, Eye, Smartphone, Car } from "lucide-react";
import { toast } from "sonner";
import driverSafetyBg from "@/assets/driver-safety-bg.jpg";

const DriverSafety = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(true);
    toast.success("Camera connected! Monitoring started.");
  };

  return (
    <section 
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.9), rgba(248, 250, 252, 0.85)), url(${driverSafetyBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Smart Vehicle Safety Monitoring
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect your 4-wheeler to our AI system for real-time drowsiness and medication alertness monitoring. Get instant mobile alerts for safer driving.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-gradient opacity-5"></div>
            <CardHeader className="text-center relative">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Real-time Safety Monitoring</CardTitle>
              <CardDescription className="text-base">
                AI-powered detection for safer driving
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 relative">
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4">
                  <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Drowsiness Detection</h4>
                  <p className="text-sm text-muted-foreground">
                    AI monitors eye movement and alertness levels
                  </p>
                </div>
                <div className="text-center p-4">
                  <AlertCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Medication Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Detects signs of sedative effects and impairment
                  </p>
                </div>
                <div className="text-center p-4">
                  <Car className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Vehicle Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Connects to your 4-wheeler's systems
                  </p>
                </div>
                <div className="text-center p-4">
                  <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Mobile Alerts</h4>
                  <p className="text-sm text-muted-foreground">
                    Instant safety notifications on your phone
                  </p>
                </div>
              </div>

              <div className="bg-card/50 rounded-lg p-6 border mb-6">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  How Vehicle Connection Works
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-2">
                      <strong>Step 1:</strong> Connect our device to your vehicle's OBD port
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <strong>Step 2:</strong> Install our mobile app and pair with the device
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2">
                      <strong>Step 3:</strong> AI monitors your driving behavior in real-time
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Step 4:</strong> Receive instant alerts for drowsiness or impairment
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button 
                  onClick={handleConnect}
                  className="bg-primary-gradient border-0 hover:opacity-90 transition-opacity"
                  size="lg"
                  disabled={isConnected}
                  aria-label={isConnected ? "Camera is connected and monitoring" : "Connect camera for safety monitoring"}
                >
                  <Camera className="h-5 w-5 mr-2" />
                  {isConnected ? "Camera Connected" : "Connect Camera"}
                </Button>
                {isConnected && (
                  <p className="text-sm text-accent mt-2 font-medium">
                    ✓ Monitoring active - Drive safely!
                  </p>
                )}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-800">Safety Notice</p>
                    <p className="text-sm text-yellow-700">
                      This system is designed to assist, not replace, responsible driving decisions. Always follow medical advice regarding driving restrictions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DriverSafety;