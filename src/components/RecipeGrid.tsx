// RecipeGrid.tsx
import RecipeCard from './RecipeCard';
import type { Recipe } from '../types/recipe';

const RecipeGrid: React.FC<{ recipes: Recipe[]; title?: string }> = ({ recipes }) => {
  return (
   <div className="pt-16 mb-8 text-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {recipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} />
    ))}
  </div>
</div>
  );
};

export default RecipeGrid;
