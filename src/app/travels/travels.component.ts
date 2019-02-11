import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private dataService: CountriesService) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.countries = [];
    return this.dataService.getCountries().subscribe(data => {
      console.log(data);
      this.countries = data;
    });
  }
}
