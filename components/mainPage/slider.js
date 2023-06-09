import React from "react";
import RecomHeader from "../recommended/header";

export default function SliderMainPage() {
  return (
    <div className="mt-5">
      <RecomHeader title="Official  Store" color="bg-lime-300" />
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/adidas/mlp.jpg"
            className="w-full"
            alt="Image"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/oraimo/Desktop_MLP_slider__1168x384_(Show_Now).jpg"
            className="w-full"
            alt="Image"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/Nivea/Desktop-MLP-slider_-1168x384-(Show-Now).jpg"
            className="w-full"
            alt="Image"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/nestle/Desktop_MLP_slider__1168x384_(Show_Now).jpg"
            className="w-full"
            alt="Image"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
}
