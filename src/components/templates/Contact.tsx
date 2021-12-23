// /** @jsxRuntime classic */
// /** @jsx jsx */
import { VFC } from 'react';
import { jsx, css } from '@emotion/react';
import { InlineWidget } from 'react-calendly';
import { Container } from 'semantic-ui-react';

const container = css`
  margin: 70px 0 !important;
  @media (max-width: 770px) {
    margin: 50px 0 !important;
  }
`;
const header = css`
  @media (max-width: 770px) {
    margin-bottom: 20px;
  }
`;

const Contact: VFC = () => (
  <Container css={container}>
    <Container text textAlign="center" css={header}>
      <h2>Contact</h2>
      <p>Schedule a free 30 minute consultation session</p>
    </Container>
    <InlineWidget
      url="https://calendly.com/hashcloak/30min"
      styles={{ height: '700px' }}
    />
  </Container>
);

export default Contact;
