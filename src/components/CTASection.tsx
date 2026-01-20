import { GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6">
            <GraduationCap className="h-8 w-8 text-secondary" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your Learning Journey Today
          </h2>

          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Join thousands of students who have accelerated their academic success with our comprehensive digital library.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                Get Started Free
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/browse">
              <Button variant="glass" size="xl" className="w-full sm:w-auto">
                Browse Library
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/60">
            No credit card required • Free for all enrolled students
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
