import React, { useLayoutEffect, useState } from 'react'

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

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
