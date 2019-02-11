import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/country';
import { CountriesService } from '../services/countries.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input()
  country: Country;

  constructor(private dataService: CountriesService) {}

  ngOnInit() {}

  onChangeBorder(border: string) {
    this.dataService.changeCountryByAlphaCode3(border);
  }
}
