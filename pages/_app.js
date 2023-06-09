import Layout from "@/components/layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Roboto } from "next/font/google";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Layout>
          <main className={roboto.className}>
            <Component {...pageProps} />
          </main>
        </Layout>
      </RecoilRoot>
    </SessionProvider>
  );
}
