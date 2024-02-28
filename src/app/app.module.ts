import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NavbarComponent } from './main-content/main-page/navbar/navbar.component';
import { MainPageComponent } from './main-content/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    OurMenuComponent,
    HowToOrderComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    MainContentComponent,
    NavbarComponent,
    MainPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
