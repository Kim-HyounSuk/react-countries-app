import { ICountryFormValue } from '@/types';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const CountryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICountryFormValue>();

  const onValid = (data: ICountryFormValue) => {
    console.log(data);
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
