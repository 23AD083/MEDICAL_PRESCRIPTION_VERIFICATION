import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Video, MessageCircle, Users, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import consultationBg from "@/assets/consultation-bg.jpg";

const DoctorConsultation = () => {
  const [isBooked, setIsBooked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    preferredTime: "",
    concern: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    toast.success("Consultation booked successfully!");
  };

  return (
    <section 
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.8)), url(${consultationBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Free Doctor Consultation
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Book a free online consultation with our qualified doctors. Get professional medical advice from the comfort of your home.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Features */}
            <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Why Choose Our Consultations?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Video className="h-5 w-5 text-white" />
                    <span>HD video consultations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-white" />
                    <span>Licensed medical professionals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-white" />
                    <span>Flexible scheduling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-white" />
                    <span>Secure messaging platform</span>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="font-semibold text-white mb-4">Available Time Slots</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-white/10 rounded border border-white/20">
                    <p className="text-sm text-white/90">Morning</p>
                    <p className="font-medium text-white">9 AM - 12 PM</p>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded border border-white/20">
                    <p className="text-sm text-white/90">Afternoon</p>
                    <p className="font-medium text-white">1 PM - 5 PM</p>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded border border-white/20">
                    <p className="text-sm text-white/90">Evening</p>
                    <p className="font-medium text-white">6 PM - 9 PM</p>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded border border-white/20">
                    <p className="text-sm text-white/90">Emergency</p>
                    <p className="font-medium text-white">24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Book Your Consultation
                </CardTitle>
                <CardDescription>
                  Fill out the form below to schedule your free consultation
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isBooked ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select value={formData.preferredTime} onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (1 PM - 5 PM)</SelectItem>
                          <SelectItem value="evening">Evening (6 PM - 9 PM)</SelectItem>
                          <SelectItem value="emergency">Emergency (24/7)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="concern">Medical Concern</Label>
                      <Textarea
                        id="concern"
                        value={formData.concern}
                        onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                        placeholder="Briefly describe your medical concern or symptoms..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary-gradient border-0 hover:opacity-90 transition-opacity">
                      Book Free Consultation
                    </Button>
                  </form>
                ) : (
                  <div className="text-center space-y-4 py-8">
                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Consultation Booked!</h3>
                    <p className="text-muted-foreground mb-6">
                      You'll receive a confirmation email with your appointment details and video call link.
                    </p>
                    <div className="space-y-3">
                      <Button className="w-full" variant="outline">
                        <Video className="h-4 w-4 mr-2" />
                        Join Video Call
                      </Button>
                      <Button className="w-full" variant="outline">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Start Chat
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorConsultation;