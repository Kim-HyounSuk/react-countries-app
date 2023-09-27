import { ICountry } from '@/types';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'country',
  storage: localStorage,
});

export const countriesState = atom<ICountry[]>({
  key: 'countries',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
