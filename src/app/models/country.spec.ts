import { Country } from './country';

describe('CountryModel', () => {
  it('should create an instance', () => {
    expect(new Country()).toBeTruthy();
  });

  it('should accept values from constructor', () => {
    const country = new Country({
      name: 'Ecuador',
      population: 43590400,
      callingCodes: ['54'],
      area: 2780400.0,
      borders: ['BOL', 'BRA', 'CHL', 'PRY', 'URY'],
      flag: 'https://restcountries.eu/data/arg.svg',
      alpha3Code: 'ECU'
    });

    expect(country.name).toEqual('Ecuador');
    expect(country.population).toEqual(43590400);
    expect(country.callingCodes).toEqual(['54']);
    expect(country.area).toEqual(2780400.0);
    expect(country.borders).toEqual(['BOL', 'BRA', 'CHL', 'PRY', 'URY']);
    expect(country.flag).toEqual('https://restcountries.eu/data/arg.svg');
    expect(country.alpha3Code).toEqual('ECU');
  });
});
