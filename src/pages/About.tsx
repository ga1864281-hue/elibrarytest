import { BookOpen, Users, Award, Clock, Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const About = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const stats = [
    { icon: BookOpen, value: "50,000+", label: "Books & Resources" },
    { icon: Users, value: "10,000+", label: "Active Students" },
    { icon: Award, value: "100+", label: "Partner Universities" },
    { icon: Clock, value: "24/7", label: "Access Available" },
  ];

  const team = [
    {
      name: "G.ARAVIND",
      role: "DEVELOPER",
      image: "https://drive.google.com/file/d/1d1Pj3BTVvN868Rptpw1LoaLcZC_Y2kSF/view?usp=drivesdk",
    },
    {
      name: "BHAGATH KRISHNAN U S",
      role: "DEVELOPER",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    },
    {
      name: "SIRIN J DEVASSIA",
      role: "RESOURCE DEALER",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
    {
      name: "NANDAKISHORE.G",
      role: "DATA CONTROLLER",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 hero-gradient text-white relative overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">EduLibrary</span>
              </h1>
              <p className="text-lg text-white/80">
                Empowering students with access to world-class academic resources since 2010. 
                Our mission is to make knowledge accessible to every learner.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 -mt-8 relative z-20">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-card border border-border shadow-lg text-center"
                >
                  <stat.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our <span className="text-gradient">Mission</span>
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  EduLibrary was founded with a simple yet powerful vision: to democratize access 
                  to academic resources for students everywhere. We believe that quality education 
                  should not be limited by geographical or financial barriers.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Today, we serve over 10,000 students from more than 100 partner institutions, 
                  providing instant access to textbooks, research papers, journals, and e-learning 
                  materials across all major academic disciplines.
                </p>
                <Button variant="hero">Learn More About Us</Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=600&fit=crop"
                    alt="Library interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our <span className="text-gradient">Team</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Dedicated professionals committed to supporting your academic journey
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="text-center group"
                >
                  <div className="relative mb-4 mx-auto w-32 h-32 md:w-40 md:h-40">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-card shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full border-4 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Get in <span className="text-gradient">Touch</span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Have questions or feedback? We'd love to hear from you. Our team is 
                  available to help with any inquiries about our services.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <MapPin className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Address</h4>
                      <p className="text-sm text-muted-foreground">
                        123 University Avenue, Academic City, AC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <Phone className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <Mail className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-sm text-muted-foreground">library@university.edu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-lg">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email</Label>
                    <Input id="contactEmail" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" variant="hero" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
