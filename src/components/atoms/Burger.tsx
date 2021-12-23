import { VFC, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './Burger.css';
import Sns from './Sns';

const Burger: VFC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Menu
        right
        width="100%"
        disableAutoFocus
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
      >
        <Link id="react-burger-cross-btn" className="menu-item" to="/">
          <button type="button" onClick={() => setIsOpen(false)}>
            Home
          </button>
        </Link>
        <Link id="react-burger-cross-btn" className="menu-item" to="/">
          <button type="button" onClick={() => setIsOpen(false)}>
            Services
          </button>
        </Link>
        <Link id="react-burger-cross-btn" className="menu-item" to="/">
          <button type="button" onClick={() => setIsOpen(false)}>
            Research
          </button>
        </Link>
        <Link id="react-burger-cross-btn" className="menu-item" to="/">
          <button type="button" onClick={() => setIsOpen(false)}>
            Clients
          </button>
        </Link>
        <Link id="react-burger-cross-btn" className="menu-item" to="/">
          <button type="button" onClick={() => setIsOpen(false)}>
            Blog and Newsletters
          </button>
        </Link>
        <Link id="react-burger-cross-btn" className="menu-item" to="/">
          <button type="button" onClick={() => setIsOpen(false)}>
            Contact
          </button>
        </Link>
        <Sns />
      </Menu>
    </>
  );
};
export default Burger;
