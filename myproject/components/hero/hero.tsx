'use client';

import React from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../../styles/custome.css'
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      className="hero o-hidden hero-style-two pos-rel pt-120 pb-40 bg_img"

    >
      <div className="container">
        <div className="hero_wrap">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="xb-hero">
                <Fade direction="up" triggerOnce duration={1000}>
                  <h1 className="xb-item--title wow fadeInUp" data-wow-duration="600ms">
                    Streamline Your
                    <br /> Healthcare  <span>Revenue Cycle</span>
                  </h1>
                </Fade>



                <Fade direction="up" triggerOnce duration={1400}>

                  <p>Expert medical billing solutions that maximize your revenue, reduce denials, <br /> and let you focus on patient care.</p>
                </Fade>

                <Fade direction="up" triggerOnce duration={1600}>
                  <div className='d-flex justify-content-betweeen gap-5'>


                    <div
                      className="xb-btn mt-40 wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="600ms"
                    >



                      <Link href="/contact" className="thm-btn thm-btn--aso thm-btn--aso_yellow">
                        Get Started Today
                      </Link>
                    </div>
                    <div className="xb-btn mt-40 wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="600ms">

                      <Link href="/" className="thm-btn thm-btn--aso thm-btn--aso_yellows">
                        Learn more
                      </Link>
                    </div>

                  </div>
                </Fade>

              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-right_img pos-rel">
                <Fade direction="right" triggerOnce duration={1200}>
                  <div className="relative w-full">
                    <Image
                      className="wow fadeInRight img-rounded"
                      data-wow-duration="600ms"
                      src="/images/banner/banner-img.jpg"
                      alt="Main Hero"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                    <div className='absolute-cls bg-white abs-hover '>
                      <p className='aboslute-txt'>99%</p>
                      <p>
                        Clean Claims Ratio</p>
                    </div>
                    <div className='absolute-cls-1 bg-white abs-hover '>
                      <p className='aboslute-txt'>95%
                      </p>
                      <p>
                        Collection Rate</p>
                    </div>
                    <div className='absolute-cls-2 bg-white abs-hover '>
                      <p className='aboslute-txt'>50%
                      </p>
                      <p>
                        Revenue Growth</p>
                    </div>
                  </div>
                </Fade>


                <div className='relative '>

                  <div></div>
                  <div></div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-scroll-down active">
          <AnchorLink href="#about" aria-label="Scroll to top" className="scrollspy-btn">
            <span></span>
            <span></span>
            <span></span>
          </AnchorLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
