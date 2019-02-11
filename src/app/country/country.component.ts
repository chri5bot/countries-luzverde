import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/country';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input()
  country: Country;

  constructor() {}

  ngOnInit() {}
}
