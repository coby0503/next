import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout<T> = AppProps<T> & {
  Component: NextPageWithLayout;
};

interface Props {
  dehydratedState: DehydratedState;
}
export default function App({
  Component,
  pageProps: { dehydratedState, ...pageProps },
}: AppPropsWithLayout<Props>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
        useErrorBoundary: true,
      },
    },
  });
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          {getLayout(<Component {...pageProps} />)}
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
      ß{" "}
    </>
  );
}
