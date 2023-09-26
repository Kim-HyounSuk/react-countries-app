import { Countries, CountryForm } from '@/components';
import styled from 'styled-components';

const App = () => {
  return (
    <Container>
      <h1>Travel Record</h1>
      <CountryForm />
      <Countries category='WISH' />
      <Countries category='EXPERIENCE' />
      <Countries category='LIKE' />
    </Container>
  );
};

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 50px;
padding: 50px 100px;

h1 {
  font-size: 48px;
  font-weight: 900px;
  text-align: center;
}
`;

export default App;
