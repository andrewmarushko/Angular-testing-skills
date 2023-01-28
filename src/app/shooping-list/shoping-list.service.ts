import { EventEmitter } from '@angular/core';
import { Ingredients } from './../shared/ingredients.model';

export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('Apple', 20),
    new Ingredients('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredients) {
    this.ingredients.push(ingredients);

    this.ingredientAdded.emit(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredients[]) {
    this.ingredients.push(...ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
  }
}
