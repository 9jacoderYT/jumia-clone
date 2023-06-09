import React, { useState } from "react";
import Breadcrumbs from "./breadcrumbs";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Moredetails from "./moredetails";
import Delivery from "./delivery";
import { NGnaira } from "@/lib/help";
import { useRecoilState } from "recoil";
import { cartState } from "../../atom/cartAtom";

export default function ProductDetail({ details }) {
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = () => {
    const newCart = [...cart, details];
    setCart(newCart);
  };

  console.log(cart);

  return (
    <div>
      <Breadcrumbs
        category={details.categories}
        brand={details.brand}
        title={details.title}
      />

      <div className="flex flex-col lg:flex-row p-3 space-x-4">
        <div className="w-[100%] lg:w-[70%]">
          <div className="flex bg-white p-2 rounded-lg shadow-lg">
            <div className="w-[35%]">
              <img
                src={details.url}
                alt="Product Detail"
                className="w-[100%]"
              />
              <span className="text-l">SHARE THIS PRODUCT</span>
              <p className="space-x-5">
                <FacebookOutlinedIcon />
                <TwitterIcon />
              </p>
            </div>

            <div className="w-[65%]">
              <div className="badge badge-accent">{details.brand}</div>

              <p className="text-2xl">{details.title}</p>
              <p>
                Brand :
                <span className="hover:underline cursor-pointer text-blue-500">
                  {details.brand} || Similar products form {details.brand}
                </span>
              </p>
              <div className="divider"></div>
              <b className="text-3xl">{NGnaira.format(details.productprice)}</b>

              <p className="text-gray-400 text-sm underline">
                {details.units === 0 ? (
                  <span className="text-red-700">Out of Stock</span>
                ) : (
                  <>In Stock</>
                )}
              </p>

              <p>
                {!details.deliveryPrice ? (
                  <span className="text-green-800">Free Delivery</span>
                ) : (
                  <span className="text-gray-500">
                    + shipping from {NGnaira.format(details.deliveryPrice)}
                  </span>
                )}
              </p>

              <button
                onClick={addToCart}
                className="btn btn-wide w-full mt-5 btn-warning text-white text-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                ADD TO CART
              </button>
            </div>
          </div>

          <Moredetails
            specifications={details.specifications}
            details={details.details}
            features={details.features}
          />
        </div>

        <div className="hidden lg:inline lg:w-[30%]">
          <Delivery />
        </div>
      </div>
    </div>
  );
}
