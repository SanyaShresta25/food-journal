import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Recipe } from '../types/recipe';
import type { RecipeResponse } from '../types/reciperesponse';
import ErrorMessage from './ErrorMessage';
import LemonBackground from './LemonBackground';
import LoadingSpinner from './LoadingSpinner';
import RecipeGrid from './RecipeGrid';
import SearchBar from './SearchBar';

const RecipesPage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/recipes?limit=100');
        if (!response.ok) throw new Error('Failed to fetch recipes');
        const data: RecipeResponse = await response.json();
        setRecipes(data.recipes);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <LemonBackground>
      <div className="px-4 sm:px-6 lg:px-12 py-6 sm:py-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10 animate-in fade-in slide-in-from-top duration-700">
          <Link
            to="/"
            className="text-white hover:text-gray-200 mb-3 text-sm sm:text-base underline block font-poppins"
          >
            ← Back to Home
          </Link>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-poppins drop-shadow-md">
            Discover Recipes
          </h1>
          <p className="text-white opacity-90 font-poppins text-base sm:text-lg md:text-xl mt-1 sm:mt-2 drop-shadow-md">
            Find your perfect meal
          </p>
        </div>

        {/* Search Bar */}
        <div className="animate-in zoom-in-95 duration-700 delay-200 mb-6 w-full max-w-xl mx-auto px-2 sm:px-4">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        {/* Recipes Section */}
        {filteredRecipes.length > 0 ? (
          
           <div className="mt-16 flex justify-center animate-in fade-in-up duration-700 delay-300">
 
    <RecipeGrid recipes={filteredRecipes} title="" />
  
</div>

        ) : (
          <div className="text-center text-white text-base sm:text-lg mt-8 font-poppins animate-in fade-in duration-700 delay-200">
            No recipes found matching your search.
          </div>
        )}
      </div>
    </LemonBackground>
  );
};

export default RecipesPage;
