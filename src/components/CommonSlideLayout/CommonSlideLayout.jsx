import React from 'react';
import { Paper, Box, Typography } from '@mui/material';

const CommonSlideLayout = ({ title, children }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        m: 2,
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ width: '100%', maxWidth: 800, mt: 2 }}>{children}</Box>
    </Paper>
  );
};

export default CommonSlideLayout;