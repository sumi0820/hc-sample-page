// /** @jsxRuntime classic */
// /** @jsx jsx */
import React, { VFC } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';

import { jsx, css } from '@emotion/react';

const container = css`
  margin: 50px;
  width: 100%;
  @media (max-width: 770px) {
    margin: 20px 0;
  }
`;
const header = css`
  margin-bottom: 30px;
`;
const caption = css`
  line-height: 0.4rem;
`;

const Research: VFC = () => (
  <Container css={container}>
    <Container text textAlign="center" css={header}>
      <h2>Research</h2>
      <p css={caption}>Here is a taste of the research we conduct</p>
      <p css={caption}>and open problems we are currently tackling.</p>
    </Container>
    <Grid columns={2} stackable centered column>
      <Grid.Column>
        <h3>2021</h3>
        <p>
          <Link to="/">
            An Empirical Analysis of Ethereum as a Randomness Beacon (Ongoing)
          </Link>
        </p>
        <p>
          <Link to="/">SoK on Universal SNARK constructions (Ongoing)</Link>
        </p>
        <p>
          <Link to="/">
            Katzenmint: A Decentralized PKI System for Anonymous Communication
            Networks (Ongoing)
          </Link>
        </p>
        <p>
          <Link to="/">
            Towards a Dynamic Parameterization Algorithm for the Loopix
            Anonymity Systems (Ongoing)
          </Link>
        </p>
        <h3>2020</h3>
        <p>
          <Link to="/">
            Blockchain is Watching You: Profiling and Deanonymizing Ethereum
            Users
          </Link>
        </p>
        <h3>2019</h3>
        <p>
          <Link to="/">
            Short Paper: Towards Characterizing Sybil Attacks in Cryptocurrency
            Mixers
          </Link>
        </p>
      </Grid.Column>
      <Grid.Column>
        <h3>Open Research Problems </h3>
        <p>
          <Link to="/">TBA</Link>
        </p>
      </Grid.Column>
    </Grid>
  </Container>
);

export default Research;
