import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter, Grid, List, X, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import BookDetailsModal from "@/components/BookDetailsModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Sample book data
const allBooks = [
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
    category: "Arts & Humanities",
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
    category: "Arts & Humanities",
    rating: 4.2,
    year: 2021,
    available: true,
    description: "A comprehensive history of world civilizations.",
    isbn: "978-1337401050",
    pages: 1056,
  },
  {
    id: 9,
    title: "Data Structures and Algorithms",
    author: "Michael T. Goodrich",
    cover: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=600&fit=crop",
    category: "Computer Science",
    rating: 4.5,
    year: 2023,
    available: true,
    description: "An introduction to data structures and algorithms in Java.",
    isbn: "978-1118771334",
    pages: 736,
  },
  {
    id: 10,
    title: "Calculus: Early Transcendentals",
    author: "James Stewart",
    cover: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=600&fit=crop",
    category: "Mathematics",
    rating: 4.7,
    year: 2020,
    available: true,
    description: "The most widely used calculus textbook worldwide.",
    isbn: "978-1285741550",
    pages: 1368,
  },
  {
    id: 11,
    title: "Corporate Finance",
    author: "Stephen A. Ross",
    cover: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=400&h=600&fit=crop",
    category: "Business",
    rating: 4.4,
    year: 2022,
    available: true,
    description: "The definitive guide to corporate financial management.",
    isbn: "978-1259918940",
    pages: 1008,
  },
  {
    id: 12,
    title: "Human Anatomy",
    author: "Elaine N. Marieb",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    category: "Medicine",
    rating: 4.6,
    year: 2021,
    available: false,
    description: "Visual guide to human anatomy for medical students.",
    isbn: "978-0134243818",
    pages: 896,
  },
];

const categories = [
  "All Categories",
  "Computer Science",
  "Engineering",
  "Science",
  "Mathematics",
  "Business",
  "Arts & Humanities",
  "Medicine",
  "Law",
];

const BrowseBooks = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "All Categories");
  const [sortBy, setSortBy] = useState("title");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [selectedBook, setSelectedBook] = useState<typeof allBooks[0] | null>(null);

  const filteredBooks = useMemo(() => {
    let result = [...allBooks];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.isbn?.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== "All Categories") {
      result = result.filter((book) => book.category === selectedCategory);
    }

    // Filter by availability
    if (showAvailableOnly) {
      result = result.filter((book) => book.available);
    }

    // Sort
    switch (sortBy) {
      case "title":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "author":
        result.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => b.year - a.year);
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy, showAvailableOnly]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ search: searchQuery, category: selectedCategory });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setShowAvailableOnly(false);
    setSearchParams({});
  };

  const handleViewBook = (id: number) => {
    const book = allBooks.find((b) => b.id === id);
    if (book) setSelectedBook(book);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-8">
        <div className="container">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
              Browse <span className="text-gradient">Books</span>
            </h1>
            <p className="text-muted-foreground">
              Explore our collection of {allBooks.length.toLocaleString()}+ academic resources
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by title, author, or ISBN..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-base"
                />
              </div>
            </form>

            {/* Filters */}
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px] h-12">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[150px] h-12">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Title A-Z</SelectItem>
                  <SelectItem value="author">Author A-Z</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              {/* Mobile Filters */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="h-12 w-12 lg:hidden">
                    <SlidersHorizontal className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="py-6 space-y-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="available-mobile"
                        checked={showAvailableOnly}
                        onCheckedChange={(checked) => setShowAvailableOnly(checked as boolean)}
                      />
                      <Label htmlFor="available-mobile">Available only</Label>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              {/* View Toggle */}
              <div className="hidden lg:flex border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  className="rounded-none h-12 w-12"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-5 w-5" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  className="rounded-none h-12 w-12"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(searchQuery || selectedCategory !== "All Categories" || showAvailableOnly) && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {searchQuery && (
                <Badge variant="secondary" className="gap-1">
                  Search: {searchQuery}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => setSearchQuery("")}
                  />
                </Badge>
              )}
              {selectedCategory !== "All Categories" && (
                <Badge variant="secondary" className="gap-1">
                  {selectedCategory}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => setSelectedCategory("All Categories")}
                  />
                </Badge>
              )}
              {showAvailableOnly && (
                <Badge variant="secondary" className="gap-1">
                  Available only
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => setShowAvailableOnly(false)}
                  />
                </Badge>
              )}
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear all
              </Button>
            </div>
          )}

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredBooks.length}</span> results
            </p>
            <div className="hidden lg:flex items-center gap-2">
              <Checkbox
                id="available"
                checked={showAvailableOnly}
                onCheckedChange={(checked) => setShowAvailableOnly(checked as boolean)}
              />
              <Label htmlFor="available" className="text-sm">
                Available only
              </Label>
            </div>
          </div>

          {/* Books Grid/List */}
          {filteredBooks.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }
            >
              {filteredBooks.map((book, index) => (
                <div
                  key={book.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s`, opacity: 0, animationFillMode: "forwards" }}
                >
                  <BookCard {...book} onView={handleViewBook} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">No books found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria
              </p>
              <Button variant="outline-gold" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Book Details Modal */}
      <BookDetailsModal
        book={selectedBook}
        isOpen={!!selectedBook}
        onClose={() => setSelectedBook(null)}
      />
    </div>
  );
};

export default BrowseBooks;
