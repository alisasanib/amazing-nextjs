import React from 'react';
import Layout from '../src/components/layout';
import Gallery from '../src/components/gallery';
export default function Index() {
  return (
    <Layout>
        <div style={{marginTop:"100px"}}>
        <Gallery/>
        </div>
        
    </Layout>
  );
}
