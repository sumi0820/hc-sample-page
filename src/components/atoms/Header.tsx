// /** @jsxRuntime classic */
// /** @jsx jsx */
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { jsx, css } from '@emotion/react';
import { Menu, Sticky } from 'semantic-ui-react';

const header = css`
  z-index: 3;
  background-color: rgba(26, 36, 44, 0.9) !important;
  @media (max-width: 770px) {
    h2 {
      font-size: 24px !important;
    }
  }
`;

const items = css`
  background-color: transparent;
  @media (max-width: 770px) {
    display: none !important;
  }
`;

const item = css`
  background-color: transparent;
`;

const Header: FC = () => (
  <Sticky>
    <Menu css={header}>
      <Menu.Item>
        <Link to="/">
          <h2>HashCloak</h2>
        </Link>
      </Menu.Item>
      <Menu.Menu position="right" css={items}>
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
  </Sticky>
);
export default Header;
