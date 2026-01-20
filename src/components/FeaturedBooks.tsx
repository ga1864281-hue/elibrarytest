import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookCard from "./BookCard";
import BookDetailsModal from "./BookDetailsModal";

// Sample data - in production this would come from the database
const featuredBooks = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    category: "Computer Science",
    rating: 4.8,
    year: 2022,
    available: true,
    description: "A comprehensive introduction to the modern study of computer algorithms.",
    isbn: "978-0262046305",
    pages: 1312,
  },
  {
    id: 2,
    title: "Principles of Physics",
    author: "David Halliday",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
    category: "Science",
    rating: 4.6,
    year: 2021,
    available: true,
    description: "The gold standard in introductory physics courses.",
    isbn: "978-1118230749",
    pages: 1248,
  },
  {
    id: 3,
    title: "Modern Architecture",
    author: "Kenneth Frampton",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    category: "Arts",
    rating: 4.5,
    year: 2020,
    available: false,
    description: "A critical history of modern architecture from 1851 to the present.",
    isbn: "978-0500203958",
    pages: 424,
  },
  {
    id: 4,
    title: "Engineering Mathematics",
    author: "K.A. Stroud",
    cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=600&fit=crop",
    category: "Engineering",
    rating: 4.7,
    year: 2023,
    available: true,
    description: "A groundbreaking book for engineering students.",
    isbn: "978-1352010275",
    pages: 1176,
  },
  {
    id: 5,
    title: "Organic Chemistry",
    author: "Paula Yurkanis Bruice",
    cover: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=600&fit=crop",
    category: "Science",
    rating: 4.4,
    year: 2021,
    available: true,
    description: "The most student-friendly organic chemistry textbook.",
    isbn: "978-0134042282",
    pages: 1344,
  },
  {
    id: 6,
    title: "Business Analytics",
    author: "James R. Evans",
    cover: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=400&h=600&fit=crop",
    category: "Business",
    rating: 4.3,
    year: 2022,
    available: false,
    description: "Methods and models for data-driven decision making.",
    isbn: "978-0135231678",
    pages: 672,
  },
  {
    id: 7,
    title: "Digital Electronics",
    author: "Morris Mano",
    cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop",
    category: "Engineering",
    rating: 4.6,
    year: 2020,
    available: true,
    description: "Comprehensive coverage of digital electronics and logic design.",
    isbn: "978-0134549897",
    pages: 720,
  },
  {
    id: 8,
    title: "World History",
    author: "William J. Duiker",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    category: "Arts",
    rating: 4.2,
    year: 2021,
    available: true,
    description: "A comprehensive history of world civilizations.",
    isbn: "978-1337401050",
    pages: 1056,
  },
];

const FeaturedBooks = () => {
  const [selectedBook, setSelectedBook] = useState<typeof featuredBooks[0] | null>(null);

  const handleViewBook = (id: number) => {
    const book = featuredBooks.find(b => b.id === id);
    if (book) setSelectedBook(book);
  };

  return (
    <section className="py-20">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
              Featured <span className="text-gradient">Books</span>
            </h2>
            <p className="text-muted-foreground">
              Handpicked selections from our librarians for your academic journey
            </p>
          </div>
          <Link to="/browse">
            <Button variant="outline-gold" className="group">
              View All Books
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book, index) => (
            <div
              key={book.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <BookCard {...book} onView={handleViewBook} />
            </div>
          ))}
        </div>
      </div>

      {/* Book Details Modal */}
      <BookDetailsModal
        book={selectedBook}
        isOpen={!!selectedBook}
        onClose={() => setSelectedBook(null)}
      />
    </section>
  );
};

export default FeaturedBooks;
