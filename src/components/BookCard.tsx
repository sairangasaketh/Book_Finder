import { Card, CardContent } from "@/components/ui/card";

// Interface to define what data each book should have
interface Book {
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  key: string;
}

// Props interface - what data this component expects to receive
interface BookCardProps {
  book: Book;
}

// BookCard component - displays a single book's information
const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card className="shadow-book hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-card border border-border">
      <CardContent className="p-6">
        {/* Book Title */}
        <h3 className="text-lg font-semibold text-card-foreground mb-2 line-clamp-2">
          {book.title}
        </h3>
        
        {/* Author Name */}
        <p className="text-muted-foreground mb-2">
          By: {book.author_name ? book.author_name[0] : "Unknown Author"}
        </p>
        
        {/* Publication Year */}
        <p className="text-sm text-muted-foreground">
          First Published: {book.first_publish_year || "Unknown"}
        </p>
      </CardContent>
    </Card>
  );
};

export default BookCard;