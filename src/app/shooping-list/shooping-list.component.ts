import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.scss'],
})
export class ShoopingListComponent {
  ingredients: Ingredients[] = [
    new Ingredients('Apple', 20),
    new Ingredients('Tomatoes', 10),
  ];
  testUnless: boolean = false;
  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }
}
