// SearchBar.tsx
import { Search } from 'lucide-react';

const SearchBar: React.FC<{
  searchTerm: string;
  onSearchChange: (term: string) => void;
}> = ({ searchTerm, onSearchChange }) => (
  <div className="w-full max-w-xl mx-auto px-2 sm:px-4 mb-6">
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search recipe"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-white text-sm sm:text-base shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
      />
    </div>
  </div>
);

export default SearchBar;
