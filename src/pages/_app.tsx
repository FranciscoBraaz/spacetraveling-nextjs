import '../styles/globals.css';
import { Header } from '../components/Header';
import Head from 'next/head';

import styled from 'styled-components';

const ContainerApp = styled.div`
  overflow: hidden;
`;

function MyApp({ Component, pageProps }) {
  return (
    <ContainerApp>
      <Head>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <Header />
      <Component {...pageProps} />
    </ContainerApp>
  );
}

export default MyApp;
