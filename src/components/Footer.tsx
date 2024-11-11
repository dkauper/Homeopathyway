import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ 
      height: 50, // This should match the FOOTER_HEIGHT in App.tsx
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
      color: 'white',
    }}>
      <Typography variant="body2" color="text.secondary" align="center">
      © {new Date().getFullYear()} Homeopathy Way. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;