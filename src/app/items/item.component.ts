import { Component, Input, Directive, TemplateRef } from "@angular/core";

@Directive({ selector: "[display-me]" })
export class DisplayMeDirective {
    constructor(private template: TemplateRef<any>) {}
}

@Component({
    selector: "item",
    template: `<Label [text]="text"></Label>`
})
export class ItemComponent {
    @Input() text: string;
}
