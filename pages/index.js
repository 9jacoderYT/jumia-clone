import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Oraimo from "@/components/recommended/oraimo";
import Recommended from "@/components/recommended/recommended";
import SliderMainPage from "@/components/mainPage/slider";
import Recommendedforu from "@/components/recommended/recommendedforu";
import Gaming from "@/components/recommended/gaming";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="md:max-w-7xl mx-auto p-2">
      <Header />

      <Recommended />

      <Oraimo />

      <SliderMainPage />

      <Recommendedforu />

      <Gaming />
    </main>
  );
}
