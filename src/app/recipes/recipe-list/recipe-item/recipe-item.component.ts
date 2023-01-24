import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {
    this.recipe = new Recipe('', '', '');
  }

  onSelected() {
    this.recipeSelected.emit();
  }

  ngOnInit(): void {}
}
