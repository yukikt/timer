import { NgModule } from "@angular/core";
import { MainComponent } from './main.component';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { ContentModule } from './content/content.module';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';

@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        BrowserModule,
        NavbarModule,
        SidebarModule,
        FooterModule,
        ContentModule,
    ],
    exports: [
        MainComponent,
    ]
})
export class MainModule { }