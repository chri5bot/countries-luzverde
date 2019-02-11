import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CountriesComponent } from './countries.component';
import { Country } from '../models/country';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;

    const testCountry1 = new Country({
      name: 'Ecuador'
    });

    const testCountry2 = new Country({
      name: 'Mexico'
    });

    component.countries = [testCountry1, testCountry2];

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should create all countries', () => {
    const de: DebugElement = fixture.debugElement.query(By.css('.cards'));
    const el = de.nativeElement;

    expect(component.countries.length).toEqual(2);
    expect(el.children.length).toEqual(2);
  });
});
