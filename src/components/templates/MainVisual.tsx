// /** @jsxRuntime classic */
// /** @jsx jsx */
import { VFC } from 'react';

import { jsx, css } from '@emotion/react';
import { Container } from 'semantic-ui-react';

const mainVisual = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  @media (max-width: 1200px) {
    margin-top: 70px;
    margin-bottom: 50px;
  }
  @media (max-width: 770px) {
    position: static;
  }
`;

const texts = css`
  width: 50%;
  position: absolute;
  z-index: 1;
  background-color: transparent;
  @media (max-width: 770px) {
    position: static;
    width: 100%;
  }
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
  background-blend-mode: lighten;
  @media (max-width: 770px) {
    display: none;
  }
`;

const subTitle = css`
  line-height: 0.9em;
  @media (max-width: 980px) {
    font-size: 20px !important;
  }
  @media (max-width: 770px) {
    line-height: 0.6em;
  }
`;

const caption = css`
  margin-top: 25px;
  line-height: 1.2em;
  @media (max-width: 770px) {
    margin-top: 20px;
    line-height: 1.2em;
    width: 100%;
  }
`;

const icons = css`
  display: flex;
  }
`;
const sns = css`
  margin: 0 20px;
  width: 50px;
  @media (max-width: 769px) {
    width: 30px;
  }
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
        <div css={icons}>
          <a
            href="https://github.com/hashcloak"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"
              alt="github"
              css={sns}
            />
          </a>
          <a
            href="https://twitter.com/hashcloak"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/60/ffffff/twitter.png"
              alt="twitter"
              css={sns}
            />
          </a>
        </div>
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
