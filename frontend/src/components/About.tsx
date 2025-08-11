import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Plane, Shield, Map, Headphones, Camera, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";//Added by adarsh 11-08-2025
import { toast, useToast } from "@/hooks/use-toast";//Added by adarsh 11-08-2025
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";//Added by adarsh 11-08-2025
import { Card, CardContent } from "@/components/ui/card"; //Added by adarsh 11-08-2025
import Turnstile from "react-turnstile";

const About = () => {
// added by adarsh 11-08-2025

const focusClass =
  "w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-base " +
  "focus:border-[#f4a750] focus:ring-2 focus:ring-[#f4a750] outline-none transition";

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const captchaRef = useRef<any>(null);
  // const [isDialogOpen, setIsDialogOpen] = useState(false);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);

const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [groupData, setGroupData] = useState({
    groupName: "",
    adults: "",
    children: "",
    totalNights: "",
    destinations: "",
    nightsPerDestination: "",
    inclusions: "",
    mealPlan: "",
    email: ""
  });

  // Listen for global "openPlanningTrip" event from header
  useEffect(() => {
    const openHandler = () => {
      contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setIsDialogOpen(true), 600); // small delay for smoothness
    };

    window.addEventListener("openPlanningTrip", openHandler);
    return () => {
      window.removeEventListener("openPlanningTrip", openHandler);
    };
  }, []);

  const handleGroupChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setGroupData({ ...groupData, [e.target.name]: e.target.value });

   const handlePlanSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaVerified || !captchaToken) {
      toast({
        title: "CAPTCHA Required",
        description: "Please complete the CAPTCHA before submitting.",
        variant: "destructive",
      });
      return;
    }
    if (!groupData.groupName || !groupData.email || !groupData.adults || !groupData.destinations
      || !groupData.mealPlan || !groupData.children || !groupData.inclusions || !groupData.totalNights
      || !groupData.nightsPerDestination
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      const url = import.meta.env.VITE_API_BASE_URL + "/send-planning-email";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...groupData, captchaToken }),
      });

      const result = await response.json();
      if (result.success) {
        toast({ title: "Message Sent Successfully!", description: "We'll get back to you within 24 hours." });
        setGroupData({
          groupName: "", adults: "", children: "", totalNights: "", destinations: "",
          nightsPerDestination: "", inclusions: "", mealPlan: "", email: ""
        });
      } else {
        toast({ title: "Failed to Send Message", description: result.message || "Something went wrong.", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", description: "An error occurred while sending your message.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };


//till here

  const features = [
    "Leading DMC in Europe",
    "Exceptional, client-focused service",
    "Curated, personalized experiences",
    "Multilingual, expert team",
    "Innovation-driven solutions",
    "Culinary, cultural and immersive experience",
  ];
  const navigate = useNavigate();
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 textOrange ">
              About Global Journey
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 ">
              At Global Journey, a premier Destination Management Company (DMC), we are committed to providing outstanding European travel experiences. Backed by expert destination knowledge, cutting-edge technology and a passionate multilingual team, our wide range of services from group tours and MICE to special interest and accessible travel are thoughtfully crafted with quality, cultural authenticity and personalized care, ensuring every journey is seamless, enriching and truly unforgettable for both your clients as well as our partners.            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg"  onClick={() => navigate("/about-us")}>
              Learn More About Us
            </Button>
          </div>

          {/* <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-white/80 mb-6">Years of Excellence</div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    
                    <div className="text-2xl font-bold mb-1">50+</div>
                    <div className="text-white/80 text-sm">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">10K+</div>
                    <div className="text-white/80 text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">98%</div>
                    <div className="text-white/80 text-sm">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">25</div>
                    <div className="text-white/80 text-sm">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
            {/* Group Tour Card */}
          <Card className="mt-[50px] border-0 bg-gradient-hero text-white relative">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to explore?</h3>
              <p className="mb-6">Join thousands of happy travelers who have discovered amazing destinations with us.</p>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <Button onClick={() => setIsDialogOpen(true)} className="bg-white text-orange-600 hover:bg-gray-100">
                  Start Planning
                </Button>
                <DialogContent className="max-w-md rounded-xl p-6">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold">Plan Your Group Tour</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4 max-h-[70vh]">
                    <input name="groupName" placeholder="Group Name" value={groupData.groupName} onChange={handleGroupChange} className={focusClass} required />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="number" min={1} name="adults" placeholder="Adults" value={groupData.adults} onChange={handleGroupChange} className={focusClass} required />
                      <input type="number" min={0} max={10} name="children" placeholder="Children" value={groupData.children} onChange={handleGroupChange} className={focusClass} />
                    </div>
                    <input name="totalNights" placeholder="Total Nights" value={groupData.totalNights} onChange={handleGroupChange} className={focusClass} required />
                    <input name="destinations" placeholder="Destination(s)" value={groupData.destinations} onChange={handleGroupChange} className={focusClass} required />
                    <input name="nightsPerDestination" placeholder="Nights in Each Destination" value={groupData.nightsPerDestination} onChange={handleGroupChange} className={focusClass} required />
                    <input name="inclusions" placeholder="Inclusions" value={groupData.inclusions} onChange={handleGroupChange} className={focusClass} required />
                    <input name="mealPlan" placeholder="Meal Plan" value={groupData.mealPlan} onChange={handleGroupChange} className={focusClass} required />
                    <input name="email" type="email" placeholder="Email Address" className={focusClass} value={groupData.email} onChange={handleGroupChange} required />
                  </div>
                  <div className="flex flex-col">
                    <Turnstile ref={captchaRef} sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                      onSuccess={(token) => { setCaptchaToken(token); setIsCaptchaVerified(true); }}
                      onExpire={() => { setCaptchaToken(null); setIsCaptchaVerified(false); }}
                      onError={() => { setCaptchaToken(null); setIsCaptchaVerified(false); }}
                      options={{ theme: "light" }} />
                    <Button onClick={handlePlanSubmit} className="ml-[5px] bg-[#f4a750] hover:bg-[#e08f30] text-white" disabled={!isCaptchaVerified || isLoading}>
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {isLoading ? "Sending..." : "Submit"}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;