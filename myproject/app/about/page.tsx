'use client';

import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import icon from '@/public/images/icon/magic-icon.svg';
import FeaturesSection from './Features';
import WhyChoose from './WhyChoose';
import FunfactSection from './Funfact';
import Roadmap from './Roadmap';
import AwardSection from './AwardSection';
import GallerySection from '../career/Gallery';
import Image from 'next/image';
import WorkSection from '../team/work';
import '../../styles/about.css'
import '../../styles/custome.css'

const AboutUsPage: React.FC = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <Header />
        <section
          className="page-title pt-200 pos-rel bg_img banner-overlay"
          style={{ backgroundImage: `url(/images/banner/about-banner.jpg)` }}
        >
          <div className="container">
            <div className="page-title-wrap">
              <div className="row mt-none-30 align-items-end">
                <div className="col-xl-9 col-lg-8 mt-30">
                  <div className="page-title-box">
                    <h2 className="title pb-120 text-green pl-40">About Us</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="about-video pt-75">
          <div className="container">
            <div className="career_video">
              <video loop muted playsInline autoPlay>
                <source src="/images/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div> */}

        <FeaturesSection />
        <div className='pt-50' style={{ backgroundColor: '#f6f6f8' }}>
          <WorkSection />
          {/* <FunfactSection /> */}
        </div>
        {/* <Roadmap /> */}
        {/* <AwardSection /> */}
        {/* <GallerySection pClass="pt-130" /> */}
        {/* <CtaSection /> */}
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default AboutUsPage;
