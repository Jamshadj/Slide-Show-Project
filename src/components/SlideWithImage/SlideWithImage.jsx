import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideWithImage = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowBackIosNew />,
    nextArrow: <ArrowForwardIos />,
    customPaging: (i) => (
      <Box
        sx={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'primary.main',
          border: '1px solid #fff',
        }}
      />
    ),
    appendDots: (dots) => (
      <Box
        sx={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {dots}
      </Box>
    ),
  };

  return (
    <Box sx={{ position: 'relative', maxWidth: '100%' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ textAlign: 'center',  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', }}>
            <img
              src={image.url}
              alt={`Slide Image ${index + 1}`}
              style={{
                maxWidth: '200%',
                height: 'auto',
                borderRadius: '8px',
                marginLeft:"auto",
                marginRight:"auto",
               padding:"2rem"
              }}
            />
            {image.caption && (
              <Typography variant="caption" color="textSecondary" display="block" sx={{ mt: 2 }}>
                {image.caption}
              </Typography>
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

// Define prop types for validation
SlideWithImage.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      caption: PropTypes.string,
    })
  ).isRequired,
};

export default SlideWithImage;
