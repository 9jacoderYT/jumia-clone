import React from "react";

export default function Recommended() {
  return (
    <div className="pt-5">
      <div className="carousel carousel-center w-full bg-white shadow-lg rounded-lg">
        <div className="carousel-item flex flex-col w-[150px] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-christmas-sale/2022/thumbnails/phones_220x220.png"
            className="rounded-box"
            alt="image"
          />

          <span className="justify-center text-center">Phones & Tablets</span>
        </div>
        <div className="carousel-item flex flex-col w-[150px] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/clearance_220x220.png"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center">Up to 30% off</span>
        </div>
        <div className="carousel-item flex flex-col w-[150px] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/01-thumbnails/Television.jpg"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center">Television</span>
        </div>
        <div className="carousel-item flex flex-col w-[150px] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-christmas-sale/2022/thumbnails/groceries_220x220.png"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center">Groceries</span>
        </div>
        <div className="carousel-item flex flex-col w-[150px] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/01-thumbnails/refreigerator.jpg"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center">Refrigerators</span>
        </div>
        <div className="carousel-item flex flex-col w-[150px] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-christmas-sale/2022/thumbnails/electronics_220x220.png"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center">Electronics</span>
        </div>
        <div className="carousel-item flex flex-col w-[150px] md:w-[200px]">
          <img
            src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/01-thumbnails/Best_Seller.png"
            className="rounded-box"
            alt="image"
          />
          <span className="justify-center text-center">Best Sellers</span>
        </div>
      </div>
    </div>
  );
}
