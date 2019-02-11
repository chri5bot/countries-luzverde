import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CountryComponent } from './country.component';
import { Country } from '../models/country';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;
  let testCountry: Country;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;

    testCountry = new Country({
      name: 'Ecuador'
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
});
