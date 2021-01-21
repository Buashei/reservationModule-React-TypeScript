/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const breakpoints = {
  sm: 320,
  md: 720,
  lg: 1024,
};

export const mediaQueriesMax = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | string) => `@media screen and (max-width: ${breakpoints[key]}px) { ${style} }`;
};

export const mediaQueriesMin = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | string) => `@media screen and (min-width: ${breakpoints[key]}px) { ${style} }`;
};
