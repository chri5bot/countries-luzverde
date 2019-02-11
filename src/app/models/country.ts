export class Country {
  name: string;
  population: number;
  callingCodes: string[];
  area: number;
  borders: string[];
  flag: string;
  alpha3Code: string;

  constructor(values = {}) {
    Object.assign(this, values);
  }
}
