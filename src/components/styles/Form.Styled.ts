import { styled } from 'styled-components';

export const FormStyled = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  text-align: center;

  padding: 4rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  form > input {
    color: #3d3b48;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.25px;
    border-radius: 5px;
    border: 1px solid #5e54a4;
    background: #fff;
    padding: 1.5rem 3.2rem;
  }

  form > input:focus {
    outline-color: #5e54a4;
  }

  form > button {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.6rem;
    letter-spacing: 1px;

    border-radius: 5px;
    background: #38cc8b;
    box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
    padding: 1.5rem 0;
    text-align: center;
    border: none;
    color: #fff;
  }

  p {
    color: #bab7d4;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 0.8rem;
  }

  p > span {
    color: #ff7979;
    font-weight: 700;
  }
`;
