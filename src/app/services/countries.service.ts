import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../models/country';

@Injectable()
export class CountriesService {
  private countriesUrl = 'https://restcountries.eu/rest/v2/regionalbloc/usan';

  private countrySource = new BehaviorSubject(new Country());
  currentCountry = this.countrySource.asObservable();

  private countries: Country[];

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl).pipe(
      tap(countries => (this.countries = countries)),
      catchError(this.handleError('getCountries', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('CountriesService: ' + message);
  }

  changeCountry(country: Country) {
    this.countrySource.next(country);
  }

  changeCountryByAlphaCode3(border: string) {
    const currentCountry = this.countries
      .filter(country => country.alpha3Code === border)
      .pop();

    this.changeCountry(currentCountry);
  }
}
