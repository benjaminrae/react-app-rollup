import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";

const localConfig = {
  input: "./src/index.tsx",
  output: {
    file: "./public/index.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    image(),
    postcss({ extract: "style.css", extensions: [".css"] }),
    nodeResolve({ browser: true }),
    commonjs({ include: ["node_modules/**"] }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
      preventAssignment: true,
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
    serve({
      open: true,
      verbose: true,
      contentBase: ["public"],
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "public" }),
  ],
};

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
