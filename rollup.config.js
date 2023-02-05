import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";

const productionConfig = {
  input: "./src/index.tsx",
  output: {
    file: "./public/index.js",
    format: "iife",
  },
  plugins: [
    image(),
    postcss({ extract: "style.css", extensions: [".css"] }),
    nodeResolve({ browser: true }),
    commonjs({ include: ["node_modules/**"] }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
  ],
};

export default process.env.NODE_ENV === "production"
  ? productionConfig
  : localConfig;
