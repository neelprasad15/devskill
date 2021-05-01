import { Directive, ElementRef, HostBinding,  HostListener,  Renderer2 } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {

  constructor(public el: ElementRef, public renderer : Renderer2) {
   }
  isHovering:boolean;
  isClicked : boolean;
  
//   @HostListener('mouseover') onMouseEnter(){ 
//     this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "gray"); 
//     this.isHovering = true; 
//   } 
//   @HostListener('mouseout') onMouseLeave(){ 
//     this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "white"); 
//      this.isHovering = false;
// }
@HostListener('click') onMouseClick(){ 
  
  this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "red"); 
  
   //this.isHovering = false;

}
}
