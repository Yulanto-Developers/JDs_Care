'use client';

import React from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import icon from '@/public/images/icon/magic.png';
import about1 from '@/public/images/icon/airdrop.png';
import about2 from '@/public/images/icon/people.png';
import about3 from '@/public/images/icon/microphone.png';
import { MdHealthAndSafety } from "react-icons/md";
import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
});
const About: React.FC = () => {

  return (
    <section id="about" className="about m-lr">
      <div className="about-wrapper sec-bg pos-rel pb-90">
        <div className="container">


          <div className="row align-items-center justify-content-end">
            {/* Left Column (Image) */}
            <div className="col-lg-5 mt-40">
              <div className="about-left">
                <img
                  src="/images/about/about-img.jpg"
                  alt="About JD's Care RCM"
                  className="img-about-cls rounded shadow"
                />
              </div>
            </div>

            {/* Right Column (Content) */}
            <div className="col-lg-7 mt-40">
              <div className="about-right">
                
               
                <div className="sec-title--two mb-4">
                  <Fade direction="down" triggerOnce={false} duration={1000} delay={9}>
                   <div className="sub-title wow fadeInDown" data-wow-duration="600ms">
                    

                   
                  <Image src={icon} alt="Industries icon" />
                  <span className='text-green'>
                 Welcome
                  </span>
                </div>
                  </Fade>

                  <Fade direction="down" triggerOnce={false} duration={1500} delay={9}>
                    <h2 className="title">
                      <span className="fs-3 d-block">About JD's Care</span>
                      <span className="text-green d-block">RCM Tech Solutions</span>
                    </h2>
                  </Fade>
                </div>

                {/* Description */}
                <div className="xb-item--holder">
                  <p className="xb-item--content mb-3">
                    We are a leading medical billing and revenue cycle management company
                    dedicated to helping healthcare providers optimize their financial
                    performance. With over a decade of experience, we understand the
                    complexities of healthcare billing and the challenges providers face.
                  </p>
                  <p className="xb-item--content mb-4">
                    Our team of certified medical coders and billing specialists leverages
                    cutting-edge technology and industry best practices to deliver
                    exceptional results. We partner with practices of all sizes—from solo
                    practitioners to large healthcare systems—providing customized
                    solutions that drive revenue growth and operational efficiency.
                  </p>

                  {/* Feature List */}
                  <div className={`${marcellus.className} row pt-3`}>
                    <div className="col-6">
                      <p className="mb-2 fw-bold d-flex align-items-center">
                        <span className="font-size-clss me-2"><MdHealthAndSafety /></span> HIPAA Compliant
                      </p>
                      <p className="mb-2 fw-bold d-flex align-items-center">
                        <span className="font-size-clss me-2"><MdHealthAndSafety /></span> Advanced Technology
                      </p>
                    </div>

                    <div className="col-6">
                      <p className="mb-2 fw-bold d-flex align-items-center">
                        <span className="font-size-clss me-2"><MdHealthAndSafety /></span> Certified Coders
                      </p>
                      <p className="mb-2 fw-bold d-flex align-items-center">
                        <span className="font-size-clss me-2"><MdHealthAndSafety /></span> Dedicated Support
                      </p>
                    </div>
                  </div>
                    <div
              className="xb-btn text-center mt-30 wow fadeInUp"
              data-wow-duration="600ms"
            >
              <Fade direction="up" triggerOnce={false} duration={1500} delay={9}>
                <Link href="/about" className="thm-btn thm-btn--aso">
                  About Us
                </Link>
              </Fade>
            </div>
                </div>
              </div>
            </div>


            {/* Button */}
          
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
