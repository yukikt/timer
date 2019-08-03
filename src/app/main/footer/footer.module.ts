import { NgModule } from "../../../../node_modules/@angular/core";
import { FooterComponent } from './footer.component';

@NgModule({
    declarations: [
        FooterComponent,
    ],
    exports: [
        FooterComponent,
    ]
})
export class FooterModule {}