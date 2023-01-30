import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shoping-list.service';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.scss'],
})
export class ShoopingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  private ingredientSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnInit(): void {
    this.ingredientSubscription =
      this.shoppingListService.ingredientAdded.subscribe(
        (ingredient: Ingredients[]) => {
          this.ingredients = ingredient;
        }
      );
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.ingredientSubscription.unsubscribe();
  }
}
