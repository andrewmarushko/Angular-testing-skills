import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {
    this.recipe = new Recipe('', '', '', []);
  }

  addToTheShoppingList() {
    this.recipeService.addRecipeToShoppingList(this.recipe.ingredients);
  }
}
