// /** @jsxRuntime classic */
// /** @jsx jsx */

import React, { VFC } from 'react';
import { jsx, css } from '@emotion/react';

const sns = css`
  margin: 0 20px;
  width: 40px;
  @media (max-width: 769px) {
    margin: 10px;
    width: 30px;
  }
`;

const Sns: VFC = () => (
  <>
    <a href="https://github.com/hashcloak" target="_blank" rel="noreferrer">
      <img
        src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"
        alt="github"
        css={sns}
      />
    </a>
    <a href="https://twitter.com/hashcloak" target="_blank" rel="noreferrer">
      <img
        src="https://img.icons8.com/ios-glyphs/60/ffffff/twitter.png"
        alt="twitter"
        css={sns}
      />
    </a>
  </>
);

export default Sns;
