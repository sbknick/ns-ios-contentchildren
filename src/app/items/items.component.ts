import { Component } from "@angular/core";

@Component({
    selector: "Items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent {
    items = [ "Item 1", "Item 2", "Item 3" ];
}
