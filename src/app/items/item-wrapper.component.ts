import { Component, ContentChildren, QueryList, TemplateRef } from "@angular/core";
import { DisplayMeDirective } from "./item.component";

@Component({
    selector: "item-wrapper",
    template: `
    <StackLayout>
        <Label text="I am an Item wrapper"></Label>

        <ng-container *ngFor="let item of itemTemplatesToDisplay">
            <ng-template [ngTemplateOutlet]="item"></ng-template>
        </ng-container>
        
        <ng-container *ngFor="let item of itemsToDisplay">
            <ng-template [ngTemplateOutlet]="item.template"></ng-template>
        </ng-container>
    <StackLayout>
    `
})
export class ItemWrapperComponent {
    @ContentChildren(DisplayMeDirective, { read: TemplateRef }) itemTemplatesToDisplay: QueryList<TemplateRef<any>>;
    @ContentChildren(DisplayMeDirective) itemsToDisplay: QueryList<DisplayMeDirective>;
}
