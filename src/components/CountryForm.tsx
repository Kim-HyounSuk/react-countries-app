import { COUNTRIES_REGEX } from '@/constants/countries';
import { ICountryFormValue } from '@/types';
import { useSetRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { countriesState } from '@/recoil/countries';

const CountryForm = () => {
  const setCountries = useSetRecoilState(countriesState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<ICountryFormValue>();
  const onValid = ({ country }: ICountryFormValue) => {
    if (!COUNTRIES_REGEX.test(country)) {
      setError('country', { message: '😥 영문, 숫자만 입력 가능해요. 😥' });
    }
    setCountries((prev) => [{ name: country, category: 'WISH', id: Date.now() }, ...prev]);
    setValue('country', '');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input {...register('country', { required: '😥 빈칸은 입력할 수 없어요. 😥' })} />
        <Button>등록</Button>
      </Form>
      {errors?.country && <span>{errors?.country?.message}</span>}
    </Container>
  );
};

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

const Button = styled.button``;

export default CountryForm;
