import React from 'react';
import Header from './Navigate';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
