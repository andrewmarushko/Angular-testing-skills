import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shooping-edit',
  templateUrl: './shooping-edit.component.html',
  styleUrls: ['./shooping-edit.component.scss'],
})
export class ShoopingEditComponent {
  @ViewChild('nameInput', { static: false })
  nameInputRef: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef<HTMLInputElement> =
    {} as ElementRef;

  constructor() {}

  onAddItem() {}
}
