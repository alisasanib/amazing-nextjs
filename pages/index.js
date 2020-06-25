import React, { useState, useEffect } from 'react';
import Layout from '../src/components/layout';
import Swiper from '../src/components/swiper';
export default function Index() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    // Update the document title using the browser API
    setShowSwiper(true);
  });
  return <Layout>{showSwiper ? <Swiper /> : null}</Layout>;
}
