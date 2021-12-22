// /** @jsxRuntime classic */
// /** @jsx jsx */
import { VFC } from 'react';
import { jsx, css } from '@emotion/react';
import { InlineWidget } from 'react-calendly';
import { Container } from 'semantic-ui-react';

const container = css`
  margin: 50px;
`;

const Contact: VFC = () => (
  <Container css={container}>
    <Container text textAlign="center">
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
