// /** @jsxRuntime classic */
// /** @jsx jsx */
import { Link } from 'react-router-dom';
import { VFC } from 'react';
import { jsx, css } from '@emotion/react';
import { Container } from 'semantic-ui-react';

const header = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem 4rem;
  z-index: 3;
  position: sticky;
  top: -1px;
  left: -1px;
  background-filter: blur;
  order-bottom: 1px solid rgb(25, 27, 31);
  transition: background-color 0.25s ease 0s;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;
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
const icon = css`
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const itemContent = css`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;
const item = css`
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0 20px;
  font-size: 1.1rem;
`;

const Header: VFC = () => (
  <Container>
    <header css={header}>
      <div css={headerContent}>
        <Link to="/" css={icon}>
          <h2>HashCloak</h2>
        </Link>
        <div css={itemContent}>
          <Link to="/" css={item}>
            Services
          </Link>
          <Link to="/auth" css={item}>
            Research
          </Link>
          <Link to="/others" css={item}>
            Blogs
          </Link>
          <Link to="/others" css={item}>
            Newsletters
          </Link>
          <Link to="/others" css={item}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  </Container>
);

export default Header;
