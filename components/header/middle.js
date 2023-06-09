import React from "react";

export default function Middle() {
  return (
    <div className="w-[100%] lg:w-[60%]">
      <div className="carousel w-full h-[100%] rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w21-top-brands/fitness-week/712x384.jpg"
            alt="image"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w21-top-brands/Desktop_Homepage_Slider_712x384.png"
            className="w-full"
            alt="image"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/TCL/Desktop_Homepage_Slider__712x384_copy_2.png"
            className="w-full"
            alt="image"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/adidas/2023/May/712x384-copy-new.jpg"
            className="w-full"
            alt="image"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
