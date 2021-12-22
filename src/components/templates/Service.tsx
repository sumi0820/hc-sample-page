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

const Service: VFC = () => (
  <div css={headerContent}>
    <div>
      <h1>Services</h1>
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
);

export default Service;
