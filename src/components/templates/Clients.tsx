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

const Clients: VFC = () => (
  <div css={headerContent}>
    <div>
      <h1>Clients We&apos;ve Collaborated With</h1>
      <img src="https://hashcloak.com/logos/fuel.png" alt="fuel" css={image} />
      <img src="https://hashcloak.com/logos/celo.png" alt="celo" css={image} />
    </div>
    <div>
      <h1>Research At HashCloak Is Supported By</h1>
      <img
        src="https://hashcloak.com/logos/binance.png"
        alt="binance"
        css={image}
      />
      <img
        src="https://hashcloak.com/logos/esp.png"
        alt="ecosystem-support-program"
        css={image}
      />
    </div>
  </div>
);

export default Clients;
