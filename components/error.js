import Link from "next/link";
import React from "react";

export default function Error() {
  return (
    <div className="w-full text-center p-10">
      <p className="m-10">Sorry Page Unavailable</p>

      <Link href="/">
        <button className="btn btn-warning text-white">HOME</button>
      </Link>
    </div>
  );
}
