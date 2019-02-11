import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  country: Country = new Country();
  countries: Country[];
  choosenCountries: string[];
  area = 0;

  constructor(private dataService: CountriesService) {}

  ngOnInit() {
    this.getCountries();
    this.getCurrentCountry();
    this.getChoosenCountries();
    this.getArea();
  }

  getCountries() {
    this.countries = [];
    return this.dataService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  getCurrentCountry() {
    this.dataService.currentCountry.subscribe(
      country => (this.country = country)
    );
  }

  getChoosenCountries() {
    this.choosenCountries = this.dataService.choosenCountries;
  }

  getArea() {
    this.dataService.area.subscribe(area => (this.area += area));
  }
}
