// /** @jsxRuntime classic */
// /** @jsx jsx */
import { VFC } from 'react';
import { jsx, css } from '@emotion/react';
import { Container } from 'semantic-ui-react';

const container = css`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  @media (max-width: 770px) {
    flex-direction: column;
    h1 {
      font-size: 48px !important;
      font-weight: 300;
    }

    h2 {
      font-size: 26px !important;
      font-weight: 200;
    }

    h3 {
      font-size: 16px !important;
      font-weight: 100;
    }

    p {
      font-size: 12px !important;
    }
    background-image: url('https://hashcloak.com/graphics/hc-contract.png');
    background-size: contain !important;
    background-repeat: no-repeat;
  }
`;

const services = css`
  text-align: center;
  margin: 100px 0;
  z-index: 1;
  background-color: transparent;
  /* @media (max-width: 680px) {
    flex-direction: column;
  } */
`;

const image = css`
  opacity: 0.2;
  hight: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 5em,
    black calc(100% - 1.5em),
    transparent
  );
  /* @media (max-width: 680px) {
    flex-direction: column;
  } */
`;

const Services: VFC = () => (
  <Container>
    <div css={container}>
      <div css={services}>
        <h2>Services</h2>
        <p>Smart contract audits</p>
        <p>Privacy audits</p>
        <p>Cryptographic implementation audits</p>
        <p>Bespoke R&D for blockchain-related projects</p>
        <p>General Cryptography and Blockchain consulting</p>
      </div>
      <img
        src="https://hashcloak.com/graphics/hc-contract.png"
        alt="service"
        css={image}
      />
    </div>
  </Container>
);

export default Services;
