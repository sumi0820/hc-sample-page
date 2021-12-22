// /** @jsxRuntime classic */
// /** @jsx jsx */
import { VFC } from 'react';

import { jsx, css } from '@emotion/react';

const headerContent = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;
const image = css`
  width: 50%;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const MainVisual: VFC = () => (
  <div>
    <div css={headerContent}>
      <img
        src="https://hashcloak.com/graphics/hashcloak-ice.png"
        alt="main-visual"
        css={image}
      />
      <div>
        <h1>Privacy</h1>
        <h1>Scalability</h1>
        <h1>Distributed Systems</h1>
        <h1>HashCloak</h1>
      </div>
    </div>
    <p>
      Hashcloak is an independent research lab that targets problems surrounding
      privacy-preserving technologies and blockchain infrastructure design.
    </p>
  </div>
);

export default MainVisual;
