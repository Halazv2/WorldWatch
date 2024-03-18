export const cx = (...classNames) =>
  classNames.filter(Boolean).join(" ");

// vercel throws error when using normal imports
export const myLoader = ({ src }) => {
  return src;
};
