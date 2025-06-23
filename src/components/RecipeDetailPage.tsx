import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Recipe } from '../types/recipe';
import { useNavigate } from 'react-router-dom';
const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then(res => res.json())
      .then(setRecipe)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-8 text-center text-xl">Loading...</div>;
  if (!recipe) return <div className="p-8 text-center text-red-500">Recipe not found</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-4">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="rounded-xl mb-6" />
      <p className="mb-2"><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
      <p className="mb-2"><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
      <p className="mb-2"><strong>Servings:</strong> {recipe.servings}</p>
      <p className="mb-4"><strong>Difficulty:</strong> {recipe.difficulty}</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Instructions</h2>
      <ul className="list-disc list-inside space-y-2">
        {recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}
      </ul>
       <button
      onClick={() => navigate(-1)}
      className="mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
    >
      ← Back to Recipes
    </button>
    </div>
  );
};

export default RecipeDetailPage;
