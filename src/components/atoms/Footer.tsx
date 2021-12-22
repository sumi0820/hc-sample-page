// /** @jsxRuntime classic */
// /** @jsx jsx */

import React, { VFC } from 'react';
import { jsx, css } from '@emotion/react';

const footer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 48px;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;
const footerList1 = css`
  display: flex;
  flex-direction: row;
  margin-right: 48px;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const Footers: VFC = () => (
  <footer css={footer}>
    <div css={footerList1}>
      <p>2021 HashCloak Inc.</p>
      <p>Designed and developed by @sweetpea22 (twitter).</p>
    </div>
  </footer>
);

export default Footers;
