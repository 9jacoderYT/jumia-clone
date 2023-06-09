import React, { useEffect, useState } from "react";
import Post from "./post";
import RecomHeader from "./header";
import { fetchProductsbyCategory } from "@/lib/fetchData";
import { Skeleton } from "@mui/material";
import { NGnaira } from "@/lib/help";

export default function Gaming() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetchProductsbyCategory("gaming");
      setPosts(products);
      console.log(products);
    };
    fetchProducts();
  });

  return (
    <div className="pt-5">
      <RecomHeader title="Supermarket" color="bg-red-400" />

      <div className="carousel carousel-center bg-white w-full shadow-lg">
        {posts?.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            image={post.url}
            price={NGnaira.format(post.productprice)}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
}
