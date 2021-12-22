import { VFC } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Burger.css';

const Burger: VFC = () => (
  <>
    <Menu right width="100%" disableAutoFocus>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  </>
);
export default Burger;
