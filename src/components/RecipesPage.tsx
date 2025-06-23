import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import RecipeGrid from './RecipeGrid';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import type { Recipe } from '../types/recipe';
import type { RecipeResponse } from '../types/reciperesponse';
import LemonBackground from './LemonBackground';

const RecipesPage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/recipes');
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
      <div className="px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-top duration-700">
          <Link
            to="/"
            className="text-white hover:text-gray-200 mb-4 text-sm underline block font-agbalumo"
          >
            ← Back to Home
          </Link>
          <h1 className="text-white text-4xl font-bold mb-2 font-denk">
            Discover Recipes
          </h1>
          <p className="text-white opacity-90 font-denk text-lg">
            Find your perfect meal
          </p>
        </div>

        {/* Search Bar with animation */}
        <div className="animate-in zoom-in-95 duration-700 delay-200">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="mt-16 flex justify-center animate-in fade-in-up duration-700 delay-300">
            <div className="w-full max-w-7xl">
              <h2 className="text-white text-4xl font-denk text-center  mb-30">
                All Recipes
              </h2>
              <RecipeGrid recipes={filteredRecipes} title="" />
            </div>
          </div>
        ) : (
          <div className="text-center text-white text-lg mt-8 font-denk animate-in fade-in duration-700 delay-200">
            No recipes found matching your search.
          </div>
        )}
      </div>
    </LemonBackground>
  );
};

export default RecipesPage;
