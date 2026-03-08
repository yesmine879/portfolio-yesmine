import React from 'react';
import Navbar from '../components/Commun/Navbar';
import Footer from '../components/Commun/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;