import { Subject } from 'rxjs';
import { Ingredients } from './../shared/ingredients.model';

export class ShoppingListService {
  ingredientAdded = new Subject<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('Apple', 20),
    new Ingredients('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredients) {
    this.ingredients.push(ingredients);

    this.ingredientAdded.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredients[]) {
    this.ingredients.push(...ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
