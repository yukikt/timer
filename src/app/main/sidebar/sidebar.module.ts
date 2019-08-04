import { NgModule } from "../../../../node_modules/@angular/core";
import { SidebarComponent } from './sidebar.component';
import { MatIconModule, MatButtonModule, MatRadioModule, MatSliderModule, MatSlideToggle, MatSlideToggleModule } from '../../../../node_modules/@angular/material';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { FlexLayoutModule } from '../../../../node_modules/@angular/flex-layout';

@NgModule({
    declarations: [
        SidebarComponent,
    ],
    imports: [
        RouterModule,

        FlexLayoutModule,

        MatIconModule,
        MatButtonModule,
        MatRadioModule,
        MatSlideToggleModule,

    ],
    exports: [
        SidebarComponent,
    ]
})
export class SidebarModule { }