import { Directive , Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appMyFor]'
})

export class MyforDirective {

    @Input('appMyFor') set myFor(myList: any[]){

        this.viewContainerRef.clear();
        myList.forEach(item => {
            this.viewContainerRef.createEmbeddedView(this.templateRef, {$implicit: item});
        });
    }

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

}