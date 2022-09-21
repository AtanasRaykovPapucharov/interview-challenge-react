declare module "*.png";
declare module "*.jpg";
declare module "*.gif";
declare module "*.webp";
declare module "*.svg";
declare module "*.json";
declare module "*.pdf";
declare module "*.mdx" {
  let MDXComponent: (props: {}) => JSX.Element;
  export default MDXComponent;
}