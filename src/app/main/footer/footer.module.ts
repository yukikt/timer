import { NgModule } from "../../../../node_modules/@angular/core";
import { FooterComponent } from './footer.component';
import { MatIconModule, MatButtonModule } from '../../../../node_modules/@angular/material';
import { FlexLayoutModule } from '../../../../node_modules/@angular/flex-layout';

@NgModule({
    declarations: [
        FooterComponent,
    ],
    imports: [
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports: [
        FooterComponent,
    ]
})
export class FooterModule {}