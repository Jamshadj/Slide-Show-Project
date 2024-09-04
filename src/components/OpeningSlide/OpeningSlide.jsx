import React from 'react';
import { Typography } from '@mui/material';
import CommonSlideLayout from '../CommonSlideLayout/CommonSlideLayout';

const OpeningSlide = () => {
  return (
    <CommonSlideLayout title="Welcome to the Presentation">
      <Typography variant="body1">
        This is an opening slide for the presentation. Use it to introduce the topic or set the stage for what's to come.
      </Typography>
    </CommonSlideLayout>
  );
};

export default OpeningSlide;