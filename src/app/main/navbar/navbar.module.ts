import { NgModule } from "../../../../node_modules/@angular/core";
import { NavbarComponent } from './navbar.component';
import { MatIconModule, MatButtonModule, MatChipsModule } from '../../../../node_modules/@angular/material';
import { FlexLayoutModule } from '../../../../node_modules/@angular/flex-layout';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';

@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule
    ],
    exports: [
        NavbarComponent,
    ]
})
export class NavbarModule { }