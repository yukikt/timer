import { NgModule } from "../../../../node_modules/@angular/core";
import { SidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        SidebarComponent,
    ],
    exports: [
        SidebarComponent,
    ]
})
export class SidebarModule { }