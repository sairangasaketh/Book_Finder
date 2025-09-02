import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Props interface - what this component expects to receive
interface SearchBarProps {
  onSearch: (searchTerm: string) => void; // Function to call when user searches
  loading: boolean; // Whether the search is currently loading
}

// SearchBar component - handles the search input and button
const SearchBar = ({ onSearch, loading }: SearchBarProps) => {
  // State to track what the user has typed in the search box
  const [searchTerm, setSearchTerm] = useState("");

  // Function that runs when the form is submitted
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    if (searchTerm.trim()) { // Only search if there's actual text
      onSearch(searchTerm.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      {/* Search input field */}
      <Input
        type="text"
        placeholder="Search for a book title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 bg-background border-border"
        disabled={loading}
      />
      
      {/* Search button */}
      <Button 
        type="submit" 
        disabled={loading || !searchTerm.trim()}
        className="bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        <Search className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default SearchBar;