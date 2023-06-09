"use client";
import Leftside from "./leftside";
import Middle from "./middle";
import Rightside from "./rightside";

export default function Header() {
  return (
    <div className="flex w-full pt-2 md:space-x-3">
      {/* Left  side */}
      <Leftside />

      {/* Middle */}
      <Middle />

      {/* Right side */}
      <Rightside />
    </div>
  );
}
