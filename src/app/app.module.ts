import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelsComponent } from './travels/travels.component';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
  declarations: [AppComponent, TravelsComponent],
  imports: [BrowserModule, AppRoutingModule, CountriesComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
