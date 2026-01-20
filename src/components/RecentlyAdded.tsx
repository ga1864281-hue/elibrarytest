import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const recentBooks = [
  {
    id: 1,
    title: "Machine Learning Fundamentals",
    author: "Dr. Sarah Chen",
    cover: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=100&h=150&fit=crop",
    category: "Computer Science",
    addedDate: "2 days ago",
  },
  {
    id: 2,
    title: "Advanced Calculus",
    author: "Prof. Michael Roberts",
    cover: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=100&h=150&fit=crop",
    category: "Mathematics",
    addedDate: "3 days ago",
  },
  {
    id: 3,
    title: "Contemporary Art History",
    author: "Emily Watson",
    cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=100&h=150&fit=crop",
    category: "Arts",
    addedDate: "5 days ago",
  },
  {
    id: 4,
    title: "Quantum Mechanics",
    author: "Dr. James Lee",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=100&h=150&fit=crop",
    category: "Science",
    addedDate: "1 week ago",
  },
];

const RecentlyAdded = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Info */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 text-secondary mb-4">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Just Added</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Recently Added to Our Collection
              </h2>
              <p className="text-muted-foreground mb-6">
                Stay updated with the latest additions to our library. Fresh resources added weekly.
              </p>
              <Link to="/browse?sort=newest">
                <Button variant="outline-gold" className="group">
                  View All New Books
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Book List */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {recentBooks.map((book, index) => (
                <div
                  key={book.id}
                  className="group flex gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-lg hover:border-secondary/50 transition-all duration-300 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  {/* Cover */}
                  <div className="w-16 h-24 rounded-lg overflow-hidden shrink-0 shadow-md group-hover:shadow-xl transition-shadow">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
                          {book.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                      </div>
                      <Badge variant="secondary" className="shrink-0">
                        {book.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Added {book.addedDate}</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-5 w-5 text-secondary" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyAdded;
