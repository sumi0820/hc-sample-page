import { VFC } from 'react';
import { Route, Routes } from 'react-router';
import { Container } from 'semantic-ui-react';

import Home from 'components/pages/Home';
// import Auth from 'components/pages/Auth';
// import Others from 'components/pages/Others';
import Header from 'components/atoms/Header';
import Footers from 'components/atoms/Footer';

import './App.css';

const App: VFC = () => (
  <>
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
    <Footers />
  </>
);

export default App;
