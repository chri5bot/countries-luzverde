import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelsComponent } from './travels/travels.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CountriesService } from './services/countries.service';

@NgModule({
  declarations: [
    AppComponent,
    TravelsComponent,
    CountryComponent,
    CountriesComponent,
    NavigationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
