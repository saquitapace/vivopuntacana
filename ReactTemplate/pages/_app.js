import Head from 'next/head';
import React, { Fragment, useEffect, useState } from 'react';
import PreLoader from '../src/components/PreLoader';
import '../styles/globals.css';
import '../styles/tailwind-styles.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import config from '../src/config/store';
const { store, persistor } = config();

const MyApp = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [loader]);

  return (
    <Fragment>
      <Head>
        <title>Fioxen - Directory & Listings React NextJs Template</title>
        <link
          rel='shortcut icon'
          href='assets/images/favicon.ico'
          type='image/png'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&family=Quicksand:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      {loader && <PreLoader />}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
      {/* <Component {...pageProps} /> */}
    </Fragment>
  );
};
export default MyApp;
