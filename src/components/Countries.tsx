import { useRecoilValue } from 'recoil';
import { Country } from '@/components';
import { ICountriesProps } from '@/types';
import { categorySelector } from '@/recoil/countries';
import styled from 'styled-components';
import { Categories } from '@/constants/countries';

const Countries = ({ category }: ICountriesProps) => {
  const countries = useRecoilValue(categorySelector(category));

  return (
    <Container>
      {category === Categories.LIKE && <Title>내가 좋아하는 나라들</Title>}
      {category === Categories.EXPERIENCE && <Title>내가 가본 나라들</Title>}
      {category === Categories.WISH && <Title>내가 가고싶은 나라들</Title>}
      <List>
        {countries.map((country) => (
          <li key={country.id}>
            <Country id={country.id} name={country.name} category={country.category} />
          </li>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  li {
    width: 100%;
  }
`;

export default Countries;
