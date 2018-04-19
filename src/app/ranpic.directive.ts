import { Directive, 
			ElementRef,
			HostListener, 
			Input } from '@angular/core';

@Directive({
  selector: '[appRanpic]',
})

export class RanpicDirective {
	constructor(private el: ElementRef) { 
		this.ChangeText("Initial");
	}

	ngAfterContentInit() {
	}

	@Input('appRanpic') poster: string;

	@HostListener('click') onMouseEnter() {
    	this.ChangeText(this.poster);
  	}

  	private ChangeText( tVal :string ){
  		this.el.nativeElement.innerHTML="<b>" +  tVal " </b>"
  	}
}
