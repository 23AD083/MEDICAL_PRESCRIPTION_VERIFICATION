import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { toast } from "sonner";

const VoiceFeatures = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    if (!isListening) {
      toast.success("Voice input activated. Start speaking...");
    } else {
      toast.info("Voice input stopped.");
    }
  };

  const handleReadAloud = () => {
    setIsSpeaking(!isSpeaking);
    if (!isSpeaking) {
      toast.success("Reading prescription analysis aloud...");
    } else {
      toast.info("Voice output stopped.");
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Voice-Powered Healthcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Talk to your AI assistant and hear results instantly with our advanced voice features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-gradient opacity-5"></div>
            <CardHeader className="relative">
              <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${
                isListening ? 'bg-red-100 animate-pulse' : 'bg-primary/10'
              }`}>
                {isListening ? <MicOff className="h-8 w-8 text-red-600" /> : <Mic className="h-8 w-8 text-primary" />}
              </div>
              <CardTitle className="text-center">Voice Input</CardTitle>
              <CardDescription className="text-center">
                Speak your medical questions and get instant AI responses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative">
              <div className="text-center space-y-4">
                <Button 
                  onClick={handleVoiceInput}
                  className={`w-full ${isListening ? 'bg-red-600 hover:bg-red-700' : 'bg-primary-gradient hover:opacity-90'}`}
                  size="lg"
                >
                  {isListening ? (
                    <>
                      <MicOff className="h-5 w-5 mr-2" />
                      Stop Listening
                    </>
                  ) : (
                    <>
                      <Mic className="h-5 w-5 mr-2" />
                      Start Voice Input
                    </>
                  )}
                </Button>
                {isListening && (
                  <p className="text-sm text-muted-foreground animate-pulse">
                    🎤 Listening... Ask about prescriptions, symptoms, or medications
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-gradient opacity-5"></div>
            <CardHeader className="relative">
              <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${
                isSpeaking ? 'bg-green-100 animate-pulse' : 'bg-primary/10'
              }`}>
                {isSpeaking ? <VolumeX className="h-8 w-8 text-green-600" /> : <Volume2 className="h-8 w-8 text-primary" />}
              </div>
              <CardTitle className="text-center">Read Aloud</CardTitle>
              <CardDescription className="text-center">
                Hear prescription analysis and medical guidance spoken clearly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative">
              <div className="text-center space-y-4">
                <Button 
                  onClick={handleReadAloud}
                  className={`w-full ${isSpeaking ? 'bg-green-600 hover:bg-green-700' : 'bg-primary-gradient hover:opacity-90'}`}
                  size="lg"
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX className="h-5 w-5 mr-2" />
                      Stop Reading
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-5 w-5 mr-2" />
                      Read Results Aloud
                    </>
                  )}
                </Button>
                {isSpeaking && (
                  <p className="text-sm text-muted-foreground animate-pulse">
                    🔊 Reading analysis results... Volume controls available
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VoiceFeatures;