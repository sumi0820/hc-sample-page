// /** @jsxRuntime classic */
// /** @jsx jsx */

import React, { VFC } from 'react';
import { jsx, css } from '@emotion/react';
import Sns from './Sns';

const footer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 48px;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;
const footerLeft = css`
  display: flex;
  flex-direction: row;
  margin-right: 48px;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;
const sns = css`
  display: flex;
  justify-content: center;
`;

const Footers: VFC = () => (
  <footer css={footer}>
    <div css={footerLeft}>
      <p>2021 HashCloak Inc.</p>
      <p>Designed and developed by @sweetpea22 (twitter).</p>
    </div>
    <div css={sns}>
      <Sns />
    </div>
  </footer>
);

export default Footers;
