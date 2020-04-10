import React from 'react';
import '../styles/global.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

const App = ({ Component, pageProps }) => (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
