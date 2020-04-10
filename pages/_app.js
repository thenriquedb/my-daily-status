import React from 'react';
import '../styles/global.css';

import Header from '../components/Header';

const App = ({ Component, pageProps }) => (
  <>
    <Header />
    <Component {...pageProps} />
  </>
);

export default App;
