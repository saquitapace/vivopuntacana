import NextNProgress from 'nextjs-progressbar';

import ClientClerkProvider from '@/src/providers/ClerkClientProvider';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import PreLoader from '../src/components/PreLoader';
import config from '../src/config/store';
import '../styles/globals.css';
import '../styles/tailwind-styles.css';

const store = config();

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLoading(false);

    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);
    const handleRouteChangeError = () => setLoading(false);

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  if (!mounted) {
    return <PreLoader />;
  }

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
      <NextNProgress />

      {loading && <PreLoader />}

      <ClientClerkProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ClientClerkProvider>
    </Fragment>
  );
};

export default MyApp;
