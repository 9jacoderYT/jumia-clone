import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import Link from "next/link";

export default function Message() {
  return (
    <div
      align="center"
      className="absolute  w-[90%] top-[20%] left-[5%] md:w-[50%] md:top-[30%] md:left-[25%]  lg:w-[30%] lg:top-[30%] lg:left-[33%] bg-white p-5  rounded-lg"
    >
      <span className="bg-yellow-500 shadow-lg text-white p-3 align-center rounded-3xl">
        <ShoppingCartIcon className="h-12 mr-3" />
        Order Received Successfully
      </span>
      <h2 className="mt-3">Congraulations Your Order has been Placed</h2>

      <Link href="/" className="btn btn-warning btn-sm text-white">
        Home
      </Link>
    </div>
  );
}
