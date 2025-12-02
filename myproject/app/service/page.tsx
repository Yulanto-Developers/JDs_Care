'use client';

import React, { Fragment } from 'react';
import Link from 'next/link';
import iIcon from '@/public/images/icon/eye-icon.svg';
import Services from '../../api/service';
import WorkProcess from '../../components/WorkProcess/WorkProcess';
import Testimonial from '../../components/Testimonial/Testimonial';
import Header from '../../components/header/Header';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import icon from '@/public/images/icon/ser-01.svg';
import sIcon from '@/public/images/icon/arrow-black.svg';
import Image, { StaticImageData } from 'next/image';
import '../../styles/about.css'
import '../../styles/custome.css'


import { datas, categories } from '../../api/Expertise'

import fallbackImg from '@/public/images/service/service-img01.jpg';

interface Service {
  title?: string;
  description?: string;
  slug: string;
  sImg?: StaticImageData;
}

const ServicePage: React.FC = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <Header />

        {/* Page Title Section */}
        <section
          className="page-title pt-200 pos-rel bg_img  banner-overlay"
          style={{ backgroundImage: `url(/images/banner/about-banner.jpg)` }}
        >
          <div className="container">
            <div className="page-title-wrap">
              <div className="row mt-none-30 align-items-end">
                <div className="col-xl-9 col-lg-8 mt-30">
                  <div className="page-title-box">
                    <h2 className="title pb-120 text-white pl-40">Software Expertise</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="service pt-60 pb-90">
          <div className="container">
            <div className="sec-title--two text-center mb-60">
              <div className="sub-title xb-item--icon ">
                <Image src={iIcon} alt="Section icon" />
                Our Software Expertise
              </div>

              <h2 className="title">
                We are certified experts in leading medical billing and EHR platforms,
                ensuring seamless integration and maximum efficiency
              </h2>
            </div>

            {/* Bootstrap row + columns */}
            <div className="row row-gap-4">
              {datas.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6 ">

                  <div className="flip-card w-100">
                    <div className="flip-inner bg-white rounded-3 shadow">


                      <div className="flip-front p-4 rounded-3 d-flex flex-column">

                        <img
                          src={item.image.src}
                          alt={item.expertise}
                          className="w-100"
                          style={{
                            height: "190px",
                            objectFit: "cover",
                            borderRadius: "12px",
                          }}
                        />

                        <p className="bg-success text-white small d-inline-block px-3 py-1 rounded-pill mt-3">
                          {item.certificate}
                        </p>

                        <h3 className="h5 fw-bold mt-2">{item.expertise}</h3>

                        <div className="d-flex flex-wrap gap-2 mt-2">
                          <span className="px-3 py-1 bg-success-subtle text-success rounded">
                            {item.s1}
                          </span>
                          <span className="px-3 py-1 bg-success-subtle text-success rounded">
                            {item.s2}
                          </span>
                          <span className="px-3 py-1 bg-success-subtle text-success rounded">
                            {item.s3}
                          </span>
                        </div>

                      </div>
                      <div className="flip-back bg-white rounded-3 p-4 d-flex align-items-center justify-content-center">
                        <p className="text-center text-muted">{item.content}</p>
                      </div>



                    </div>
                  </div>

                </div>
              ))}
            </div>


            {/* CTA Button */}
            <div className="text-center mt-5">
              <Link href="/contact" className="thm-btn thm-btn--aso thm-btn--aso_yellow">
                Book a free consultation
              </Link>
            </div>
          </div>
        </section>

        <section className='service pt-50 pb-130'>
          <div className='container'>
            <div className="sec-title--two text-center mb-60">
              <div className="sub-title xb-item--icon ">
                <Image src={iIcon} alt="Section icon" />
                Billing Specialists
              </div>

              <h2 className="title">
                We have a huge team of medical billing specialists who have the required skill set and expertise to deliver the best quality services. Our team has in-depth knowledge and expertise in the following medical billing specialties:
              </h2>
            </div>
            <div className="container py-4">
              <div className="row g-3">

                {categories.map((item) => (
                  <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">

                    <button
                      className={`
            w-100 py-3 px-2 rounded-3 border 
            fw-semibold text-center 
            btn shadow-sm
           
                     hover-active border-success
                         
          `}
                      style={{ transition: "0.3s" }}
                    >
                      {item.name}
                    </button>

                  </div>
                ))}

              </div>
            </div>

          </div>

        </section>

        {/* Additional Sections */}
        {/* <WorkProcess />
        <Testimonial tClass="pt-130" />
        <CtaSection /> */}
      </div>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ServicePage;
