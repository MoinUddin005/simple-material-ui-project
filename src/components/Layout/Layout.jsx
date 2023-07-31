import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
   return (
      <Box>
         <Container>
            <Header/>
            <Outlet />
            <Footer/>
         </Container>
         
      </Box>
   );
};

export default Layout;