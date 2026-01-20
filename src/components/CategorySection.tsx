import { Link } from "react-router-dom";
import { 
  Cpu, 
  FlaskConical, 
  Palette, 
  BookMarked, 
  Scale, 
  Calculator,
  Stethoscope,
  Building
} from "lucide-react";

const categories = [
  { name: "Engineering", icon: Cpu, count: 8500, color: "from-blue-500 to-cyan-500" },
  { name: "Science", icon: FlaskConical, count: 6200, color: "from-green-500 to-emerald-500" },
  { name: "Arts & Humanities", icon: Palette, count: 4800, color: "from-pink-500 to-rose-500" },
  { name: "Literature", icon: BookMarked, count: 3500, color: "from-purple-500 to-violet-500" },
  { name: "Law", icon: Scale, count: 2100, color: "from-amber-500 to-yellow-500" },
  { name: "Mathematics", icon: Calculator, count: 3200, color: "from-indigo-500 to-blue-500" },
  { name: "Medicine", icon: Stethoscope, count: 4100, color: "from-red-500 to-orange-500" },
  { name: "Business", icon: Building, count: 5600, color: "from-teal-500 to-cyan-500" },
];

const CategorySection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive collection organized by subject. Find exactly what you need for your studies.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={`/browse?category=${encodeURIComponent(category.name)}`}
              className="group relative p-6 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <category.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-serif font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.count.toLocaleString()} books
              </p>

              {/* Arrow indicator */}
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
