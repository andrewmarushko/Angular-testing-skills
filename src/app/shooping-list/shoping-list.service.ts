import { Subject } from 'rxjs';
import { Ingredients } from './../shared/ingredients.model';

export class ShoppingListService {
  ingredientAdded = new Subject<Ingredients[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredients[] = [
    new Ingredients('Apple', 20),
    new Ingredients('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredientByIndex(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredients) {
    this.ingredients[index] = newIngredient;
    this.ingredientAdded.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredients) {
    this.ingredients.push(ingredients);

    this.ingredientAdded.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredients[]) {
    this.ingredients.push(...ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
