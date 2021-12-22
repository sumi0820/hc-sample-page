// /** @jsxRuntime classic */
// /** @jsx jsx */
import { VFC } from 'react';

import { jsx, css } from '@emotion/react';

const mainVisual = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 50px;
  /* position: relative; */
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;
const texts = css`
  /* position: absolute; */
  color: white;
  /* position: relative; */
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;
const image = css`
  width: 80%;
  margin: 0 0 0 auto;
  opacity: 0.2;
  top: 500px;
  left: 200px;
  /* position: absolute; */
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;
const subTitle = css`
  line-height: 0.9em;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;
const caption = css`
  margin: 20px 0;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const MainVisual: VFC = () => (
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
);

export default MainVisual;
