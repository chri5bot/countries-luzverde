import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { TravelsComponent } from './travels.component';
import { CountriesComponent } from '../countries/countries.component';
import { CountryComponent } from '../country/country.component';
import { CountriesService } from '../services/countries.service';
import { Observable, of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

describe('TravelsComponent', () => {
  let component: TravelsComponent;
  let fixture: ComponentFixture<TravelsComponent>;
  let countriesService: any;
  let countriesServiceStub: any;

  beforeEach(async(() => {
    countriesServiceStub = {
      getCountries: () => []
    };

    TestBed.configureTestingModule({
      declarations: [TravelsComponent, CountriesComponent, CountryComponent],
      //   schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: CountriesService,
          useValue: countriesServiceStub
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsComponent);
    component = fixture.componentInstance;
    countriesService = TestBed.get(CountriesService);
    fixture.detectChanges();
  });

  //   it('should create', () => {
  //     expect(component).toBeTruthy();
  //   });
});
