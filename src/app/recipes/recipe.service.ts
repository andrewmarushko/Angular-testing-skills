import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shooping-list/shoping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg',
      [new Ingredients('Meal', 20), new Ingredients('French', 1)]
    ),
    new Recipe(
      'A Test1 Recipe',
      'This is simply a test',
      'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg',
      [new Ingredients('Bred', 2), new Ingredients('French', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }

  addRecipeToShoppingList(ingredients: Ingredients[]) {
    this.shoppingListService.addIngredient(ingredients);
  }
}
