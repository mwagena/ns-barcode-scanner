import { ItemsComponent } from "./item/items.component";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
