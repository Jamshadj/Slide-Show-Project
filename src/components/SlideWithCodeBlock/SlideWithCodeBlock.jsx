import React from 'react';
import { Box, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CommonSlideLayout from '../CommonSlideLayout/CommonSlideLayout';

const SlideWithCodeBlock = ({ codeString, language = 'javascript' }) => {
  return (
    <CommonSlideLayout title="Code Block Slide">
      <Box sx={{ p: 2, borderRadius: 2, boxShadow: 1, backgroundColor: 'background.paper' }}>
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          {language.toUpperCase()} Code
        </Typography>
        <SyntaxHighlighter language={language} style={atomDark} showLineNumbers>
          {codeString}
        </SyntaxHighlighter>
      </Box>
    </CommonSlideLayout>
  );
};

export default SlideWithCodeBlock;
