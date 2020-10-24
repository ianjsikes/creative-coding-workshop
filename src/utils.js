import { useMemo } from 'react'

export const randomRange = (min, max) => min + Math.random() * (max - min)

export const useRandomRange = (min, max) => {
  return useMemo(() => randomRange(min, max), [min, max])
}

/**
 * Usage:
 * times(3, () => 'moo')   // ['moo', 'moo', 'moo']
 */
export const times = (n, fn) => [...Array(n)].map(fn)

export const Colors = {
  shape: '#fed766',
  activeShape: '#e0607e',
  fog: 'darkorchid',
  light: 'red',
}

// Source: https://gist.github.com/gre/1650294
export const Ease = {
  // no easing, no acceleration
  linear: (t) => t,
  // accelerating from zero velocity
  inQuad: (t) => t * t,
  // decelerating to zero velocity
  outQuad: (t) => t * (2 - t),
  // acceleration until halfway, then deceleration
  inOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  // accelerating from zero velocity
  inCubic: (t) => t * t * t,
  // decelerating to zero velocity
  outCubic: (t) => --t * t * t + 1,
  // acceleration until halfway, then deceleration
  inOutCubic: (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // accelerating from zero velocity
  inQuart: (t) => t * t * t * t,
  // decelerating to zero velocity
  outQuart: (t) => 1 - --t * t * t * t,
  // acceleration until halfway, then deceleration
  inOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
  // accelerating from zero velocity
  inQuint: (t) => t * t * t * t * t,
  // decelerating to zero velocity
  outQuint: (t) => 1 + --t * t * t * t * t,
  // acceleration until halfway, then deceleration
  inOutQuint: (t) =>
    t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
}
