// /** @jsxRuntime classic */
// /** @jsx jsx */
import { VFC } from 'react';

import { jsx, css } from '@emotion/react';
import { Container } from 'semantic-ui-react';

const mainVisual = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
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
    background-image: url('https://hashcloak.com/graphics/hashcloak-ice.png');
    background-size: contain !important;
    background-repeat: no-repeat;
  }
`;

const texts = css`
  width: 50%;
  position: absolute;
  z-index: 1;
  background-color: transparent;
  /* @media (max-width: 680px) {
    flex-direction: column;
  } */
`;
const image = css`
  width: 80%;
  opacity: 0.2;
  margin-left: 400px;
  z-index: 0;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 5em,
    black calc(100% - 1.5em),
    transparent
  );
  @media (max-width: 770px) {
  }
`;

const subTitle = css`
  line-height: 0.9em;
  /* @media (max-width: 680px) {
    flex-direction: column;
  } */
`;

const caption = css`
  margin: 25px 0;
  line-height: 1.2em;
  /* @media (max-width: 680px) {
    flex-direction: column;
  } */
`;

const MainVisual: VFC = () => (
  <Container>
    <div css={mainVisual}>
      <div css={texts}>
        <h1>HashCloak</h1>
        <h2 css={subTitle}>Privacy</h2>
        <h2 css={subTitle}>Scalability</h2>
        <h2 css={subTitle}>Distributed Systems</h2>
        <p css={caption}>
          Hashcloak is an independent research lab that targets problems
          surrounding privacy-preserving technologies and blockchain
          infrastructure design.
        </p>
      </div>
      <img
        src="https://hashcloak.com/graphics/hashcloak-ice.png"
        alt="main-visual"
        css={image}
      />
    </div>
  </Container>
);

export default MainVisual;
