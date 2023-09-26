import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { countriesState } from '@/recoil/countries';
import { CountryForm, Country } from '@/components';

const Countries = () => {
  const countries = useRecoilValue(countriesState);
  console.log(countries);
  return (
    <Container>
      <CountryForm />
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            <Country id={country.id} name={country.name} category={country.category} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div``;

export default Countries;
