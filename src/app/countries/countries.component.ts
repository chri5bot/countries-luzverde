import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/country';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  @Input()
  countries: Country[];
  constructor() {}

  ngOnInit() {}
}
