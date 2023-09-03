import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { FormStyled } from './styles/Form.Styled';
import { InputBox } from './styles/InputBox.styled';

interface Props {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  formState: FormState<FieldValues>;
}

export default function FormComponent({
  register,
  handleSubmit,
  formState: { errors },
}: Props) {
  console.log(errors);

  return (
    <FormStyled>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        action=""
      >
        <InputBox error={errors.firstName?.message ? '#FF7979' : ''}>
          <input
            className="form-input"
            {...register('firstName', {
              required: 'First Name cannot be empty',
            })}
            type="text"
            placeholder="FirstName"
          />
          <p>{errors.firstName?.message as String}</p>
        </InputBox>

        <InputBox error={errors.lastName?.message ? '#FF7979' : ''}>
          <input
            className="form-input"
            {...register('lastName', { required: 'Last Name cannot be empty' })}
            type="text"
            placeholder="Last Name"
          />
          <p>{errors.lastName?.message as String}</p>
        </InputBox>

        <InputBox error={errors.email?.message ? '#FF7979' : ''}>
          <input
            className="form-input"
            {...register('email', {
              required: 'Looks like this is not an email',
            })}
            type="email"
            placeholder="Email Address"
          />
          <p>{errors.email?.message as String}</p>
        </InputBox>

        <InputBox error={errors.password?.message ? '#FF7979' : ''}>
          <input
            className="form-input"
            {...register('password', {
              required: 'Password cannot be empty',
              minLength: {
                value: 6,
                message: 'value must be more than 6 letters',
              },
            })}
            type="password"
            placeholder="Password"
          />
          <p>{errors.password?.message as String}</p>
        </InputBox>
        <button>Claim Your Free Trial</button>
      </form>
      <p>
        By clicking the button, you are agreeing to our
        <a href="#"> Terms and Services </a>
      </p>
    </FormStyled>
  );
}
