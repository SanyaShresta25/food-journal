
// CategoryFilter.tsx
const CategoryFilter: React.FC<{ 
  categories: string[]; 
  selectedCategory: string; 
  onCategoryChange: (category: string) => void;
}> = ({ categories, selectedCategory, onCategoryChange }) => (
  <div className="flex gap-2 justify-center mb-8 flex-wrap">
    <div className="bg-green-500 p-1 rounded-lg">
      <div className="grid grid-cols-2 gap-1">
        <div className="w-2 h-2 bg-white rounded-sm"></div>
        <div className="w-2 h-2 bg-white rounded-sm"></div>
        <div className="w-2 h-2 bg-white rounded-sm"></div>
        <div className="w-2 h-2 bg-white rounded-sm"></div>
      </div>
    </div>
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onCategoryChange(category)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          selectedCategory === category
            ? 'bg-green-500 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        {category}
      </button>
    ))}
  </div>
);

export default CategoryFilter;