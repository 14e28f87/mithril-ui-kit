declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const stylesheet: string;
  export default stylesheet;
}

declare module '*.css' {
  const stylesheet: string;
  export default stylesheet;
}
