import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective {
  @Input('appHighlightColor') color:string;

  @HostBinding('style.backgroundColor')
  backgroundColor;

  @HostListener('mouseover')
  onMouseOver() {
    this.backgroundColor = this.color;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = '';
  }

  constructor() { }

}
