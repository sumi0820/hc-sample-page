// /** @jsxRuntime classic */
// /** @jsx jsx */
import { VFC } from 'react';
import { jsx, css } from '@emotion/react';
import { Container, Grid } from 'semantic-ui-react';

const container = css`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  @media (max-width: 770px) {
    display: none;
  }
`;

const services = css`
  text-align: center;
  margin: 100px 0;
  z-index: 1;
  background-color: transparent;
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
  background-blend-mode: lighten;
  @media (max-width: 770px) {
    display: none;
  }
`;

const mbContainer = css`
  display: none !important;
  @media (max-width: 769px) {
    display: block !important;
    margin: 20px 0;
    p {
      color: white;
      text-shadow: 1px 1px 2px white;
    }
  }
`;
const mbImage = css`
  @media (max-width: 769px) {
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
  }
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
    <Container text css={mbContainer}>
      <Grid columns={1} textAlign="center">
        <Grid.Column css={mbImage}>
          <h2>Services</h2>
          <p>Smart contract audits</p>
          <p>Privacy audits</p>
          <p>Cryptographic implementation audits</p>
          <p>Bespoke R&D for blockchain-related projects</p>
          <p>General Cryptography and Blockchain consulting</p>
        </Grid.Column>
      </Grid>
    </Container>
  </Container>
);

export default Services;
