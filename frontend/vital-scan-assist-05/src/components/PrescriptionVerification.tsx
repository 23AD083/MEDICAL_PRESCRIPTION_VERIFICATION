import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Camera, FileText, AlertTriangle, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import prescriptionBg from "@/assets/prescription-bg.jpg";

const PrescriptionVerification = () => {
  const [showResult, setShowResult] = useState(false);

  const handleUpload = () => {
    setShowResult(true);
    toast.success("Prescription analyzed successfully!");
  };

  return (
    <section 
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url(${prescriptionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            AI Prescription Verification
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload or scan your prescription to get instant drug information, dosage verification, and interaction warnings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 border-dashed border-border hover:border-primary/50 transition-colors" role="region" aria-label="Prescription upload area">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Prescription
              </CardTitle>
              <CardDescription>
                Upload an image or PDF of your prescription
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleUpload}
                  className="flex-1"
                  variant="outline"
                  aria-label="Choose prescription file to upload"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Choose File
                </Button>
                <Button 
                  onClick={handleUpload}
                  className="flex-1"
                  variant="outline"
                  aria-label="Take photo of prescription"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Take Photo
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Supports JPG, PNG, PDF files up to 10MB
              </p>
            </CardContent>
          </Card>

          {showResult && (
            <Card className="bg-secondary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  Analysis Result
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-card rounded-lg border">
                  <h4 className="font-semibold text-foreground mb-2">Amoxicillin 500mg</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Dosage:</strong> Take 1 capsule every 8 hours for 7 days
                  </p>
                  <div className="flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Interaction Warning</p>
                      <p className="text-xs text-yellow-700">
                        May reduce effectiveness of birth control pills. Consider additional contraception.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  View Full Analysis
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default PrescriptionVerification;