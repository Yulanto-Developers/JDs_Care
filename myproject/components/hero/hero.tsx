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
      // style={{ backgroundImage: `url('/images/bg/hero-bg02.jpg')` }}
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

                {/* <Fade direction="up" triggerOnce duration={1200}>
                  <p
                    className="xb-item--content wow fadeInUp"
                    data-wow-delay="100ms"
                    data-wow-duration="600ms"
                  >
                    (like 0 to 1000 new sales per month kind of results)
                  </p>
                </Fade> */}

                <Fade direction="up" triggerOnce duration={1400}>
                  {/* <ul
                    className="xb-item--item list-unstyled wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="600ms"
                  >
                    <li>
                      <i className="far fa-check"></i> Recover lost traffic
                    </li>
                    <li>
                      <i className="far fa-check"></i> Boost organic traffic
                    </li>
                    <li>
                      <i className="far fa-check"></i> Get more sales
                    </li>
                  </ul> */}
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
                {/* <Fade direction="up" triggerOnce duration={1700}>
                  <div
                    className="xb-btn mt-40 wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="600ms"
                  >
                    <Link href="/" className="thm-btn thm-btn--aso thm-btn--aso_yellow">
                     Learn more
                    </Link>
                  </div>
                </Fade> */}
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
                  </div>
                </Fade>


                <div className="out-image">
                  <div className="img img--one updown-2">
                    <Fade direction="down" triggerOnce duration={1200}>
                      <Image
                        className="wow fadeInDown img-rounded"
                        data-wow-delay="100ms"
                        data-wow-duration="600ms"
                        src="/images/banner/small-1.jpg"
                        alt="Floating Image 1"
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </Fade>
                  </div>

                  <div className="img img--two updown-3">
                    <Fade direction="up" triggerOnce duration={1200}>
                      <Image
                        className="wow fadeInUp"
                        data-wow-delay="300ms"
                        data-wow-duration="600ms"
                        src="/images/banner/small-2.jpg"
                        alt="Floating Image 2"
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </Fade>
                  </div>
                  {/* <div className="img img--three updown-4">
                    <Fade direction="up" triggerOnce duration={1200}>
                      <Image
                        className="wow fadeInUp"
                        data-wow-delay="300ms"
                        data-wow-duration="600ms"
                        src="/images/banner/small-3.jpg"
                        alt="Floating Image 2"
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </Fade>
                  </div> */}
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
