import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CountryComponent } from './country.component';
import { Country } from '../models/country';
import { CountriesService } from '../services/countries.service';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;
  let testCountry: Country;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryComponent],

      providers: [
        {
          provide: CountriesService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;

    testCountry = new Country({
      name: 'Ecuador',
      population: 43590400,
      callingCodes: ['54'],
      area: 2780400.0,
      borders: ['BOL', 'BRA', 'CHL', 'PRY', 'URY']
    });

    component.country = testCountry;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should show name in country component', () => {
    const de: DebugElement = fixture.debugElement.query(
      By.css('.country>.name')
    );
    const el = de.nativeElement;
    expect(el.textContent).toContain(testCountry.name);
  });

  it('should show population in country component', () => {
    const de: DebugElement = fixture.debugElement.query(
      By.css('.card-body>.population')
    );
    const el = de.nativeElement;
    expect(el.textContent).toContain(testCountry.population);
  });

  it('should show callingCodes in country component', () => {
    const de: DebugElement = fixture.debugElement.query(
      By.css('.card-body>.callingCodes')
    );
    const el = de.nativeElement;
    expect(el.textContent).toContain(testCountry.callingCodes);
  });

  it('should show area in country component', () => {
    const de: DebugElement = fixture.debugElement.query(
      By.css('.card-body>.area')
    );
    const el = de.nativeElement;
    expect(el.textContent).toContain(testCountry.area);
  });
});
