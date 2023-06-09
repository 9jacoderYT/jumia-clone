import React from "react";
import RecomHeader from "../recommended/header";
import Link from "next/link";
import { NGnaira } from "@/lib/help";
import Error from "../error";

export default function CategoryDetails({ products }) {
  console.log(products);

  if (products.length == 0) return <Error />;
  return (
    <div className=" p-2">
      <div className="w-full p-3 bg-white mb-3">
        <img
          src="https://ng.jumia.is/cms/0-6-anniversary/2023/Consumer-needs/CB_1152x252_4.jpg"
          className="w-full"
          alt="Image"
        />
      </div>

      <RecomHeader title={products[0].categories} color="bg-blue-400" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-0 bg-white mx-auto">
        {products.map((product) => (
          <div className="p-2" key={product.id}>
            <img
              src={product.url}
              alt="Product Image"
              className="w-full h-[200px]"
            />
            <Link href={`/product/${product.id}`} className="hover:underline">
              <span className="justify-center text-center line-clamp-2">
                {product.title}
              </span>

              <h2 className="font-bold text-center">
                {NGnaira.format(product.productprice)}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
