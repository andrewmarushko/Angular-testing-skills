import {
  Component,
  ElementRef,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shooping-edit',
  templateUrl: './shooping-edit.component.html',
  styleUrls: ['./shooping-edit.component.scss'],
})
export class ShoopingEditComponent {
  @ViewChild('nameInput', { static: false })
  nameInputRef: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('amountInput', { static: false })
  amountInputRef: ElementRef<HTMLInputElement> = {} as ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredients>();

  constructor() {}

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(
      ingredientName,
      Number(ingredientAmount)
    );

    this.ingredientAdded.emit(newIngredient);
  }
}
