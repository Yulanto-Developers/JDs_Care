'use client';

import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Fade } from 'react-awesome-reveal';

import Services from '../../api/service';
import sIcon from '@/public/images/icon/arrow-black.svg';
import hIcon from '@/public/images/icon/ser-01.svg';

interface ServiceItem {
  title: string;
  description: string;
  slug: string;
  sImg?: StaticImageData; // optional in case some items don't have an image
}

interface ServiceSectionProps {
  services?: ServiceItem[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ services = Services }) => {
  return (
    <section className="service pt-70 pb-80">
      <div className="container">
        <div className="row mt-none-30">
          {/* Left Column - Info */}
          <div className="col-lg-4 mt-30">
            <div className="service-info">
              <div className="sec-title--two">
                <Fade direction="down" triggerOnce={false} duration={1000} delay={9}>
                  <div>
                    <span className="sub-title ">
                      <Image src={hIcon} alt="Feature services icon" className='icon-cls' />
                      <span className='text-green'>
                      Feature-services
                      </span>
                    </span>
                  </div>
                </Fade>
                <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
                  <div>
                    <h2 className="title">
                      Our   <br /> <span className='text-green'>Comprehensive Services</span>
                    </h2>
                  </div>
                </Fade>
                <Fade direction="up" triggerOnce={false} duration={1400} delay={9}>
                  <div>
                    <p className="content ">
                     End-to-end revenue cycle management solutions tailored to your practice
                    </p>
                  </div>
                </Fade>
              </div>

             
            </div>
          </div>

          {/* Middle Column */}
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="service-all_item">
              {services.slice(0, 5).map((service, index) =>
                service.title ? (
                  <div className="service-box" key={`left-${index}`}>
                    <div className="service-item">
                      <div className="xb-item--holder mb-40">
                        <h3 className="xb-item--title text-green">{service.title}</h3>
                        <span className="xb-item--contact">{service.description}</span>
                      </div>
                      <div className="xb-item--icon ul_li_between">
                        <div className="xb-item--img">
                          {/* {service.sImg ? (
                            <Image src={service.sImg} alt={service.title} />
                          ) : (
                            <Image src={hIcon} alt={service.title} /> // fallback image
                          )} */}
                        </div>
                        {/* <Link
                          href={'/'}
                          className="xb-item--arrow"
                        >
                          <Image src={sIcon} alt="Arrow icon" />
                        </Link> */}
                      </div>
                      <Link
                        href={'/'}
                        className="xb-overlay"
                      ></Link>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="service-all_item">
              {services.slice(5, 9).map((service, index) =>
                service.title ? (
                  <div className="service-box" key={`right-${index}`}>
                    <div className="service-item">
                      <div className="xb-item--holder mb-40">
                        <h3 className="xb-item--title text-green">{service.title}</h3>
                        <span className="xb-item--contact">{service.description}</span>
                      </div>
                      <div className="xb-item--icon ul_li_between">
                        <div className="xb-item--img">
                          {/* {service.sImg ? (
                            <Image src={service.sImg} alt={service.title} />
                          ) : (
                            <Image src={hIcon} alt={service.title} /> // fallback
                          )} */}
                        </div>
                        {/* <Link
                          href={'/service-single'}
                          className="xb-item--arrow"
                        >
                          <Image src={sIcon} alt="Arrow icon" />
                        </Link> */}
                      </div>
                      {/* <Link
                        href={'/service-single'}
                        className="xb-overlay"
                      ></Link> */}
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
