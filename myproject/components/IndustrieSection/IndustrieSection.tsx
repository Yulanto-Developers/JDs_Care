'use client';

import React from 'react';
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import hicon from '@/public/images/icon/building.svg';
import sIcon1 from '@/public/images/Our Software Expertise/img-1.png';
import sIcon2 from '@/public/images/Our Software Expertise/img-2.png';
import sIcon3 from '@/public/images/Our Software Expertise/img-3.png';
import sIcon4 from '@/public/images/Our Software Expertise/img-4.png';
import sIcon5 from '@/public/images/Our Software Expertise/img-5.png';
import sIcon6 from '@/public/images/Our Software Expertise/img-6.png';
import sIcon7 from '@/public/images/Our Software Expertise/img-7.png';
import sIcon8 from '@/public/images/Our Software Expertise/img-8.png';
// import sIcon9 from '@/public/images/industrie/img09.png';
// import sIcon10 from '@/public/images/industrie/img10.png';
import Image, { StaticImageData } from 'next/image';

interface IndustryItem {
  icon: StaticImageData | string;
  title: string;
  description:string;
}

const Industrie: IndustryItem[] = [
  { icon: sIcon1, title: 'Epic Systems',description:
      "Deep expertise in Epic EHR and revenue cycle management. Our certified specialists handle complex billing workflows, ensuring accurate claim submissions and optimal reimbursement rates.", },
  { icon: sIcon2, title: 'Cerner',description:
      "Advanced proficiency in Cerner's revenue cycle solutions. We streamline your billing operations, reduce denials, and accelerate payment cycles through expert configuration and optimization.", },
  { icon: sIcon3, title: 'Athenahealth',description:
      "Comprehensive experience with athenahealth's cloud-based platform. Our team maximizes your practice's efficiency with automated workflows, real-time eligibility checks, and proactive denial prevention.", },
  { icon: sIcon4, title: 'Kareo',description:
      "Specialized in Kareo billing for small to mid-sized practices. We leverage Kareo's intuitive platform to simplify your billing process, improve cash flow, and reduce administrative burden.", },
  { icon: sIcon5, title: 'AdvancedMD',description:
      "Expert handling of AdvancedMD's comprehensive medical software suite. From scheduling to billing, we optimize every touchpoint to enhance your practice's financial performance.", },
  { icon: sIcon6, title: 'NextGen Healthcare',description:
      "Proven expertise with NextGen's enterprise solutions. Our specialists navigate complex billing scenarios, ensure compliance, and maximize revenue for specialty practices and healthcare organizations.", },
  { icon: sIcon7, title: 'eClinicalWorks',description:
      "Extensive experience with eClinicalWorks EHR and practice management. We help you leverage the platform's powerful billing tools to reduce claim rejections and accelerate payments.", },
  { icon: sIcon8, title: 'Allscripts',description:
      "Proficient in Allscripts' diverse healthcare IT solutions. Our team ensures accurate billing, timely submissions, and comprehensive reporting to drive your practice's success.", },
  // { icon: sIcon9, title: 'Healthcare' },
  // { icon: sIcon10, title: 'Automotive' },
];

const IndustrieSection: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="industrie m-lr pt-70 pb-70">
      <div className="industrie-wrap sec-bg pos-rel pt-130 pb-130">
        <div className="container">
          <div className="sec-title--two text-center mb-0">
            <Fade direction='down' triggerOnce={false} duration={1000} delay={9}>
              <div>
                <div className="sub-title wow fadeInDown" data-wow-duration="600ms">
                  <Image src={hicon} alt="Industries icon" className='icon-cls' />
                  <span className='text-green'>
                  Healthcare Solutions Experts
                  </span>
                </div>
              </div>
            </Fade>
            <Fade direction='up' triggerOnce={false} duration={1200} delay={9}>
              <div>
                <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">
                 Our Software <span className='text-green'>Expertise</span> 
                </h2>
              </div>
            </Fade>
          </div>
     <div className="row row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
  {Industrie.map((industry, i) => (
    <div className="col" key={i}>
      <div
        className="indus-item position-relative text-center overflow-hidden"
        onMouseEnter={() => setHoverIndex(i)}
        onMouseLeave={() => setHoverIndex(null)}
        style={{ cursor: "pointer", borderRadius: "0.5rem" }}
      >
        {/* Image */}
        <div className="xb-img">
          <Image
            src={industry.icon}
            alt={industry.title}
            className="img-fluid"
          />
        </div>

        {/* Title */}
        <h3
          className="xb-title mt-2 text-green"
          // style={{
          //   transition: "opacity 0.3s",
          //   opacity: hoverIndex === i ? 0 : 1,
          // }}
        >
          {industry.title}
        </h3>

        {/* Description overlay */}
        <div
          className="description-overlay d-flex justify-content-center align-items-center text-white"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.77)",
            textAlign: "center",
            padding: "1rem",
            opacity: hoverIndex === i ? 1 : 0,
            transition: "opacity 0.3s",
            borderRadius:"15px",
            fontSize:"13px"
          }}
        >
          <p className="m-0">{industry.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>



          <div className="xb-btn text-center mt-60">
            <Link href="/contact" className="thm-btn thm-btn--aso">Book a free consultation</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustrieSection;
