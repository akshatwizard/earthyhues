'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import Upcomingtrip from "@/components/UpcomingTrips/Upcomingtrip";
import About from "@/components/About/About";
import VideoHome from "@/components/VideoHome/VideoHome";
import { scrollToTop } from "@/helper/ScrollToTop";
import Link from "next/link";

import Testmonial from "@/components/Testmonial/Testmonial";
import HomeBlog from "@/components/HomeBlog/HomeBlog";
import jQuery from "jquery";
import SocialMedia from "@/components/SocialMedia/SocialMedia";

export default function Home() {
  const [noOfPackage, setNoOfPackage] = useState(0)

    useEffect(() => {
        async function packageCount() {
            try {
                const response = await axios.get('https://www.banarasialoopapad.in/apipackages')
                setNoOfPackage(response?.data)
            } catch (error) {
                console.log(error);
            }
        }
        packageCount()
    }, [])
    // console.log(noOfPackage.length);
  
  return (
    <div className="page-wrapper">
      <Banner />
      <Upcomingtrip />
      <About />
      <VideoHome />

      <section className="tour-type pad">
        <div
          className="tour-type__bg"
          style={{ backgroundImage: "url(assets/images/shapes/tour-type-bg.png)" }}
        />
        {/* /.tour-type__bg */}
        <div className="container">
          <div className="sec-title text-center">
            <p className="sec-title__tagline">Tour Categories</p>
            <h2 className="sec-title__title">Choose Tour Types</h2>
          </div>
          <div className="row">
            <div className="col-xl-3 wow fadeInUp" data-wow-delay="100ms">
              <Link href={`passion/${'beach-chill-698'}`} onClick={scrollToTop}>
                <div className="tour-type__box hoverImg">
                  <div className="tour-type__box__icon ">
                    {/* <span className="icon-windsurfing-2" /> */}
                    {/* <div className="tourIcon"></div> */}
                    <img src="assets/images/icon/1.png" alt="" className="default"/>
                    <img src="assets/images/icon/2.png" alt="" className="hover"/>
                  </div>
                  <h3 className="tour-type__box__title">Family Vacation</h3>
                </div>
              </Link>
            </div>
            <div className="col-xl-3 wow fadeInUp" data-wow-delay="150ms">
              <Link href={`passion/${'water-sports-705'}`} onClick={scrollToTop}>
                <div className="tour-type__box hoverImg">
                  <div className="tour-type__box__icon">
                    {/* <span className="icon-paragliding-5" /> */}
                    <img src="assets/images/icon/8.png" alt="" className="default"/>
                    <img src="assets/images/icon/7.png" alt="" className="hover"/>
                  </div>
                  <h3 className="tour-type__box__title">Corporate</h3>
                </div>
              </Link>
            </div>
            <div className="col-xl-3 wow fadeInUp" data-wow-delay="200ms">
              <Link href={`passion/${'little-wanderer-704'}`} onClick={scrollToTop}>
                <div className="tour-type__box">
                  <div className="tour-type__box__icon">
                    <span className="icon-hiking-4" />
                  </div>
                  <h3 className="tour-type__box__title">Adventure Tours</h3>
                </div>
              </Link>
            </div>
            <div className="col-xl-3 wow fadeInUp" data-wow-delay="250ms">
              <Link href={`passion/${'birding-699'}`} onClick={scrollToTop}>
                <div className="tour-type__box hoverImg">
                  <div className="tour-type__box__icon">
                    {/* <span className="icon-hang-gliding-3" /> */}
                    {/* <span className="icon-wildlife" /> */}
                    <img src="assets/images/icon/4.png" alt="" className="default"/>
                    <img src="assets/images/icon/9.png" alt="" className="hover"/>
                  </div>
                  <h3 className="tour-type__box__title">Sustainable</h3>
                </div>
              </Link>
            </div>
            <div className="col-xl-3 wow fadeInUp" data-wow-delay="300ms">
              <Link href={`passion/${'wildlife-16'}`} onClick={scrollToTop}>
                <div className="tour-type__box">
                  <div className="tour-type__box__icon">
                  <span className="icon-wildlife" />
                  </div>
                  <h3 className="tour-type__box__title">Wildlife</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-three">
        <div
          className="counter-three__bg"
          style={{ backgroundImage: "url(assets/images/shapes/counter-bg-3.png)" }}
        />
        <div className="counter-three__shape-top" />
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12 wow fadeInUp" data-wow-delay="100ms">
              <div className="sec-title text-left">
                <p className="sec-title__tagline">Are you ready to travel</p>
                {/* /.sec-title__tagline */}
                <h2 className="sec-title__title">
                  Explore Our Tours &amp;
                  <br />Start Your Adventure Today
                </h2>
                {/* /.sec-title__title */}
              </div>
              {/* /.sec-title */}
              {/* /.sec-title */}
              <p className="counter-three__text">
                Embark on an adventure with EarthyHues, offering handpicked tours blending excitement, relaxation, and cultural immersion for unforgettable memories.
              </p>
            </div>
            <div className="col-xl-2 col-md-4 wow fadeInUp" data-wow-delay="100ms">
              <div className="counter-three__box @@extraClassName">
                <div className="counter-three__box__icon">
                  <span className="icon-happy-Travel" />
                </div>
                {/* /.counter-box__icon */}
                <h3 className="counter-three__box__number count-box">
                  <span className="count-text" data-stop="1K+" data-speed={1500} />
                  1 K+
                </h3>
                <p className="counter-three__box__title">No. of travellers</p>
              </div>
            </div>
            {/* /.col-xl-2 col-md-4 */}
            <div className="col-xl-2 col-md-4 wow fadeInUp" data-wow-delay="200ms">
              <div className="counter-three__box @@extraClassName">
                <div className="counter-three__box__icon">
                  <span className="icon-tent-1" />
                </div>
                {/* /.counter-box__icon */}
                <h3 className="counter-three__box__number count-box">
                  <span className="count-text" data-stop="50+" data-speed={1500} />
                  {noOfPackage?.length}+
                </h3>
                <p className="counter-three__box__title">No. of Packages</p>
              </div>
            </div>
            {/* /.col-xl-2 col-md-4 */}
            <div className="col-xl-2 col-md-4 wow fadeInUp" data-wow-delay="300ms">
              <div className="counter-three__box @@extraClassName">
                <div className="counter-three__box__icon">
                  <span className="icon-satisfied" />
                </div>
                {/* /.counter-box__icon */}
                <h3 className="counter-three__box__number count-box">
                  <span className="count-text" data-stop="98%" data-speed={1500} />
                  98%
                </h3>
                <p className="counter-three__box__title">Google Ranking</p>
              </div>
            </div>
            {/* /.col-xl-2 col-md-4 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        <div className="counter-three__shape-bottom" />
      </section>

      <Testmonial />
      <HomeBlog />

      <Link href="/" data-target="html" className="scroll-to-target scroll-to-top">
        <span className="scroll-to-top__text">back top</span>
        <span className="scroll-to-top__wrapper">
          <span className="scroll-to-top__inner" />
        </span>
      </Link>

    </div>
  );
}
