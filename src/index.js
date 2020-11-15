import {useLayoutEffect, useState} from 'react'

let breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

const getBreakpoints = (windowSize) => {
  const w = Number(windowSize);
  return w < breakpoints.sm
    ? "xs"
    : w < breakpoints.md
      ? "sm"
      : w < breakpoints.lg
        ? "md"
        : w < breakpoints.xl
          ? "lg"
          : "xl";
};

export const sCls = (classBreakpoints) => {
  const [cssClass, setCssClass] = useState('');

  useLayoutEffect(() => {
    const reSize = () => {
      let windowSize = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
      setCssClass(classBreakpoints[getBreakpoints(windowSize)] || "");
    }
    window.addEventListener('resize', () => reSize());
    reSize();
    return () => window.removeEventListener('resize', () => reSize());
  });

  return cssClass;
};
