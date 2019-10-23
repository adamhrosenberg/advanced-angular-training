import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective {

  @HostBinding('style.backgroundColor')
  backgroundColor;

  @HostListener('mouseover')
  onMouseOver() {
    this.backgroundColor = '#F5F5F5'
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = '';
  }

  constructor() { }

}
