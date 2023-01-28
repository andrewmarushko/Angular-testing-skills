import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropDownDirective {
  @HostBinding('attr.data-toggle') isOpen: string = '';

  @HostListener('click') toogleOpen() {
    this.isOpen = 'dropdown';
  }
}
