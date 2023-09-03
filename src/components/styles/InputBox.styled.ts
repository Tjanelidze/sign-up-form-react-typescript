import { styled } from 'styled-components';

export const InputBox = styled.div<{ error?: string }>`
  text-align: right;

  p {
    margin-top: 0.6rem;
    color: #ff7979;
    font-size: 1.1rem;
    font-style: italic;
    font-weight: 500;
  }

  .form-input {
    outline: 2px solid ${(props) => props.error || '#DEDEDE'};
  }
`;
