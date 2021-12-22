// /** @jsxRuntime classic */
// /** @jsx jsx */
import React, { VFC } from 'react';
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';

const headerContent = css`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;
const blog = css`
  display: flex;
  flex-direction: column;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const Research: VFC = () => (
  <>
    <div>
      <h1>Research</h1>
      <p>
        Here is a taste of the research we conduct and open problems we are
        currently tackling.
      </p>
    </div>
    <div css={headerContent}>
      <div css={blog}>
        <h2>2021</h2>
        <Link to="/">
          An Empirical Analysis of Ethereum as a Randomness Beacon (Ongoing)
        </Link>
        <Link to="/">SoK on Universal SNARK constructions (Ongoing)</Link>
        <Link to="/">
          Katzenmint: A Decentralized PKI System for Anonymous Communication
          Networks (Ongoing)
        </Link>
        <Link to="/">
          Towards a Dynamic Parameterization Algorithm for the Loopix Anonymity
          Systems (Ongoing)
        </Link>
        <h2>2020</h2>
        <Link to="/">
          Blockchain is Watching You: Profiling and Deanonymizing Ethereum Users
        </Link>
        <h2>2019</h2>
        <Link to="/">
          Short Paper: Towards Characterizing Sybil Attacks in Cryptocurrency
          Mixers
        </Link>
      </div>
      <div>
        <h2>Open Research Problems </h2>
        <Link to="/">TBA</Link>
      </div>
    </div>
  </>
);

export default Research;
