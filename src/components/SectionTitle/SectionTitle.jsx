/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
const SectionTitle = ({ title, colored, sx }) => {
   return (
      <div>
         <Typography
            sx={{
               fontSize: '34px',
               fontWeight: 'bold',
               textAlign: 'center',
               ...sx,
            }}
         >
            {title}{' '}
            {colored && <span style={{ color: '#7AB259' }}>{colored}</span>}
         </Typography>
      </div>
   );
};

export default SectionTitle;