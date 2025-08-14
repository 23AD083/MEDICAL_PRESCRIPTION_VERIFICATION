import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Volume2, VolumeX, Mic, MicOff, Play, Pause, RotateCcw } from "lucide-react";
import { toast } from "sonner";

interface VoiceAccessibilityProps {
  apiKey?: string;
}

const VoiceAccessibility = ({ apiKey }: VoiceAccessibilityProps) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechRate, setSpeechRate] = useState(1);
  const [currentText, setCurrentText] = useState('');
  
  const speechSynthesis = useRef<SpeechSynthesis | null>(null);
  const recognition = useRef<any>(null);
  const currentUtterance = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Initialize speech synthesis
    if ('speechSynthesis' in window) {
      speechSynthesis.current = window.speechSynthesis;
    }

    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true;
      recognition.current.lang = 'en-US';

      recognition.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('');

        handleVoiceCommand(transcript.toLowerCase());
      };

      recognition.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
    }

    return () => {
      if (currentUtterance.current) {
        speechSynthesis.current?.cancel();
      }
      if (recognition.current && isListening) {
        recognition.current.stop();
      }
    };
  }, []);

  const speak = (text: string, options: { priority?: boolean; rate?: number } = {}) => {
    if (!speechSynthesis.current || !isEnabled) return;

    if (options.priority && currentUtterance.current) {
      speechSynthesis.current.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = options.rate || speechRate;
    utterance.volume = 0.8;
    utterance.pitch = 1;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setCurrentText(text);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setCurrentText('');
      currentUtterance.current = null;
    };

    currentUtterance.current = utterance;
    speechSynthesis.current.speak(utterance);
  };

  const stopSpeaking = () => {
    if (speechSynthesis.current) {
      speechSynthesis.current.cancel();
      setIsSpeaking(false);
      setCurrentText('');
    }
  };

  const toggleListening = () => {
    if (!recognition.current) {
      toast.error('Speech recognition not supported in this browser');
      return;
    }

    if (isListening) {
      recognition.current.stop();
      setIsListening(false);
      speak('Voice commands disabled');
    } else {
      recognition.current.start();
      setIsListening(true);
      speak('Voice commands enabled. Say "help" for available commands.');
    }
  };

  const handleVoiceCommand = (command: string) => {
    console.log('Voice command:', command);

    if (command.includes('help')) {
      speak(`Available commands: Navigate to home, Go to predict page, Read current section, Stop reading, Scroll up, Scroll down, Click button, Fill prescription form, Book consultation, What is this page about`);
    } else if (command.includes('navigate to home') || command.includes('go home')) {
      window.location.href = '/';
      speak('Navigating to home page');
    } else if (command.includes('predict') || command.includes('prediction')) {
      window.location.href = '/predict';
      speak('Going to AI prediction page');
    } else if (command.includes('read') || command.includes('what is this')) {
      readCurrentPage();
    } else if (command.includes('stop')) {
      stopSpeaking();
    } else if (command.includes('scroll up')) {
      window.scrollBy(0, -300);
      speak('Scrolled up');
    } else if (command.includes('scroll down')) {
      window.scrollBy(0, 300);
      speak('Scrolled down');
    } else if (command.includes('prescription')) {
      const prescriptionSection = document.getElementById('prescription-verification');
      if (prescriptionSection) {
        prescriptionSection.scrollIntoView({ behavior: 'smooth' });
        speak('Navigated to prescription verification section');
      }
    } else if (command.includes('consultation') || command.includes('doctor')) {
      const consultationSection = document.getElementById('doctor-consultation');
      if (consultationSection) {
        consultationSection.scrollIntoView({ behavior: 'smooth' });
        speak('Navigated to doctor consultation section');
      }
    }
  };

  const readCurrentPage = () => {
    const title = document.title;
    const headings = Array.from(document.querySelectorAll('h1, h2, h3')).map(h => h.textContent).join('. ');
    const content = `Page title: ${title}. Main sections: ${headings}`;
    speak(content, { priority: true });
  };

  const toggleAccessibility = () => {
    setIsEnabled(!isEnabled);
    if (!isEnabled) {
      speak('Voice accessibility enabled. Use voice commands or click the microphone button to start.');
      toast.success('Voice accessibility enabled');
    } else {
      stopSpeaking();
      if (isListening && recognition.current) {
        recognition.current.stop();
        setIsListening(false);
      }
      toast.success('Voice accessibility disabled');
    }
  };

  // Add focus and hover event listeners for better accessibility
  useEffect(() => {
    if (!isEnabled) return;

    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON') {
        speak(`Button: ${target.textContent || 'Unlabeled button'}`);
      } else if (target.tagName === 'INPUT') {
        const input = target as HTMLInputElement;
        speak(`Input field: ${input.placeholder || input.getAttribute('aria-label') || 'Text input'}`);
      } else if (target.tagName === 'A') {
        speak(`Link: ${target.textContent || 'Unlabeled link'}`);
      }
    };

    document.addEventListener('focusin', handleFocus);
    return () => document.removeEventListener('focusin', handleFocus);
  }, [isEnabled]);

  return (
    <Card className="fixed top-4 right-4 z-50 w-80 bg-card/95 backdrop-blur-sm border-2 shadow-lg">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm">Voice Accessibility</h3>
          <Button
            size="sm"
            variant={isEnabled ? "default" : "outline"}
            onClick={toggleAccessibility}
            aria-label={isEnabled ? "Disable voice accessibility" : "Enable voice accessibility"}
          >
            {isEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </Button>
        </div>

        {isEnabled && (
          <div className="space-y-3">
            {/* Current Status */}
            {isSpeaking && (
              <div className="p-2 bg-primary/10 rounded text-xs">
                <div className="flex items-center gap-2 mb-1">
                  <Play className="h-3 w-3 text-primary" />
                  <span className="font-medium">Speaking:</span>
                </div>
                <p className="text-muted-foreground">{currentText.substring(0, 60)}...</p>
              </div>
            )}

            {/* Controls */}
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={toggleListening}
                className={isListening ? "bg-accent text-accent-foreground" : ""}
                aria-label={isListening ? "Stop voice commands" : "Start voice commands"}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>

              <Button
                size="sm"
                variant="outline"
                onClick={isSpeaking ? stopSpeaking : readCurrentPage}
                aria-label={isSpeaking ? "Stop speaking" : "Read current page"}
              >
                {isSpeaking ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>

              <Button
                size="sm"
                variant="outline"
                onClick={() => speak("Voice accessibility is active. Say help for available commands.")}
                aria-label="Repeat instructions"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>

            {/* Speed Control */}
            <div className="flex items-center gap-2 text-xs">
              <span>Speed:</span>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={speechRate}
                onChange={(e) => setSpeechRate(Number(e.target.value))}
                className="flex-1"
                aria-label="Speech rate"
              />
              <span>{speechRate}x</span>
            </div>

            {/* Quick Commands */}
            <div className="text-xs text-muted-foreground">
              <p className="font-medium mb-1">Quick voice commands:</p>
              <ul className="space-y-0.5 text-xs">
                <li>• "Help" - List all commands</li>
                <li>• "Read" - Read current page</li>
                <li>• "Stop" - Stop speaking</li>
                <li>• "Go home" - Navigate to home</li>
                <li>• "Prescription" - Go to that section</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VoiceAccessibility;