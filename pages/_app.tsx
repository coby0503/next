import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout<T> = AppProps & {
  Component: NextPageWithLayout<T>;
};

interface Props {}

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout<Props>) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
