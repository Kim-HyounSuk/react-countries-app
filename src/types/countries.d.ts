export interface ICountryFormValue {
  country: string;
}

export interface ICountry {
  id: number;
  name: string;
  category: Category;
}

export interface ICountriesProps {
  category: Category;
}

export type Category = 'WISH' | 'LIKE' | 'EXPERIENCE';
