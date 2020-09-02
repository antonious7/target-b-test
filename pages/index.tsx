import React, { useEffect } from 'react';
import { NODE_ENV } from '../config/config';
import '../theme/global.scss';
import withApolloClientStatic from '../lib/with-apollo-client-static';
import TextInput from '../components/HomePage/TextInput/TextInput';

const HomePage: React.FunctionComponent = () => {
  useEffect(() => {
    import('webfontloader').then((WebFont) => WebFont.load({
      google: {
        families: ['Montserrat'],
      },
    }));

    if (NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => {
          // eslint-disable-next-line no-console
          console.log('service worker registration successful');
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.warn('service worker registration failed', err.message);
        });
    }
  }, []);
  return (
    <>
      <main>
        <TextInput />
      </main>
    </>
  );
};

export default withApolloClientStatic(HomePage);
