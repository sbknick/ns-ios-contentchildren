import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ItemsRoutingModule } from "../items/items-routing.module";
import { ItemsComponent } from "../items/items.component";
import { ItemWrapperComponent } from "./item-wrapper.component";
import { ItemComponent, DisplayMeDirective } from "./item.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ItemsRoutingModule
    ],
    declarations: [
        ItemsComponent,
        ItemWrapperComponent,
        ItemComponent,
        DisplayMeDirective
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ItemsModule { }
