import { useState, createContext } from "react";
import type { ReactNode } from "react";
import { useEffect, useRef } from 'react'


import init, {  ttest } from "wasm_bf_robust";

export const useMountEffectOnce = (fn: () => void) => {
  const wasExecutedRef = useRef(false)
  useEffect(() => {
    if (!wasExecutedRef.current) {
      fn()
    }
    wasExecutedRef.current = true
  }, [fn])
}

const initial: IWASMContext = {}

export const WASMContext = createContext<IWASMContext>(initial);

export const WASMContextProvider: React.FC<WASMContextProvider> = ({
  children
}) => {
  const [state, setState] = useState<IWASMContext>(initial);

  useMountEffectOnce(() => {
    (async () => {
      await init();
      setState({wasm: true, ttest: ttest });
    })();
  })

  return (
    <WASMContext.Provider value={ state }>
      {children}
    </WASMContext.Provider>
  )
}

/* interface IWASMContext { */
/*   wasm?: typeof import("../../wasm"); */
/* } */

interface WASMContextProvider {
  children: ReactNode;
}
