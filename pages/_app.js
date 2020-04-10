import React from 'react';
import '../styles/global.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

const App = ({ Component, pageProps }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default App;
