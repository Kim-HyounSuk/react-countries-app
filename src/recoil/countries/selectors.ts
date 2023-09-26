import { selector } from 'recoil';
import { countriesState } from './atoms';
import { ICountry } from '@/types';

export const countriesSelector = (category: string) =>
  selector<ICountry[]>({
    key: `${category}CountriesSelector`,
    get: ({ get }) => {
      const countries = get(countriesState);
      return countries.filter((country) => country.category === category);
    },
  });