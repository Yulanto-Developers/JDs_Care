'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';


import MobileMenu from '../MobileMenu/MobileMenu';
// import MegaMenu1 from './MegaMenu1';
// import MegaMenu2 from './MegaMenu2';

const Header: React.FC = () => {
  const [mobailActive, setMobailState] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const SubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div id="xb-header-area" className="header-area  header-style-two bg-white header-transparent">
     
      <div className={`xb-header stricky ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
        <div className="container mx-auto">
          <div className="header__wrap ul_li_between">
            {/* Logo */}
            <div className="header-logo">
              <Link href="/">
                <Image src="/images/logos-jd/Logo-300.png" alt="Texpo Logo" width={300} height={300} />
              </Link>
            </div>

            {/* Main Menu */}
            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse fs-5">
                <ul>
                  <li >
                    <Link href="/">
                      <span className="nav-hover">Home</span>
                    </Link>
                    {/* <ul className="submenu">
                      <li><Link href="/"><span>SEO Agency</span></Link></li>
                      <li><Link href="/home-2"><span>It Services</span></Link></li>
                      <li><Link href="/home-3"><span>AI & Data Solutions</span></Link></li>
                      <li><Link href="/home-4"><span>Cyber Security</span></Link></li>
                      <li><Link href="/home-5"><span>Cloud and Devops</span></Link></li>
                      <li><Link href="/home-6"><span>Help desk SaaS</span></Link></li>
                    </ul> */}
                  </li>

                  <li >
                    <Link href="/about"><span className="nav-hover">About Us</span></Link>
                    {/* <MegaMenu1 /> */}
                  </li>

                  <li >
                    <Link href="/service"><span className="nav-hover">Software Expertise</span></Link>
                    {/* <MegaMenu2 /> */}
                  </li>

                  <li className="">
                    <Link href="/career"><span className="nav-hover">Career</span></Link>
                    {/* <ul className="submenu">
                      <li><Link href="/casestudy"><span>Casestudy</span></Link></li>
                      <li><Link href="/casestudy-details"><span>Casestudy Details</span></Link></li>
                    </ul> */}
                  </li>
                  <li className="">
                    <Link href="/contact"><span className="nav-hover">Contact</span></Link>
                    {/* <ul className="submenu">
                      <li><Link href="/casestudy"><span>Casestudy</span></Link></li>
                      <li><Link href="/casestudy-details"><span>Casestudy Details</span></Link></li>
                    </ul> */}
                  </li>

                  {/* <li className="menu-item-has-children">
                    <Link href="/blog"><span>Blog</span></Link>
                    <ul className="submenu">
                      <li><Link href="/blog"><span>Blog</span></Link></li>
                      <li><Link href="/blog-single"><span>Blog Details</span></Link></li>
                    </ul>
                  </li> */}

                  {/* <li><Link href="/contact"><span>Contact</span></Link></li> */}
                </ul>
              </nav>

              {/* Mobile Menu Wrapper */}
              <div className="xb-header-wrap">
                <div className={`xb-header-menu ${mobailActive ? 'active' : ''}`}>
                  <div className="xb-header-menu-scroll lenis lenis-smooth">
                    <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)} />
                    <div className="xb-logo-mobile xb-hide-xl">
                      <Link href="/" rel="home">
                        <Image src="/images/logo/logo-black.svg" alt="Mobile Logo" width={150} height={50} />
                      </Link>
                    </div>
                    <div className="xb-header-mobile-search xb-hide-xl">
                      <form role="search" onSubmit={SubmitHandler}>
                        <input type="text" placeholder="Search..." name="s" className="search-field" />
                        <button className="search-submit" type="submit">
                          <i className="far fa-search" />
                        </button>
                      </form>
                    </div>
                    <nav className="xb-header-nav">
                      <MobileMenu />
                    </nav>
                  </div>
                </div>
                <div className="xb-header-menu-backdrop"></div>
              </div>
            </div>

            {/* Mobile toggle button */}
            <div className="header-bar-mobile side-menu d-xl-none">
              <button className="xb-nav-mobile" onClick={() => setMobailState(!mobailActive)}>
                <i className="far fa-bars" />
              </button>
            </div>

            {/* CTA */}
            <div className="header-contact d-none d-md-block">
              <Link href="/contact" className="thm-btn thm-btn--aso thm-btn--header-black">
                (280) 270-3963 
                {/* <Image src="/images/icon/sms-white-icon01.svg" alt="Message Icon" width={20} height={20} /> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
