import { Directive,  ElementRef, Renderer2, Input ,OnInit} from '@angular/core';
@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective implements OnInit {
@Input() rate = 0 ;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
    
  }

  ngOnInit(){
   if (this.rate > 5) {
   this.elRef.nativeElement.style.color = 'green';
   } else{
    this.elRef.nativeElement.style.color = 'red';
   }
  }

 

}
