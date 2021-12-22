// /** @jsxRuntime classic */
// /** @jsx jsx */
import { Link } from 'react-router-dom';
import React, { FC } from 'react';
import { jsx, css } from '@emotion/react';
import { Menu } from 'semantic-ui-react';
import Burger from './Burger';

const header = css`
  background-color: rgba(26, 36, 44, 0.9) !important;
  position: fixed;
  z-index: 3;
  width: 100%;
  top: 0;
  @media (max-width: 980px) {
    h2 {
      font-size: 24px !important;
    }
  }
`;

const items = css`
  background-color: transparent;
  margin-left: 20% !important;
  a {
    font-size: 20px;
    font-weight: 400;
    color: #2fb3ff;
  }
  @media (max-width: 980px) {
    display: none !important;
  }
`;

const item = css`
  background-color: transparent;
`;

const Header: FC = () => (
  <>
    <Menu css={header}>
      <Menu.Item>
        <Link to="/">
          <h2>HashCloak</h2>
        </Link>
      </Menu.Item>
      <Menu.Menu css={items}>
        <Menu.Item>
          <Link to="/" css={item}>
            Services
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/auth" css={item}>
            Research
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/others" css={item}>
            Blogs
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/others" css={item}>
            Newsletters
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/others" css={item}>
            Contact
          </Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    <Burger />
  </>
);
export default Header;
