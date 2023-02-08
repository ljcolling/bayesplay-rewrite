import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import React, { useState } from "react";

import {WASMContextProvider} from "../context/WASM";

import init, {  ttest } from "wasm_bf_robust";

/* let loading: boolean = true;
if (typeof window !== "undefined") {
  (async() =>  {
    await init();
    loading = false;

  })();
}
*/
/* let wasm_loaded: boolean = false; */
export default function App({ Component, pageProps }: AppProps) {
/*
  const [loading, setLoading] = useState<boolean>(true);
  React.useEffect((): void => {
    if (!wasm_loaded) {
      wasm_loaded = true;
      (async () => {
        console.log("loading");
        await init();
        setLoading(false);
      })();
    }
  });
*/
  return (
    <WASMContextProvider>
    <Component {...pageProps} />
    </WASMContextProvider>
  )
}
