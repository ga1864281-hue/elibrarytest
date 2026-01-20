import { X, Heart, Download, BookOpen, Star, Calendar, Hash, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface BookDetailsModalProps {
  book: {
    id: number;
    title: string;
    author: string;
    cover: string;
    category: string;
    rating: number;
    year: number;
    available: boolean;
    description?: string;
    isbn?: string;
    pages?: number;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookDetailsModal = ({ book, isOpen, onClose }: BookDetailsModalProps) => {
  if (!book) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <DialogTitle className="sr-only">{book.title} - Book Details</DialogTitle>
        <div className="flex flex-col md:flex-row">
          {/* Book Cover */}
          <div className="relative w-full md:w-2/5 aspect-[3/4] md:aspect-auto">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent md:hidden" />
          </div>

          {/* Book Details */}
          <div className="flex-1 p-6 md:p-8">
            <div className="flex items-start justify-between mb-4">
              <Badge
                className={cn(
                  book.available
                    ? "bg-accent text-accent-foreground"
                    : "bg-destructive text-destructive-foreground"
                )}
              >
                {book.available ? "Available" : "Currently Borrowed"}
              </Badge>
              <Button variant="ghost" size="icon" onClick={onClose} className="md:hidden">
                <X className="h-5 w-5" />
              </Button>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
              {book.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-4">by {book.author}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < Math.floor(book.rating)
                        ? "fill-secondary text-secondary"
                        : "text-muted"
                    )}
                  />
                ))}
              </div>
              <span className="font-semibold">{book.rating}</span>
              <span className="text-muted-foreground">(124 reviews)</span>
            </div>

            {/* Description */}
            <p className="text-foreground/80 mb-6 leading-relaxed">
              {book.description || "A comprehensive academic resource for students and researchers."}
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Calendar className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-xs text-muted-foreground">Published</p>
                  <p className="font-medium">{book.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Hash className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-xs text-muted-foreground">ISBN</p>
                  <p className="font-medium text-sm">{book.isbn || "978-0000000000"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <FileText className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-xs text-muted-foreground">Pages</p>
                  <p className="font-medium">{book.pages || 500}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <BookOpen className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-xs text-muted-foreground">Category</p>
                  <p className="font-medium">{book.category}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              {book.available ? (
                <>
                  <Button variant="hero" size="lg" className="flex-1">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Borrow Now
                  </Button>
                  <Button variant="outline-gold" size="lg">
                    <Download className="h-5 w-5 mr-2" />
                    Download PDF
                  </Button>
                </>
              ) : (
                <Button variant="outline" size="lg" className="flex-1" disabled>
                  Join Waitlist
                </Button>
              )}
              <Button variant="ghost" size="icon" className="shrink-0">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookDetailsModal;
