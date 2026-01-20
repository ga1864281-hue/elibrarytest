import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  FlaskConical,
  Palette,
  BookMarked,
  Scale,
  Calculator,
  Stethoscope,
  Building,
  Briefcase,
  Globe,
  Music,
  Languages,
} from "lucide-react";

const categories = [
  {
    name: "Computer Science",
    icon: Cpu,
    count: 8500,
    description: "Programming, algorithms, AI, machine learning, and software engineering",
    color: "from-blue-500 to-cyan-500",
    popular: ["Data Structures", "Machine Learning", "Web Development"],
  },
  {
    name: "Engineering",
    icon: Building,
    count: 7200,
    description: "Mechanical, electrical, civil, and chemical engineering resources",
    color: "from-orange-500 to-red-500",
    popular: ["Thermodynamics", "Circuit Analysis", "Structural Design"],
  },
  {
    name: "Science",
    icon: FlaskConical,
    count: 6200,
    description: "Physics, chemistry, biology, and environmental sciences",
    color: "from-green-500 to-emerald-500",
    popular: ["Organic Chemistry", "Quantum Physics", "Molecular Biology"],
  },
  {
    name: "Mathematics",
    icon: Calculator,
    count: 3200,
    description: "Calculus, algebra, statistics, and discrete mathematics",
    color: "from-indigo-500 to-purple-500",
    popular: ["Calculus", "Linear Algebra", "Probability"],
  },
  {
    name: "Business",
    icon: Briefcase,
    count: 5600,
    description: "Finance, marketing, management, and entrepreneurship",
    color: "from-teal-500 to-cyan-500",
    popular: ["Marketing", "Corporate Finance", "Strategy"],
  },
  {
    name: "Medicine",
    icon: Stethoscope,
    count: 4100,
    description: "Anatomy, pharmacology, clinical medicine, and public health",
    color: "from-red-500 to-pink-500",
    popular: ["Human Anatomy", "Pharmacology", "Clinical Medicine"],
  },
  {
    name: "Arts & Humanities",
    icon: Palette,
    count: 4800,
    description: "History, philosophy, art, literature, and cultural studies",
    color: "from-pink-500 to-rose-500",
    popular: ["Art History", "Philosophy", "Cultural Studies"],
  },
  {
    name: "Law",
    icon: Scale,
    count: 2100,
    description: "Constitutional law, criminal law, and legal studies",
    color: "from-amber-500 to-yellow-500",
    popular: ["Constitutional Law", "Criminal Law", "Legal Ethics"],
  },
  {
    name: "Literature",
    icon: BookMarked,
    count: 3500,
    description: "Classic and modern literature, poetry, and literary analysis",
    color: "from-purple-500 to-violet-500",
    popular: ["Classic Literature", "Modern Fiction", "Poetry"],
  },
  {
    name: "Languages",
    icon: Languages,
    count: 2800,
    description: "Language learning, linguistics, and translation studies",
    color: "from-sky-500 to-blue-500",
    popular: ["Spanish", "French", "Linguistics"],
  },
  {
    name: "Music",
    icon: Music,
    count: 1500,
    description: "Music theory, composition, and performance studies",
    color: "from-fuchsia-500 to-pink-500",
    popular: ["Music Theory", "Composition", "Music History"],
  },
  {
    name: "Global Studies",
    icon: Globe,
    count: 2200,
    description: "International relations, geopolitics, and global economics",
    color: "from-emerald-500 to-teal-500",
    popular: ["International Relations", "Geopolitics", "Trade"],
  },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12">
        <div className="container">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Browse by <span className="text-gradient">Category</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our extensive collection organized by subject. Find the resources you need for your academic journey.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={`/browse?category=${encodeURIComponent(category.name)}`}
                className="group relative p-6 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s`, opacity: 0, animationFillMode: "forwards" }}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-serif font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{category.description}</p>

                {/* Stats */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-semibold text-foreground">
                    {category.count.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">books available</span>
                </div>

                {/* Popular Topics */}
                <div className="flex flex-wrap gap-2">
                  {category.popular.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-5 h-5 text-foreground" />
                </div>
              </Link>
            ))}
          </div>

          {/* Trending Section */}
          <div className="mt-16 p-8 rounded-2xl bg-muted/50 border border-border">
            <div className="flex items-center gap-2 text-secondary mb-6">
              <TrendingUp className="h-5 w-5" />
              <span className="font-medium">Trending This Week</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Machine Learning", "Data Science", "Organic Chemistry", "Business Analytics"].map(
                (topic) => (
                  <Link
                    key={topic}
                    to={`/browse?search=${encodeURIComponent(topic)}`}
                    className="p-4 rounded-xl bg-card border border-border hover:border-secondary/50 hover:shadow-md transition-all duration-300 text-center"
                  >
                    <span className="font-medium text-foreground">{topic}</span>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
