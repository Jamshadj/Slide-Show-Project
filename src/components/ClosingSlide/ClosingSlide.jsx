import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import CommonSlideLayout from '../CommonSlideLayout/CommonSlideLayout';

const ClosingSlide = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:info@example.com';
  };

  return (
    <CommonSlideLayout title="Closing Slide">
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Thank you for your time!
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We hope you found this presentation valuable. If you have any questions or need further information, please feel free to reach out.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleContactClick}
        >
          Contact Us
        </Button>
        <Typography variant="body2" sx={{ mt: 4 }}>
          Or email us at: <a href="mailto:info@example.com" style={{ color: '#1976d2' }}>info@example.com</a>
        </Typography>
      </Box>
    </CommonSlideLayout>
  );
};

export default ClosingSlide;
