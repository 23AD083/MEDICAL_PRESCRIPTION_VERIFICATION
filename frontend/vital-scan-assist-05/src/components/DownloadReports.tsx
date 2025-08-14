import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Share2, Mail } from "lucide-react";
import { toast } from "sonner";

const DownloadReports = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = (format: string) => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      toast.success(`Medical report downloaded as ${format.toUpperCase()}!`);
    }, 2000);
  };

  const handleShare = () => {
    toast.success("Report sharing link copied to clipboard!");
  };

  const handleEmailReport = () => {
    toast.success("Report sent to your email address!");
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Download Medical Reports
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get easy-to-share prescription summaries and analysis reports for your healthcare records.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-gradient opacity-5"></div>
            <CardHeader className="text-center relative">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Medical Report Generator</CardTitle>
              <CardDescription className="text-base">
                Generate comprehensive reports from your prescription analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 relative">
              {/* Sample Report Preview */}
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">Latest Analysis Report</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Patient:</span>
                    <span>John Doe</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Analysis Date:</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Medication:</span>
                    <span>Amoxicillin 500mg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Verification Status:</span>
                    <span className="text-green-600 font-medium">✓ Verified</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interactions:</span>
                    <span className="text-yellow-600 font-medium">1 Warning</span>
                  </div>
                </div>
              </div>

              {/* Download Options */}
              <div className="grid md:grid-cols-3 gap-4">
                <Button 
                  onClick={() => handleDownload("pdf")}
                  className="flex flex-col gap-2 h-auto py-4"
                  variant="outline"
                  disabled={isGenerating}
                >
                  <Download className="h-6 w-6" />
                  <span>Download PDF</span>
                  <span className="text-xs text-muted-foreground">Detailed report</span>
                </Button>
                
                <Button 
                  onClick={() => handleDownload("docx")}
                  className="flex flex-col gap-2 h-auto py-4"
                  variant="outline"
                  disabled={isGenerating}
                >
                  <FileText className="h-6 w-6" />
                  <span>Download DOCX</span>
                  <span className="text-xs text-muted-foreground">Editable format</span>
                </Button>

                <Button 
                  onClick={() => handleDownload("summary")}
                  className="flex flex-col gap-2 h-auto py-4 bg-primary-gradient hover:opacity-90 text-white"
                  disabled={isGenerating}
                >
                  <Download className="h-6 w-6" />
                  <span>Quick Summary</span>
                  <span className="text-xs opacity-90">One-page overview</span>
                </Button>
              </div>

              {/* Sharing Options */}
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">Share & Send Options</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleShare} variant="outline" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Generate Share Link
                  </Button>
                  <Button onClick={handleEmailReport} variant="outline" className="flex-1">
                    <Mail className="h-4 w-4 mr-2" />
                    Email to Doctor
                  </Button>
                </div>
              </div>

              {isGenerating && (
                <div className="text-center py-4">
                  <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p className="text-sm text-muted-foreground">Generating your medical report...</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadReports;