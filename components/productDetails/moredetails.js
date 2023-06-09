import React from "react";

export default function Moredetails({ specifications, details, features }) {
  return (
    <div className="">
      <div
        style={{ borderBottom: "1px solid #ededed" }}
        className="bg-white p-3 rounded-t-lg text-black mt-2 rounded-lg shadow-lg"
      >
        <p className="text-xl">Product Details</p>

        <div className=" p-2 bg-white">{details}</div>
      </div>

      <div
        style={{ borderBottom: "1px solid #ededed" }}
        className="bg-white p-3 rounded-t-lg text-black mt-2 rounded-lg shadow-lg"
      >
        <p className="text-xl">Product Specifications</p>
        <div className=" p-2 bg-white">{specifications}</div>
      </div>

      <div
        style={{ borderBottom: "1px solid #ededed" }}
        className="bg-white p-3 rounded-t-lg text-black mt-2 rounded-lg shadow-lg"
      >
        <p className="text-xl">Product Features</p>
        <div className=" p-2 bg-white">{features}</div>
      </div>
    </div>
  );
}
