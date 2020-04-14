import React from 'react';
import '../styles/global.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

const App = ({ Component, pageProps }) => (
  <div className="component-container ">
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default App;
