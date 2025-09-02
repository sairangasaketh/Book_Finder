import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import BookCard from "@/components/BookCard";
import LoadingSpinner from "@/components/LoadingSpinner";

// Interface to define the structure of book data from the API
interface Book {
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  key: string;
}

// Interface for the API response structure
interface SearchResponse {
  docs: Book[];
  numFound: number;
}

const Index = () => {
  // State to store the list of books from search results
  const [books, setBooks] = useState<Book[]>([]);
  // State to track if we're currently loading results
  const [loading, setLoading] = useState(false);
  // State to track if we've done a search and found no results
  const [noResults, setNoResults] = useState(false);
  // State to store any error messages
  const [error, setError] = useState("");

  // Function to search for books using the Open Library API
  const searchBooks = async (searchTerm: string) => {
    setLoading(true); // Start loading
    setError(""); // Clear any previous errors
    setNoResults(false); // Reset no results state
    
    try {
      // Make API call to Open Library
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(searchTerm)}&limit=12`
      );
      
      // Check if the API call was successful
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      
      // Convert the response to JSON
      const data: SearchResponse = await response.json();
      
      // Update our state with the results
      setBooks(data.docs);
      setNoResults(data.docs.length === 0); // Set no results if we got no books
      
    } catch (err) {
      // Handle any errors that occurred during the search
      setError("Something went wrong while searching. Please try again.");
      setBooks([]);
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <div className="min-h-screen bg-warm-gradient">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            📚 Book Finder
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Search for any book by title and discover new reads
          </p>
          
          {/* Search Bar */}
          <div className="flex justify-center">
            <SearchBar onSearch={searchBooks} loading={loading} />
          </div>
        </div>

        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* Error Message */}
        {error && (
          <div className="text-center py-8">
            <p className="text-destructive text-lg">{error}</p>
          </div>
        )}

        {/* No Results Message */}
        {noResults && !loading && !error && (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-lg">
              No books found. Try searching for a different title.
            </p>
          </div>
        )}

        {/* Results Grid */}
        {books.length > 0 && !loading && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Search Results ({books.length} books)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {books.map((book) => (
                <BookCard key={book.key} book={book} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
