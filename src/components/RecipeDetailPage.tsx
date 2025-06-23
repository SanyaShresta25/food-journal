// src/components/RecipeDetailPage.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Recipe } from '../types/recipe';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then(res => res.json())
      .then(setRecipe)
      .finally(() => setLoading(false));
  }, [id]);

  const handleBackClick = () => navigate(-1);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
        <div className="text-center animate-pulse">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-rose-200 border-t-rose-500 mx-auto mb-4"></div>
          <p className="text-2xl text-rose-600 font-light">Loading culinary magic...</p>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
        <p className="text-2xl text-rose-600 font-light">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 font-inter">
      {/* Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-rose-200 rounded-full animate-[float_6s_ease-in-out_infinite] opacity-20" />
        <div className="absolute top-60 right-6 sm:right-20 w-20 h-20 sm:w-24 sm:h-24 bg-pink-200 rounded-full animate-[float_8s_ease-in-out_infinite] opacity-30 delay-200" />
        <div className="absolute bottom-40 left-10 sm:left-20 w-32 h-32 sm:w-40 sm:h-40 bg-amber-200 rounded-full animate-[floatSlow_10s_ease-in-out_infinite] opacity-15 delay-100" />
        <div className="absolute top-1/2 right-6 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-rose-300 rounded-full animate-[float_6s_ease-in-out_infinite] opacity-25" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <button
          onClick={handleBackClick}
          className="group mb-6 sm:mb-8 flex items-center space-x-2 text-rose-600 hover:text-rose-700 transition duration-300 transform hover:scale-105 hover:translate-x-1"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-base sm:text-lg font-light tracking-wide font-playfair">Back to Recipes</span>
        </button>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/60 animate-[fadeInUp_0.8s_ease-out]">
          <div className="p-6 sm:p-8 pb-4 sm:pb-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-thin text-rose-800 mb-3 sm:mb-4 tracking-wide leading-tight font-playfair animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
              {recipe.name}
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300 rounded-full animate-[scaleX_1s_ease-out_0.8s_forwards] origin-left" />
          </div>

          {/* Image */}
          <div className="px-6 sm:px-8 mb-6 sm:mb-8">
            <div className="overflow-hidden rounded-2xl shadow-2xl group transition-all">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-60 sm:h-80 md:h-96 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="px-6 sm:px-8 mb-6 sm:mb-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Prep Minutes', value: recipe.prepTimeMinutes },
              { label: 'Cook Minutes', value: recipe.cookTimeMinutes },
              { label: 'Servings', value: recipe.servings },
              { label: 'Difficulty', value: recipe.difficulty },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center transition transform hover:-translate-y-2 hover:scale-105 animate-[fadeInUp_0.6s_ease-out] delay-[200ms]"
              >
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-4 sm:p-6 shadow-lg border border-rose-200/50">
                  <div className="text-lg sm:text-2xl md:text-3xl font-light text-rose-700 mb-1 sm:mb-2 font-playfair capitalize">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-light text-rose-600 tracking-widest uppercase">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="px-6 sm:px-8 pb-10 sm:pb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin text-rose-800 mb-6 tracking-wide flex items-center font-playfair">
              <span className="mr-4 sm:mr-6">Instructions</span>
              <div className="flex-1 h-px bg-gradient-to-r from-rose-300 via-pink-300 to-transparent rounded-full" />
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {recipe.instructions.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/60 rounded-2xl backdrop-blur-sm hover:bg-white/80 transition-all transform hover:translate-x-2 hover:shadow-lg border border-white/40"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-rose-400 via-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white font-light text-sm shadow-lg">
                    {i + 1}
                  </div>
                  <p className="text-rose-700 font-light tracking-wide text-sm sm:text-base leading-relaxed flex-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
