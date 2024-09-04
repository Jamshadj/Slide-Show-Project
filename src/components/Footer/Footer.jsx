import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ p: 2, mt: 'auto', textAlign: 'center', bgcolor: 'background.paper' }}>
      <Typography variant="body2">
        &copy; 2024 Demo Presentation. All rights reserved. Contact us at info@example.com
      </Typography>
    </Box>
  );
};

export default Footer;