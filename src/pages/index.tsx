"strict";

import Head from "next/head";

import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
//import init, {  ttest } from "wasm_bf_robust";

const inter = Inter({ subsets: ["latin"] });
import {useContext} from "react";
import { WASMContext } from "../context/WASM";


/* let wasm_loaded: boolean = false; */
export default function Home() {

  const  wasm  = useContext(WASMContext);
  if (!wasm.wasm) {
    return <></>;
  }

  return (
     <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Hello World</h1>
          <p>{`${wasm.ttest(1, 2, 3)}`}</p>
        </div>
      </main>
    </>
  );
}
