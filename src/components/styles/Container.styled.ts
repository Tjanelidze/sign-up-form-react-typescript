import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 120rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: red;
  padding: 2rem;
  gap: 4.5rem;

  .primaryHeading {
    font-size: 50px;
  }

  .description {
    color: #fff;
  }


  @media (max-width: 48em) {
    grid-template-columns: 1fr;
  }
`;
