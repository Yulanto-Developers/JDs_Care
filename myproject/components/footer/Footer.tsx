'use client';

import React, { FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon1 from '@/public/images/icon/sms-white.svg';
import icon2 from '@/public/images/icon/call-white.svg';
import icon3 from '@/public/images/icon/location.svg';
import icon4 from '@/public/images/icon/sms02.svg';
import Services from '../../api/service';

interface FooterProps { }

const SubmitHandler = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer
      className="footer footer-style-two pt-200 bg_img pos-rel"
      style={{ backgroundColor: '#268415' }}
    >
      <div className="container">
        <div className="xb-footer pt-120">
          {/* Contact Info */}
          <div className="footer-info ul_li_between">
            <div className="info-item ul_li">
              <div className="xb-item--icon">
                <span>
                  <Image src={icon1} alt="Email Icon" />
                </span>
              </div>
              <div className="xb-item--holder">
                <p className="xb-item--content">Write to us</p>
                <h4 className="xb-item--title"><a href="mailto:info@jdscarercmtechsolutions.com"></a> Info@jdscarercmtechsolutions.com</h4>
              </div>
            </div>
            <div className="info-item ul_li">
              <div className="xb-item--icon clr-blue">
                <span>
                  <Image src={icon2} alt="Call Icon" />
                </span>
              </div>
              <div className="xb-item--holder">
                <p className="xb-item--content">Call Us (USA)</p>
                <h4 className="xb-item--title">+(281) 270-3963</h4>
              </div>
            </div>
            <div className="info-item ul_li">
              <div className="xb-item--icon clr-sky">
                <span>
                  <Image src={icon3} alt="Location Icon" />
                </span>
              </div>
              <div className="xb-item--holder">
                <p className="xb-item--content">Our Office</p>
                <h4 className="xb-item--title">311 Elm Street, Ste 270-1113 <br />
                  Cincinnati, OH 45202<br />
                  United States</h4>
              </div>
            </div>
          </div>

          {/* Footer Widgets */}
          <div className="footer-inner mt-70 mb-100 ul_li_between align-items-start">
            {/* Newsletter */}
            <div className="sa-newslatter footer-widget">
              <span className="xb-item--sub-title">JDs Care</span>
              <p className="xb-item--content text-justify clr-white">
                We provide expert handling of AdvancedMD’s comprehensive medical software suite. From scheduling to billing, we optimize every touchpoint to enhance your practice’s financial performance and ensure seamless operations.
              </p>
              {/* <form className="xb-item--input_field pos-rel" onSubmit={SubmitHandler}>
                <input type="email" name="gmail" id="text6" placeholder="Enter your email" required />
                <div className="img">
                  <Image src={icon4} alt="Mail Icon" />
                </div>
                <button type="submit" className="xb-item--btn">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form> */}
              <span className="xb-item--text">
                By continuing, you agree to innomax{' '}
                <Link href="/terms-conditions">Terms</Link> of Use and{' '}
                <Link href="/privacy-policy">Privacy Policy</Link>
              </span>
            </div>

            {/* Company Links */}
            <div className="footer-widget">
              <span className="xb-item--sub-title">Menu</span>
              <ul className="xb-item--holder list-unstyled">
                <li className="xb-item--list"><Link href="/">Home</Link></li>
                <li className="xb-item--list"><Link href="/">About Us</Link></li>
                <li className="xb-item--list"><Link href="/">Service</Link></li>
                <li className="xb-item--list"><Link href="/">Our blog</Link></li>
                <li className="xb-item--list"><Link href="/">Why US</Link></li>
                {/* <li className="xb-item--list"><Link href="/casestudy">Our Cases</Link></li> */}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-widget">
              <span className="xb-item--sub-title">Our Services</span>
              <ul className="xb-item--holder list-unstyled">
                {Services.slice(0, 6).map((service, index) => (
                  <li key={index} className="xb-item--list">
                    {service.title && (
                      <Link href={'/service-single'}>
                        <span className="icon_list_text">{service.title}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="footer-widget">
              <span className="xb-item--sub-title">Follow Us</span>
              <ul className="xb-item--holder list-unstyled">
                <li className="xb-item--list"><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                <li className="xb-item--list"><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                <li className="xb-item--list"><Link href="/"><i className="fab fa-linkedin-in"></i></Link></li>
                <li className="xb-item--list"><Link href="/"><i className="fab fa-youtube"></i></Link></li>
                {/* <li className="xb-item--list"><Link href="/">Crypto</Link></li>
                <li className="xb-item--list"><Link href="/">Automotive</Link></li> */}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-copyright mt-70 ul_li_between flex-cls">
            
              <p className="copyright mt-20">
                Copyright © 2025 <Link href="/">innomax</Link>. All rights reserved.
              </p>
              <p className="copyright mt-20">
                Desgined by <a href='https://yulanto.com'>Yulanto.com</a>
              </p>
          


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
