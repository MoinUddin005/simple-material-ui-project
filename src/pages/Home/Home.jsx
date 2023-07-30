/* eslint-disable no-unused-vars */
import React from 'react';
import Branding from './Branding/Branding';
import Brands from './Brands/Brands';
import Services from './Services/Services';
// import Faq from './Faq/Faq';
// import OurWorks from './OurWorks/OurWorks';

const Home = () => {
   return (
      <div>
         <Branding />
         <Brands />
         <Services />
         {/* <OurWorks />
         <Faq /> */}
        
      </div>
   );
};

export default Home;