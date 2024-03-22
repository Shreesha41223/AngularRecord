import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
  standalone: true
})
export class FontSizeDirective implements OnChanges {
  @Input('appFontSize') sizeF?:number;
  constructor(
    private el:ElementRef
  ) {}
   
  ngOnChanges(){
    this.el.nativeElement.style.fontSize=this.sizeF+'px';
  }

}
