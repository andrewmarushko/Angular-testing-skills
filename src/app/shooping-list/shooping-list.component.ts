import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shoping-list.service';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.scss'],
})
export class ShoopingListComponent implements OnInit {
  ingredients: Ingredients[];

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnInit(): void {
    this.shoppingListService.ingredientAdded.subscribe(
      (ingredient: Ingredients[]) => {
        this.ingredients = ingredient;
      }
    );
  }
}
