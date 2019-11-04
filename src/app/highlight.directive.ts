import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
 
  constructor(private el : ElementRef) { }
  @Input() defaultColor: string;
  @Input('appHighlight')highlightColor:string; 
  @HostListener('mouseenter')onMouseEnter(){
    this.highlightcolor(this.highlightColor || this.defaultColor || 'pink');
  }
  @HostListener('mouseleave')onMouseLeave(){
    this.highlightcolor(null);
  }
  private highlightcolor(color : String)
  {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

