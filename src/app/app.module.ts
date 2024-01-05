import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { landingPageComponent } from './landingPage/landingPage.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, landingPageComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
