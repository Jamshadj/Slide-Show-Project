import React from 'react';
import { Box } from '@mui/material';
import CommonSlideLayout from '../CommonSlideLayout/CommonSlideLayout';

const SlideWithPythonCompiler = () => {
  return (
    <CommonSlideLayout title="Python Code Compiler Slide">
      <Box sx={{ height: '80vh', border: '1px solid #ccc' }}>
        <iframe
          src="https://www.programiz.com/python-programming/online-compiler"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="Programiz Python Compiler"
        ></iframe>
      </Box>
    </CommonSlideLayout>
  );
};

export default SlideWithPythonCompiler;
