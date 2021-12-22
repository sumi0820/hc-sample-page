// /** @jsxRuntime classic */
// /** @jsx jsx */
import { VFC } from 'react';
import { jsx, css } from '@emotion/react';
import { Container, Grid } from 'semantic-ui-react';

const container = css`
  margin: 50px;
  width: 100%;
`;
const header = css`
  margin-bottom: 30px;
`;
const images = css`
  margin: 40px 0 !important;
`;
const fuelContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
const fuelLogo = css`
  background-size: contain;
  background-position: 0 center;
  background-repeat: no-repeat;
  font-size: 45px;
  font-weight: 600;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.4;
  color: #04c399;
  padding-left: 20px;
  margin-right: 45px;
`;
const image = css`
  max-width: 50%;
  height: 80px;
`;

const Clients: VFC = () => (
  <Container css={container}>
    <Container text textAlign="center" css={header}>
      <h2>Clients and Research Supporters</h2>
      <Grid columns={2} stackable css={images}>
        <Grid.Row>
          <Grid.Column>
            <div css={fuelContainer}>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJwcmVmaXhfX0xvZ28iIHdpZHRoPSI0Ni44OTkiIGhlaWdodD0iNTUuMTkyIiB2aWV3Qm94PSIwIDAgNDYuODk5IDU1LjE5MiI+CiAgICA8ZyBpZD0icHJlZml4X19BcnRib2FyZC1Db3B5LTMiPgogICAgICAgIDxnIGlkPSJwcmVmaXhfX2xvZ28tMiIgZGF0YS1uYW1lPSJsb2dvIj4KICAgICAgICAgICAgPGcgaWQ9InByZWZpeF9fR3JvdXAtOCI+CiAgICAgICAgICAgICAgICA8ZyBpZD0icHJlZml4X19Hcm91cC03Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD0icHJlZml4X19Db21iaW5lZC1TaGFwZSIgZmlsbD0iIzA0YzM5OSIgZD0iTTQxLjA0NCAxOC41ODlhMS40IDEuNCAwIDAgMSAxLjI4NS44MDUgMS40NDggMS40NDggMCAwIDEtLjE0NiAxLjUxOUwxNy43MDYgNTEuNTQ4YTEuNjIzIDEuNjIzIDAgMCAxLS41MjIuMzkzIDEuMzk0IDEuMzk0IDAgMCAxLTEuMjY3LS4wMTMgMS40MyAxLjQzIDAgMCAxLS43Ny0xLjY0NWw0LjQwNi0xNi44NjItMTguMTI3LjA1NmExLjQgMS40IDAgMCAxLTEuMjg2LS44MDUgMS41IDEuNSAwIDAgMSAuMTQ2LTEuNTE5TDI0Ljc4My41NTlhMS4zNTYgMS4zNTYgMCAwIDEgMS43MjgtLjQgMS40MyAxLjQzIDAgMCAxIC44MTIgMS42MjVsLTQuNDA2IDE2Ljg2MXoiLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD0icHJlZml4X19Db21iaW5lZC1TaGFwZS1Db3B5IiBmaWxsPSJub25lIiBzdHJva2U9IiMwNGMzOTkiIGQ9Ik00Mi43MzggMjAuNjQ4Yy41NTItLjAwNiA0Ljg4NCAyLjMxOCA1LjExNiAyLjgxMWExLjQ0OSAxLjQ0OSAwIDAgMS0uMTQ2IDEuNTE5TDIzLjIzIDU1LjYxM2ExLjYyMyAxLjYyMyAwIDAgMS0uNTIyLjM5MyAxLjM5NCAxLjM5NCAwIDAgMS0xLjI2Ny0uMDEzYy0uNTg1LS4yNzktNC4yLTMuMjMzLTQuMDE4LTMuOTE4bDcuODg0LTEyLjc5SDguMTM3Yy0uNTUyLjAwNi02LjAzMi01LjI2Ny01LjcxNC01LjY2NVExOS42MzMgMTEuNiAyNyAyLjQwOGMuOC0xIDQuNDM1IDEuNDk0IDUuMDM5IDEuODE1YTEuNDMgMS40MyAwIDAgMSAuODEyIDEuNjI1TDI4LjQ0MiAyMi43MXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjYyNyAtMS40NjcpIi8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="
                alt="fuel"
              />
              <span css={fuelLogo}>Fuel</span>
            </div>
          </Grid.Column>
          <Grid.Column>
            <img
              src="https://hashcloak.com/logos/celo.png"
              alt="celo"
              css={image}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/12/Binance_logo.svg"
              alt="binance"
              css={image}
            />
          </Grid.Column>
          <Grid.Column>
            <img
              src="https://esp.ethereum.foundation/static/horz-logo-065bcbe38b2208c0239b3bc7c661258e.svg"
              alt="ecosystem-support-program"
              css={image}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Container>
);

export default Clients;
