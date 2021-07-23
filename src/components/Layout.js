import React from 'react';
import NavBar from './navBar/NavBar';
import TopBar from './topBar/TopBar';

const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
