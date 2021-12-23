// /** @jsxRuntime classic */
// /** @jsx jsx */
import { VFC } from 'react';
import { jsx, css } from '@emotion/react';
import { Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const container = css`
  margin: 70px 0 !important;
  width: 100%;
  @media (max-width: 770px) {
    margin: 50px 0 !important;
  }
`;
const header = css`
  margin-bottom: 30px;
`;
const card = css`
  padding: 30px 15px !important;
`;
const images = css`
  margin: 40px 0 !important;
  display: flex !important;
  align-items: center !important;
`;

const image = css`
  max-width: 50%;
  height: 80px;
  background-color: #2fb3ff;
  border-radius: 10%;
  padding: 5px;
`;
const title = css`
  margin-top: 10px;
  margin-bottom: 0 !important;
`;

const caption = css`
  margin-top: 5px;
`;

const Blogs: VFC = () => (
  <Container css={container}>
    <Container text textAlign="center" css={header}>
      <h2>Blogs and Newsletters</h2>
      <Grid columns={2} stackable css={images} celled="internally">
        <Grid.Row>
          <Grid.Column css={card}>
            <Link to="/">
              <img
                src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-research-online-learning-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
                alt="research"
                css={image}
              />
              <h3 css={title}>Research</h3>
            </Link>
          </Grid.Column>
          <Grid.Column css={card}>
            <Link to="/">
              <img
                src="https://img.icons8.com/ios/50/000000/about.png"
                alt="announcement"
                css={image}
              />
              <h3 css={title}>Announcement</h3>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column css={card}>
            <Link to="/">
              <img
                src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-news-news-kiranshastry-lineal-kiranshastry-1.png"
                alt="newsletter"
                css={image}
              />
              <h3 css={title}>HashCloak Newsletter</h3>
              <p css={caption}>
                Periodic updates about current HashCloak projects and offerings
              </p>
            </Link>
          </Grid.Column>
          <Grid.Column css={card}>
            <Link to="/">
              <img
                src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-news-news-kiranshastry-solid-kiranshastry-1.png"
                alt="newsletter"
                css={image}
              />
              <h3 css={title}>ZKMesh Newsletter</h3>
              <p css={caption}>
                Monthly Newsletter on privacy-preserving tech with Anna Rose of
                the ZKPodcast
              </p>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Container>
);

export default Blogs;
