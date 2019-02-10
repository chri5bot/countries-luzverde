export class Country {
  name: string;

  constructor(values = {}) {
    Object.assign(this, values);
  }
}
