import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { CATEGORIES } from '@/constants/countries';
import { Category, ICountry } from '@/types';
import styled from 'styled-components';
import { countriesState } from '@/recoil/countries';

const Country = ({ id, name, category }: ICountry) => {
  const [select, setSelect] = useState<ICountry['category']>(category);
  const setCountries = useSetRecoilState(countriesState);
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value as Category);
    setCountries((prev) => {
      const targetIdx = prev.findIndex((category) => category.id === id);
      const curCountry = { id, name, category: e.target.value as Category };
      return [...prev.slice(0, targetIdx), curCountry, ...prev.slice(targetIdx + 1)];
    });
  };
  const onClickHandler = () => {
    setCountries((prev) => prev.filter((country) => country.id !== id));
  };

  return (
    <Container>
      <span>{name}</span>
      <select value={select} onChange={onChangeHandler}>
        <option disabled value={select}>
          {String(category)}
        </option>
        {CATEGORIES.filter((CATEGORY) => CATEGORY !== category).map((CATEGORY, idx) => (
          <option key={idx} value={CATEGORY}>
            {CATEGORY}
          </option>
        ))}
      </select>
      <button onClick={onClickHandler}>❌</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 20px;
  padding: 15px;
  gap: 15px;
  span {
    width: 100%;
  }
  border-bottom: 1px solid ${(props) => props.theme.btnColor};
`;

export default Country;
