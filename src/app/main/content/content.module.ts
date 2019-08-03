import { NgModule } from "../../../../node_modules/@angular/core";
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
    declarations: [
        ContentComponent,
    ],
    imports: [
        ContentRoutingModule,
    ],
    exports: [
        ContentComponent,
    ]
})
export class ContentModule { }