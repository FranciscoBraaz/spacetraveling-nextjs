import '../styles/globals.css';
import { Header } from '../components/Header';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
