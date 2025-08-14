import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, BookOpen, AlertTriangle, Pill } from "lucide-react";

const MedicineGuide = () => {
  const [selectedCondition, setSelectedCondition] = useState("");
  const [showGuide, setShowGuide] = useState(false);

  const commonConditions = [
    { value: "headache", label: "Headache" },
    { value: "cold", label: "Common Cold" },
    { value: "fever", label: "Fever" },
    { value: "stomach-ache", label: "Stomach Ache" },
    { value: "cough", label: "Cough" },
    { value: "sore-throat", label: "Sore Throat" },
  ];

  const handleSearch = () => {
    setShowGuide(true);
  };

  const medicineGuides = {
    headache: {
      title: "Headache Relief",
      medicines: [
        { name: "Paracetamol", dosage: "500mg every 6 hours", note: "Max 4 doses per day" },
        { name: "Ibuprofen", dosage: "400mg every 8 hours", note: "Take with food" },
      ],
      tips: "Stay hydrated, rest in a quiet room, apply cold compress"
    },
    cold: {
      title: "Common Cold Treatment",
      medicines: [
        { name: "Paracetamol", dosage: "500mg every 6 hours", note: "For fever and aches" },
        { name: "Decongestant", dosage: "As per package", note: "For stuffy nose" },
      ],
      tips: "Rest, drink fluids, use humidifier, gargle salt water"
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Medicine Guide for Common Conditions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get simple, easy-to-understand medicine guidance for mild and common health conditions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Find Medicine Guide
              </CardTitle>
              <CardDescription>
                Search for common conditions or browse by category
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input 
                    placeholder="Search conditions (e.g., headache, fever, cold...)"
                    className="w-full"
                  />
                </div>
                <Button onClick={handleSearch}>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
              
              <div className="text-center text-muted-foreground">or</div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Select a common condition" />
                  </SelectTrigger>
                  <SelectContent>
                    {commonConditions.map((condition) => (
                      <SelectItem key={condition.value} value={condition.value}>
                        {condition.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  onClick={handleSearch} 
                  disabled={!selectedCondition}
                  variant="outline"
                >
                  Get Guide
                </Button>
              </div>
            </CardContent>
          </Card>

          {showGuide && (
            <Card className="bg-secondary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pill className="h-5 w-5 text-primary" />
                  Headache Relief Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Recommended Medicines:</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-card rounded-lg border">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">Paracetamol</span>
                        <span className="text-sm text-muted-foreground">500mg every 6 hours</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Max 4 doses per day</p>
                    </div>
                    <div className="p-3 bg-card rounded-lg border">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">Ibuprofen</span>
                        <span className="text-sm text-muted-foreground">400mg every 8 hours</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Take with food</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Additional Tips:</h4>
                  <p className="text-sm text-muted-foreground">
                    Stay hydrated, rest in a quiet room, apply cold compress to forehead
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-800">Important Disclaimer</p>
                      <p className="text-sm text-red-700">
                        Always consult a doctor before starting any medication. This guide is for informational purposes only and does not replace professional medical advice.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default MedicineGuide;