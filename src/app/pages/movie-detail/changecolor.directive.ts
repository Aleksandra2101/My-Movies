import { Directive,  ElementRef, Renderer2, Input } from '@angular/core';
@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {
@Input() color ='';
  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
    elRef.nativeElement.style.color = this.color;
  }


 

}
