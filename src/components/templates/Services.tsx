// /** @jsxRuntime classic */
// /** @jsx jsx */
import { VFC } from 'react';
import { jsx, css } from '@emotion/react';
import { Container } from 'semantic-ui-react';

const container = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: 70px 0 !important;
  background-image: url('https://hashcloak.com/graphics/hc-contract.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-color: linear-gradient(
    to right,
    transparent,
    black 5em,
    black calc(100% - 1.5em),
    transparent
  );
  background-blend-mode: lighten;
  @media (max-width: 770px) {
    margin: 50px 0 !important;
    position: static;
  }
`;

const services = css`
  text-align: center;
  z-index: 1;
  background-color: transparent;
`;

const Services: VFC = () => (
  <Container css={container}>
    <div css={services}>
      <h2>Services</h2>
      <h3>Smart contract audits</h3>
      <h3>Privacy audits</h3>
      <h3>Cryptographic implementation audits</h3>
      <h3>Bespoke R&D for blockchain-related projects</h3>
      <h3>General Cryptography and Blockchain consulting</h3>
    </div>
  </Container>
);

export default Services;
