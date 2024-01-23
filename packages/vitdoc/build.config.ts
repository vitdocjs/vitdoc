import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index.ts",
    {
      input: "src/preset/index.ts",
      name: "vite",
    },
  ],
  declaration: true,
  externals: ["consola", "chalk"],
  clean: true,
});
