export class Country {
  name: string;
  population: number;
  callingCodes: string[];
  area: number;
  borders: string[];
  flag: string;

  constructor(values = {}) {
    Object.assign(this, values);
  }
}
