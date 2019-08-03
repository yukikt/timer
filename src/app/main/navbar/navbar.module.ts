import { NgModule } from "../../../../node_modules/@angular/core";
import { NavbarComponent } from './navbar.component';

@NgModule({
    declarations: [
        NavbarComponent,
    ],
    exports: [
        NavbarComponent,
    ]
})
export class NavbarModule { }