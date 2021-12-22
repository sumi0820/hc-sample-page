// /** @jsxRuntime classic */
// /** @jsx jsx */
import { VFC } from 'react';
import { jsx, css } from '@emotion/react';

const headerContent = css`
  width: 100%;
  max-width: 1600px;
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

const Newsletters: VFC = () => (
  <div css={headerContent}>
    <h1>Newsletters</h1>
    <div>
      <img
        src="https://hashcloak.com/graphics/noun_Science_3306446.png"
        alt="research"
        css={image}
      />
      <h2>Research</h2>
    </div>
    <div>
      <img
        src="https://hashcloak.com/graphics/noun_Announcement_3166042.png"
        alt="announcement"
        css={image}
      />
      <h2>Announcement</h2>
    </div>
  </div>
);

export default Newsletters;
