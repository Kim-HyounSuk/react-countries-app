import { COUNTRIES_CATEGORY } from '@/constants';

export interface ICountryFormValue {
  country: string;
}

export interface ICountry {
  id: number;
  name: string;
  category: keyof typeof COUNTRIES_CATEGORY;
}
