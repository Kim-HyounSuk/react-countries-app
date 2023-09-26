import { ICountry } from '@/types';
import { atom } from 'recoil';

export const countriesState = atom<ICountry[]>({
  key: 'countries',
  default: [],
});
