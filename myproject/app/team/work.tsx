'use client';

import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Fade } from 'react-awesome-reveal';
import icon1 from '@/public/images/icon/tp-work-icon01.svg';
import icon2 from '@/public/images/icon/tp-work-icon02.svg';
import icon3 from '@/public/images/icon/tp-work-icon03.svg';
import icon4 from '@/public/images/icon/tp-work-icon04.svg';
import icon5 from '@/public/images/icon/tp-work-icon05.svg';
import icon6 from '@/public/images/icon/tp-work-icon06.svg';
import iIcon from '@/public/images/icon/eye-icon.svg';
import iIcon2 from '@/public/images/icon/sms-white-icon01.svg';


import { details, founder1, founder2 } from '../../api/Founder';

interface WorkItem {
  id: number;
  icon: StaticImageData;
  title: string;
  content: string;
}

interface WorkSectionProps {
  bg?: string;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    icon: icon1,
    title: '99% Clean Claim Ratio',
    content:
      'Our industry-leading 99% clean claim ratio ensures first-pass acceptance, minimizing denials and accelerating your cash flow with faster reimbursements.',
  },
  {
    id: 2,
    icon: icon2,
    title: '95%+ Collection Rate',
    content:
      'We consistently achieve 95% or higher collection rates through expert charge posting, payment posting, and aggressive accounts receivable follow-up.',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Complete Transparency',
    content:
      'Real-time dashboards and detailed reports give you full visibility into your revenue cycle performance.',
  },
  {
    id: 4,
    icon: icon4,
    title: 'Regulatory Compliance',
    content:
      'Stay current with ever-changing regulations, coding updates, and payer requirements without the hassle.',
  },

];

const WorkSection: React.FC<WorkSectionProps> = ({ bg }) => {
  return (
    <section className={`work pb-130 ${bg || ''}`}>
      <div className="container">
        <div className="sec-title--two text-center mb-60">
          <div className="sub-title">
            <Image src={iIcon} alt="Section icon" />
            Why Choose us
          </div>
          <h2 className="title">We deliver measurable results that impact your bottom line</h2>
        </div>

        {/* <Fade> */}

        <div className="tp-work-wrapp">
          <div className="row mt-none-30">
            {workItems.map((item) => (
              <div className="col-lg-6 mt-30" key={item.id}>
                <div className="tp-work-item">
                  <div className="xb-item--inner ul_li">
                    <div className="xb-item--icon">
                      <Image src={item.icon} alt={item.title} />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title">{item.title}</h3>
                      <p className="xb-item--content">{item.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
        <div>
          <div className="sec-title--two text-center mb-60 mt-50">
            <div className="sub-title">
              <Image src={iIcon} alt="Section icon" />
              Meet Our Leadership
            </div>

            <h2 className="title pb-30">
              Experienced professionals driving excellence in revenue cycle management
            </h2>
            <Fade direction="up" triggerOnce={false} duration={1000} delay={9}>
              <div className="container mx-auto row ">
                <div className="col-12 bg-found p-3 rounded-2">

                  {founder1.map((item, index) => (
                    <div key={index} className="row align-items-center ">


                      <div className="col-lg-4 pb-4">
                        <div className="d-flex flex-column gap-4">
                          {details.map((it, ind) => (
                            <div
                              key={ind}
                              className="px-3 py-2 rounded-3"
                              style={{ background: "#ffffffff" }}
                            >
                              <h1 className="fw-bold text-success">{it.d1}</h1>
                              <p className="text-secondary">{it.d2}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CENTER – Founder Image */}
                      <div className="col-lg-4 text-center">
                        <Image
                          src={item.img}
                          alt={item.name}
                          className="rounded-4 img-css"
                        // height={300}
                        // width={200}
                        />
                      </div>

                      {/* RIGHT – Founder Info */}
                      <div className="col-lg-4">
                        <h3 className="fw-bold text-dark pt-2 text-start text-left">{item.name}</h3>
                        <h5 className="text-success text-start text-green pt-2 mb-3">{item.job}</h5>
                        <p className="text-secondary text-justify text-black">{item.content}</p>
                      </div>

                    </div>
                  ))}

                </div>
              </div>
            </Fade>
          </div>

      <div className="container mx-auto">
  <div className="row justify-content-center">
    {founder2.map((item, index) => (
      <div key={index} className="col-lg-4 col-md-6 mb-4">

        <div className="founder-card">

          <div className="image-wrapper">
            <Image src={item.img} alt={item.name} className="founder-img" />

            {/* Bottom name + job */}
            <div className="info-bottom">
              <h4>{item.name}</h4>
              <p>{item.job}</p>
            </div>

            {/* Hover overlay */}
            <div className="overlay">
              <p className="hover-text">{item.content}</p>
            </div>

          </div>

        </div>

      </div>
    ))}
  </div>
</div>




        </div>
      </div>
    </section >
  );
};

export default WorkSection;
