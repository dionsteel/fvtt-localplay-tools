// SPDX-FileCopyrightText: 2022 Johannes Loher
// SPDX-FileCopyrightText: 2022 David Archibald
//
// SPDX-License-Identifier: MIT

import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default () => [
  {
    input: "src/foundry-table-app/preload.ts",
    output: {
      file: "preload_deps.js",
      // format: "umd",
      // name:"fvtt-localplay-tools/lib",
      format:'cjs',
      sourcemap: true,
    },
    plugins: [nodeResolve(), typescript()],
  },
];
