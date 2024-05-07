'use client'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './productSlider.css'
import React, { useState, useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const images = [
  'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg',
  'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_2.jpg',
  'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_11.jpg',
  'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_15.jpg',
  'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_20.jpg',
];


// В компонентах CustomPrevArrow и CustomNextArrow
const CustomPrevArrow = ({ onClick }: { onClick: () => void }) => (
  <IconButton
    onClick={onClick}
    sx={{
      backgroundColor: 'transparent',
      width: '28px',
      height: '28px',
      padding: '0px',
      opacity: 0.48,
      '&:hover': {
        opacity: 1,
      },
    }}
  >
    <ChevronLeftIcon style={{ color: '#fff' }} />
  </IconButton>
);

const CustomNextArrow = ({ onClick }: { onClick: () => void }) => (
  <IconButton
    onClick={onClick}
    sx={{
      backgroundColor: 'transparent',
      width: '28px',
      height: '28px',
      padding: '0px',
      opacity: 0.48,
      '&:hover': {
        opacity: 1,
      },
    }}
  >
    <ChevronRightIcon style={{ color: '#fff' }} />
  </IconButton>
);


function AsNavFor() {
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);
  const [centerSlideIndex, setCenterSlideIndex] = useState<number>(2);
  const [centerSlideIndexSmall, setCenterSlideIndexSmall] = useState<number>(2);

  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current || undefined);
    setNav2(sliderRef2.current || undefined);
  }, []);

  const handleAfterChange = (currentSlide: number) => {
    console.log('press', currentSlide)
    setCenterSlideIndex(currentSlide );
    setCenterSlideIndexSmall(currentSlide );
  };
  const handleSliderPrev = () => {
    if (nav1) {
      nav1.slickPrev();
    }
  };

  const handleSliderNext = () => {
    if (nav1) {
      nav1.slickNext();
    }
  };


  return (
    <Box sx={{ maxWidth: '700px', p: '32px', m:{sm: '0 auto'}}}>
      <div className="slider-container mySlider">
        <Box sx={{ mb: 2, position: 'relative' }}>
          <Slider asNavFor={nav2} ref={sliderRef1} className="mySl" >
            {images.map((item, index) => (
              <Box key={index} sx={{ maxWidth: '645px', maxHeight: '645px' }}>
                <Avatar
                  alt="Remy Sharp"
                  src={item}
                  sx={{ width: '100%', height: '100%', borderRadius: '12px', m: 'auto' }}
                />
              </Box>
            ))}
          </Slider>
          <Box
            sx={{
              backdropFilter: 'blur(6px)',
              backgroundColor: 'rgba(22, 28, 36, 0.48)',
              zIndex: 9,
              display: 'inline-flex',
              WebkitBoxAlign: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: '24px',
              right: '24px',
              padding: '2px',
              color: 'rgb(255, 255, 255)',
              borderRadius: '8px',
            }}
          >
            <CustomPrevArrow onClick={handleSliderPrev} />
            <Typography variant="body2">{`${centerSlideIndex + 1}/${images.length}`}</Typography>
            <CustomNextArrow onClick={handleSliderNext} />
          </Box>
        </Box>

        <Box sx={{ maxWidth: '384px', height: '64px', m: 'auto' }}>
          <Slider
            asNavFor={nav1}
            ref={sliderRef2}
            slidesToShow={5}
            swipeToSlide
            focusOnSelect
            className="mySlider"
            centerPadding="0"
            centerMode
            afterChange={handleAfterChange}
          >
            {images.map((item, index) => (
              <Box key={index} sx={{ width: '64px' }}>
                <Avatar
                  // className={`avatar-container ${
                  //   centerSlideIndex === index - 1 || (centerSlideIndex === 0 && index === 1)
                  //     ? 'active'
                  //     : ''
                  // }`}
                  // className={`avatar-container ${centerSlideIndexSmall  === index  ? 'active' : ''}`}
                  className="avatar-container border"
                  alt="Remy Sharp"
                  src={item}
                  sx={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </div>
    </Box>
  );
}

export default AsNavFor;
