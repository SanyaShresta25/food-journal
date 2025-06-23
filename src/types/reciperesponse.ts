import type { Recipe } from '../types/recipe'; // adjust path as needed
 // adjust path as needed

export interface RecipeResponse {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}
