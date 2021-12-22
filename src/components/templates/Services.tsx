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
  /* @media (max-width: 680px) {
    flex-direction: column;
  } */
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
