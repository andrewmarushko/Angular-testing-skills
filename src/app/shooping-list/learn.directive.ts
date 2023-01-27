import {
  Directive,
  HostListener,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHightlightDirective implements OnInit {
  @Input() defaultColor: string = 'green';
  @Input() highlightColor: string = 'wthite';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string = 'blacl';

  constructor() {
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
    this.color = 'black';
  }
}
