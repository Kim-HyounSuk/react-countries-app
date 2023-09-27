import { selector } from 'recoil';
import { countriesState } from './atoms';
import { ICountry } from '@/types';
import { Categories } from '@/constants/countries';

export const categorySelector = (category: string) => {
  if (category === String(Categories.WISH)) return wishCountriesSelector;
  else if (category === String(Categories.EXPERIENCE)) return experienceCountriesSelector;
  else return likeCountriesSelector;
};

export const wishCountriesSelector = selector<ICountry[]>({
  key: 'wishCountriesSelector',
  get: ({ get }) => {
    const countries = get(countriesState);
    return countries.filter((country) => country.category === String(Categories.WISH));
  },
});

export const experienceCountriesSelector = selector<ICountry[]>({
  key: 'experienceCountriesSelector',
  get: ({ get }) => {
    const countries = get(countriesState);
    return countries.filter((country) => country.category === String(Categories.EXPERIENCE));
  },
});

export const likeCountriesSelector = selector<ICountry[]>({
  key: 'likeCountriesSelector',
  get: ({ get }) => {
    const countries = get(countriesState);
    return countries.filter((country) => country.category === String(Categories.LIKE));
  },
});
