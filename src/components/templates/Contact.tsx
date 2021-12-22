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


const Contact: VFC = () => (
  <div css={headerContent}>
    <h1>Contact</h1>
    <p>Schedule a free 30 minute consultation session</p>
    <div>Calendar</div>
  </div>
);

export default Contact;
