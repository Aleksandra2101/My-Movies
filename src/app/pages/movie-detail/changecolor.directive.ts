import { Directive ,OnInit,ElementRef,Renderer2} from '@angular/core';
@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(private elRef:ElementRef,private renderer:Renderer2) {}
 
    
  ngOnInit() {
       
      this.renderer.setStyle(this.elRef.nativeElement, 'color' , 'green')
     
  }

}
