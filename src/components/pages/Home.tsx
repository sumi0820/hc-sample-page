import Blogs from 'components/templates/Blog';
import Clients from 'components/templates/Clients';
import Contact from 'components/templates/Contact';
import MainVisual from 'components/templates/MainVisual';
import Research from 'components/templates/Research';
import Service from 'components/templates/Service';
import { VFC } from 'react';
import { Container, Divider } from 'semantic-ui-react';

const Home: VFC = () => (
  <Container>
    <MainVisual />
    <Divider />
    <Service />
    <Divider />
    <Research />
    <Divider />
    <Clients />
    <Divider />
    <Blogs />
    <Divider />
    <Contact />
  </Container>
);

export default Home;
