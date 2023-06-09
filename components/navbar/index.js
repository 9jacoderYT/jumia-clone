"use client";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Elementthree from "./elementthree";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import ShoppingCart from "./shoppingcart";
import { cartState } from "../../atom/cartAtom";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  // React Recoil
  const [cart, setCart] = useRecoilState(cartState);

  return (
    <>
      <div className="bg-orange-500  mb-3">
        <div className=" mx-auto w-full align-middle  md:max-w-7xl mx-auto">
          <img
            src="https://ng.jumia.is/cms/0-1-cpr/2023/new-top-strip/free-delivery-top-strip_1.gif"
            alt="navimage"
          />
        </div>
      </div>

      <div className="bg-white align-middle">
        <div className="md:max-w-7xl mx-auto flex py-3 flex-row justify-between space-x-2 ">
          <span className="flex space-x-2">
            <Elementthree />
            <img
              src="/jumia.png"
              className="h-[40px] pt-3 cursor-pointer"
              alt="logo"
              onClick={() => router.push("/")}
            />
          </span>

          <input
            type="text"
            placeholder="SEARCH"
            className="input input-bordered input-warning w-full outline-none max-w-md  my-auto hidden lg:inline"
          />

          <span className="hidden md:inline">
            {session ? (
              <>
                <PermIdentityIcon className="h-10 my-auto" />
                <span className="my-auto  cursor-pointer" onClick={signOut}>
                  HI, {session.user.name}
                </span>
                <HelpOutlineIcon /> <span className="my-auto"> HELP</span>
              </>
            ) : (
              <button onClick={signIn} className="btn btn-outline btn-warning">
                LOGIN/ SIGN UP
              </button>
            )}
          </span>

          <ShoppingCart items={cart.length} />
        </div>
      </div>
    </>
  );
}
