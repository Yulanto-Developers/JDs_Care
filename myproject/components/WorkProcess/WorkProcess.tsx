import React from 'react';
import { Fade } from "react-awesome-reveal";
import hicon from '@/public/images/icon/process-icon.svg';
import pImg from '@/public/images/whyChoose/vector-2.png';
import pImg2 from '@/public/images/shape/pattern.png';
import sIcon1 from '@/public/images/icon/search01.svg';
import sIcon2 from '@/public/images/icon/user-icon.png';
import sIcon3 from '@/public/images/icon/clipboar02.svg';
import sIcon4 from '@/public/images/icon/medal-star.svg';
import Image, { StaticImageData } from 'next/image';

interface ProcessItem {
  id: string;
  title: string;
  subTitle: string;
  icon: StaticImageData | string; 
  direction: 'one' | 'two' | 'three' | 'four';
}

const Process: ProcessItem[] = [
  {
    id: "01",
    title: '99% Clean Claim Ratio',
    subTitle: 'Our industry-leading 99% clean claim ratio ensures first-pass acceptance, minimizing denials and accelerating your cash flow with faster reimbursements.',
    icon: sIcon1,
    direction: 'one',
  },
  {
    id: "02",
    title: '95%+ Collection Rate',
    subTitle: 'We consistently achieve 95% or higher collection rates through expert charge posting, payment posting, and aggressive accounts receivable follow-up.',
    icon: sIcon2,
    direction: 'two',
  },
  {
    id: "03",
    title: 'Complete Transparency',
    subTitle: 'Real-time dashboards and detailed reports give you full visibility into your revenue cycle performance.',
    icon: sIcon3,
    direction: 'three',
  },
  {
    id: "04",
    title: 'Regulatory Compliance',
    subTitle: 'Stay current with ever-changing regulations, coding updates, and payer requirements without the hassle.',
    icon: sIcon4,
    direction: 'four',
  },
];

const WorkProcess: React.FC = () => {
  return (
    <section className="process pt-40 pb-100 pos-rel bg-img" >
      <div className="container">
        <div className="sec-title--two text-center mb-90">
          <Fade direction='down' triggerOnce={false} duration={1000} delay={9}>
            <div>
              <div className="sub-title sub-title--strock wow fadeInDown" data-wow-duration="600ms">
                <Image src={hicon} alt="Process icon" className='icon-cls' />Why Choose
              </div>
            </div>
          </Fade>
          <Fade direction='up' triggerOnce={false} duration={1200} delay={9}>
            <div>
              <h2 className="title clr-white wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">
              JD's Care?
              </h2>
              <p className=" wow fadeInDown text-xl-cls" data-wow-delay="150ms" data-wow-duration="600ms">We deliver measurable results that impact your bottom line</p>
            </div>
          </Fade>
        </div>
        <div className="row flex-row-reverse">
          <div className="col-lg-6">
            <div className="sa-process_right">
              <Fade direction='right' triggerOnce={false} duration={1200} delay={9}>
                <div>
                  <div className="sa-process-image wow fadeInRight" data-wow-duration="600ms">
                    <Image className="updown" src={pImg} alt="Illustration" />
                  </div>
                </div>
              </Fade>
              <div className="process_shape">
                <Image src={pImg2} alt="Shape pattern" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sa-process_left">
              {Process.map((process, index) => (
                <div className={`process-item process-item--${process.direction}`} key={index}>
                  <div className="xb-item--icon">
                    <Image src={process.icon} alt={`${process.title} icon`} />
                  </div>
                  <h4 className="xb-item--title">{process.title}</h4>
                  <p className="xb-item--contact">{process.subTitle}</p>
                  <span className="xb-item--number">{process.id}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
