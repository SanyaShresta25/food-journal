import { Clock, Star, Users } from 'lucide-react';
import type { Recipe } from '../types/recipe';
import { useNavigate } from 'react-router-dom';

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/recipes/${recipe.id}`)}
      className="relative bg-white rounded-2xl pt-24 pb-10 px-4 shadow-lg hover:shadow-xl transition-all duration-300 w-[300px] mx-auto cursor-pointer group"
    >
   
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
        />
      </div>


      <div className="absolute top-2 right-2 bg-yellow-400 text-white font-semibold text-xs px-3 py-1 rounded-full flex items-center gap-1 z-10 shadow">
        <Star className="w-3 h-3 fill-white" />
        {recipe.rating.toFixed(1)}
      </div>

 
      <div className="flex flex-col items-center text-center mt-2">
        <h3 className="font-semibold text-gray-800 text-sm leading-tight line-clamp-2">
          {recipe.name}
        </h3>

        <div className="flex flex-col items-center text-xs text-gray-500 my-2 space-y-1">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} Mins</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>

        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
          {recipe.difficulty}
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
