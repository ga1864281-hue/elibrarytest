import { Heart, Download, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  cover: string;
  category: string;
  rating: number;
  year: number;
  available: boolean;
  onView?: (id: number) => void;
}

const BookCard = ({ id, title, author, cover, category, rating, year, available, onView }: BookCardProps) => {
  return (
    <div className="book-card bg-card card-gradient group">
      {/* Cover Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <Button
              variant="glass"
              size="sm"
              className="flex-1"
              onClick={() => onView?.(id)}
            >
              <Eye className="h-4 w-4 mr-1" />
              View
            </Button>
            <Button variant="glass" size="icon" className="shrink-0">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Availability Badge */}
        <Badge
          className={cn(
            "absolute top-3 right-3 shadow-lg",
            available
              ? "bg-accent text-accent-foreground"
              : "bg-destructive text-destructive-foreground"
          )}
        >
          {available ? "Available" : "Borrowed"}
        </Badge>

        {/* Category Badge */}
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 bg-secondary/90 text-secondary-foreground shadow-lg"
        >
          {category}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-4 book-spine">
        <h3 className="font-serif font-semibold text-lg text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{author}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          <span className="text-xs text-muted-foreground">{year}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
