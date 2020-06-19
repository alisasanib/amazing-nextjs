import React from 'react';
import Swiper from 'react-id-swiper';
// import Image1 from '../src/assets/alex-wong-l5Tzv1alcps-unsplash.jpg'
// import 'swiper/css/swiper.css';
import './index.css';
const PaginationDynamicBullet = () => {
  const params = {
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    ContainerEl: 'section',
    WrapperEl: 'section',
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
  };
  return (
    <Swiper {...params}>
      <div
        style={{ backgroundImage: 'url(/alex-wong-l5Tzv1alcps-unsplash.jpg)' }}
        className="image_firstpage"
      ></div>
      <div
        style={{
          backgroundImage: 'url(/lance-anderson-QdAAasrZhdk-unsplash.jpg)',
        }}
        className="image_firstpage"
      ></div>
      <div
        style={{
          backgroundImage: 'url(/maarten-deckers-T5nXYXCf50I-unsplash.jpg)',
        }}
        className="image_firstpage"
      ></div>
    </Swiper>
  );
};
export default PaginationDynamicBullet;
