import RecipeCard from './RecipeCard';
import type { Recipe } from '../types/recipe';

const RecipeGrid: React.FC<{ recipes: Recipe[]; title: string }> = ({ recipes, title }) => (
  <div className="mb-8 mt-12 text-center">
    <h2 className="text-white text-3xl font-agbalumo mb-12">{title}</h2>
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-28">

      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  </div>
);

export default RecipeGrid;
