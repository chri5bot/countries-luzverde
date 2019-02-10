import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';

import { CountriesService } from './countries.service';
import { Country } from '../models/country';

describe('Countries API service', () => {
  let injector: TestBed;
  let service: CountriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [CountriesService]
    });
    injector = getTestBed();
    service = injector.get(CountriesService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#getCountries', () => {
    it('should return an Observable<Country[]>', () => {
      const dummyCountries: Country[] = [
        new Country('Ecuador'),
        new Country('Mexico')
      ];
      service.getCountries().subscribe(countries => {
        expect(countries.length).toBe(2);
        expect(countries).toEqual(dummyCountries);
      });
      const req = httpMock.expectOne(
        'https://restcountries.eu/rest/v2/regionalbloc/usan'
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyCountries);
    });
  });
});
