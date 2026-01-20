import { Search, BookOpen, Users, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const stats = [
    { icon: BookOpen, value: "50,000+", label: "Books" },
    { icon: Users, value: "10,000+", label: "Students" },
    { icon: FileText, value: "5,000+", label: "Journals" },
    { icon: Award, value: "500+", label: "Awards" },
  ];

  return (
    <section className="hero-gradient min-h-[85vh] flex items-center relative">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-float animation-delay-200" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float animation-delay-300" />

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            Welcome to RIT'S E LIBRARY
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up animation-delay-100">
            Discover a World of{" "}
            <span className="text-gradient">Knowledge</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            Access thousands of academic books, journals, and research papers. 
            Your gateway to academic excellence starts here with RIT
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-300">
            <div className="flex gap-2 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 search-glow transition-all duration-300">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="h-5 w-5 text-white/60" />
                <Input
                  type="text"
                  placeholder="Search by title, author, ISBN..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 bg-transparent text-white placeholder:text-white/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button type="submit" variant="hero" size="lg">
                Search
              </Button>
            </div>
          </form>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up animation-delay-400">
            {["Engineering", "Science", "Arts", "Business", "Computer Science"].map((cat) => (
              <button
                key={cat}
                onClick={() => navigate(`/browse?category=${encodeURIComponent(cat)}`)}
                className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <stat.icon className="h-6 w-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
