import { fetchProductById } from "@/lib/fetchData";
import { NGnaira } from "@/lib/help";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Items({ item, index, removeItem }) {
  return (
    <div
      className="flex space-x-5 p-3"
      style={{ borderBottom: "2px solid #ededed" }}
    >
      <img className="w-[150px] h-[150px]" src={item.url} alt={item.title} />

      <div>
        <span className="text-sm line-clamp-2">
          <Link href={`/product/${item.id}`} className="hover:underline">
            {item.title}
          </Link>
        </span>

        <p className="text-gray-400 text-sm capitalize">
          {item.units === 0 ? (
            <span className="text-red-700 text-sm">Out of Stock</span>
          ) : (
            <>In Stock</>
          )}
        </p>

        <p>
          {!item.deliveryPrice ? (
            <span className="text-green-800 text-sm">Free Delivery</span>
          ) : (
            <span className="text-gray-500 text-sm">
              + shipping from {NGnaira.format(item.deliveryPrice)}
            </span>
          )}
        </p>

        <button
          className="btn btn-warning btn-sm btn-outline mt-3"
          onClick={() => removeItem(index)}
        >
          <DeleteIcon /> REMOVE
        </button>
      </div>

      <div className="hidden md:inline">
        <b className="text-xl">{NGnaira.format(item.productprice)}</b>
      </div>
    </div>
  );
}
