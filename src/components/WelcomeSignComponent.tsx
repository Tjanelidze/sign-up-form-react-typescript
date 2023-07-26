import React from 'react';
import styled from 'styled-components';

export default function WelcomeSignComponent() {
  return (
    <WelcomeSign>
      <h1 className="primaryHeading">Learn to code by watching others</h1>
      <p className="welcomeDescription">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </WelcomeSign>
  );
}

const WelcomeSign = styled.div`
  .primaryHeading {
    color: #fff;
    font-size: 5rem;
    font-weight: 700;
    line-height: 5.5rem;
    letter-spacing: -0.521px;
  }

  .welcomeDescription {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.6rem;
  }
`;
