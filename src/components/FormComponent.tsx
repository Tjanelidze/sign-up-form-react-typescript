import { FieldValues, FormState, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { FormStyled } from './styles/Form.Styled';

interface Props {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>,
  formState: FormState<FieldValues>
}

export default function FormComponent({ register,handleSubmit,formState: {errors} }: Props) {
  console.log(errors)
  
  return (
    <FormStyled>
      <form onSubmit={handleSubmit((data) => {
        console.log(data)
      })} action="">
        <input {...register('firstName', {required: 'First Name cannot be empty'})} type="text" placeholder="FirstName" />
        <input {...register('lastName', {required: 'Last Name cannot be empty'})} type="text" placeholder="Last Name" />
        <input
          {...register('email', {required: 'Looks like this is not an email'})}
          type="email"
          placeholder="Email Address"
        />
        <input
          {...register('password', {required: 'hi', minLength: {
            value: 4,
            message: 'Password cannot be empty'
          }})}
          type="password"
          placeholder="Password"
        />
        <button>Claim Your Free Trial</button>
      </form>
      <p>
        By clicking the button, you are agreeing to our
        <a href="#"> Terms and Services </a>
      </p>
    </FormStyled>
  );
}
