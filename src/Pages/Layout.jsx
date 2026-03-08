import React from 'react'
import Navbar from '../components/Commun/Navbar';
import Footer from '../components/Commun/Footer';

 const Layout = ({children}) => {
  return (
       <div >
      <Navbar />
      
      <main >
        {children}
      </main>
      
      <Footer />
    </div>
  )
}
export default Layout;
