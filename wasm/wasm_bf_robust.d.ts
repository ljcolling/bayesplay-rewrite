/* tslint:disable */
/* eslint-disable */
/**
* @param {number} t
* @param {number} n1
* @param {number} n2
* @param {number} location
* @param {number} scale
* @param {number} df
* @param {number} tail
* @returns {number}
*/
export function bf_twosample_t(t: number, n1: number, n2: number, location: number, scale: number, df: number, tail: number): number;
/**
* @param {number} t
* @param {number} n1
* @param {number} n2
* @param {number} location
* @param {number} scale
* @param {number} df
* @param {number} tail
* @param {number} location_min
* @param {number} location_max
* @param {number} location_step
* @param {number} scale_min
* @param {number} scale_max
* @param {number} scale_step
* @returns {any}
*/
export function bf_twosample_t_robust(t: number, n1: number, n2: number, location: number, scale: number, df: number, tail: number, location_min: number, location_max: number, location_step: number, scale_min: number, scale_max: number, scale_step: number): any;
/**
* @param {number} t
* @param {number} n1
* @param {number} n2
* @param {number} location
* @param {number} scale
* @param {number} df
* @param {number} tail
* @param {number} location_min
* @param {number} location_max
* @param {number} location_step
* @param {number} scale_min
* @param {number} scale_max
* @param {number} scale_step
* @returns {any}
*/
export function bf_twosample_t_robust_location(t: number, n1: number, n2: number, location: number, scale: number, df: number, tail: number, location_min: number, location_max: number, location_step: number, scale_min: number, scale_max: number, scale_step: number): any;
/**
* @param {number} t
* @param {number} n1
* @param {number} n2
* @param {number} location
* @param {number} scale
* @param {number} df
* @param {number} tail
* @param {number} location_min
* @param {number} location_max
* @param {number} location_step
* @param {number} scale_min
* @param {number} scale_max
* @param {number} scale_step
* @returns {any}
*/
export function bf_twosample_t_robust_scale(t: number, n1: number, n2: number, location: number, scale: number, df: number, tail: number, location_min: number, location_max: number, location_step: number, scale_min: number, scale_max: number, scale_step: number): any;
/**
* @returns {any}
*/
export function hello(): any;
/**
* @param {number} t
* @param {number} df
* @param {number} tail
* @returns {number}
*/
export function ttest(t: number, df: number, tail: number): number;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly bf_twosample_t: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly bf_twosample_t_robust: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number) => number;
  readonly bf_twosample_t_robust_location: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number) => number;
  readonly bf_twosample_t_robust_scale: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number) => number;
  readonly ttest: (a: number, b: number, c: number) => number;
  readonly hello: () => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
