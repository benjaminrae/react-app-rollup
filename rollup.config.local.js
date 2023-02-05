import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import postcss from "postcss";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

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

export default localConfig;
