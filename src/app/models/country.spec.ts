import { Country } from './country';

describe('CountryModel', () => {
  it('should create an instance', () => {
    expect(new Country()).toBeTruthy();
  });

  it('should accept values from constructor', () => {
    const country = new Country({
      name: 'Ecuador'
    });

    expect(country.name).toEqual('Ecuador');
  });
});
