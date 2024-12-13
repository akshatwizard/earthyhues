import React from "react";
import { scrollToTop } from "@/helper/ScrollToTop";
import Link from "next/link";
import Image from "next/image";

export default function TourCategories() {
  return (
    <section className="tour-type pad">
      <div
        className="tour-type__bg"
        style={{
          backgroundImage: "url(assets/images/shapes/tour-type-bg.png)",
        }}
      />
      {/* /.tour-type__bg */}
      <div className="container">
        <div className="sec-title text-center">
          <p className="sec-title__tagline">Tour Categories</p>
          <h2 className="sec-title__title">Choose Tour Types</h2>
        </div>
        <div className="row">

          <div className="col-xl-3 wow fadeInUp" data-wow-delay="100ms">
            <Link href={`passion/${"wildlife-16"}`} onClick={scrollToTop}>
              <div className="tour-type__box hoverImg">
                <div className="tour-type__box__icon ">
                  {/* <span className="icon-windsurfing-2" /> */}
                  {/* <div className="tourIcon"></div> */}
                  <Image
                    width={65}
                    height={65}
                    src="/assets/img/wildlife.png"
                    alt=""
                    className="default"
                  />
                  <Image
                   width={65}
                   height={65}
                    src="/assets/img/wildlife-white.png"
                    alt=""
                    className="hover"
                  />
                </div>
                <h3 className="tour-type__box__title">Wildlife</h3>
              </div>
            </Link>
          </div>

          <div className="col-xl-3 wow fadeInUp" data-wow-delay="150ms">
            <Link href={`passion/${"birding-699"}`} onClick={scrollToTop}>
              <div className="tour-type__box hoverImg">
                <div className="tour-type__box__icon">
                  {/* <span className="icon-paragliding-5" /> */}
                  <Image
                    width={65}
                    height={65}
                    src="/assets/img/birding.png"
                    alt=""
                    className="default"
                  />
                  <Image
                   width={65}
                   height={65}
                    src="/assets/img/birding-white.png"
                    alt=""
                    className="hover"
                  />
                </div>
                <h3 className="tour-type__box__title">Birding</h3>
              </div>
            </Link>
          </div>

          <div className="col-xl-3 wow fadeInUp" data-wow-delay="150ms">
            <Link href={`passion/${"mountains-calling-707"}`} onClick={scrollToTop}>
              <div className="tour-type__box hoverImg">
                <div className="tour-type__box__icon">
                  {/* <span className="icon-paragliding-5" /> */}
                  <Image
                    width={65}
                    height={65}
                    src="/assets/img/mountains-calling.png"
                    alt=""
                    className="default"
                  />
                  <Image
                   width={65}
                   height={65}
                    src="/assets/img/mountain-white.png"
                    alt=""
                    className="hover"
                  />
                </div>
                <h3 className="tour-type__box__title">Mountains Calling</h3>
              </div>
            </Link>
          </div>

          <div className="col-xl-3 wow fadeInUp" data-wow-delay="150ms">
            <Link href={`passion/${"beach-chill-698"}`} onClick={scrollToTop}>
              <div className="tour-type__box hoverImg">
                <div className="tour-type__box__icon">
                  {/* <span className="icon-paragliding-5" /> */}
                  <Image
                    width={65}
                    height={65}
                    src="/assets/img/beach-chill.png"
                    alt=""
                    className="default"
                  />
                  <Image
                   width={65}
                   height={65}
                    src="/assets/img/beach-white.png"
                    alt=""
                    className="hover"
                  />
                </div>
                <h3 className="tour-type__box__title">Beach Chill</h3>
              </div>
            </Link>
          </div>

          <div className="col-xl-3 wow fadeInUp" data-wow-delay="150ms">
            <Link href={`passion/${"sun-sand-and-dunes-642"}`} onClick={scrollToTop}>
              <div className="tour-type__box hoverImg">
                <div className="tour-type__box__icon">
                  {/* <span className="icon-paragliding-5" /> */}
                  <Image
                    width={65}
                    height={65}
                    src="/assets/img/sun-sand-dunes.png"
                    alt=""
                    className="default"
                  />
                  <Image
                   width={65}
                   height={65}
                    src="/assets/img/desert-white.png"
                    alt=""
                    className="hover"
                  />
                </div>
                <h3 className="tour-type__box__title">Sun Sand Dunes</h3>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
