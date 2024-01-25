import glob from "glob";

export const getComponentFiles = (paths: string[]) => {
  const files = paths.reduce<string[]>((prev, path) => {
    const files = glob
      .sync(`${path ? `${path}/` : ""}{,/**/}*.md`, {
        cwd: process.cwd(),
        ignore: '**/node_modules/**'
      })
      .filter((file) => !!/\//.test(file));
    return [...prev, ...files];
  }, []);

  return files;
};

export const getMainFiles = (path: string = "src") =>
  glob.sync(`${path}/**/index.tsx`, {
    cwd: process.cwd(),
  });



// export const getPackageAlias = (params: {
//   entryConfig?: string;
//   isMonorepo: boolean;
// }) => {
//   let { entryConfig = 'src/index' } = params
//   const { isMonorepo } = params

//   entryConfig = entryConfig.replace(/\.(tsx|jsx|ts|js)?$/g, '')

//   try {
//     const findPath = path.join(process.cwd(), isMonorepo ? `**/${entryConfig}.{tsx,jsx,ts,js}` : `${entryConfig}.{tsx,jsx,ts,js}`)
//     const entry = glob.sync(findPath, {
//       cwd: process.cwd(),
//       ignore: '**/node_modules/**'
//     });

//     if (!entry.length) throw new Error("no entry file");

//     const entryResult = isMonorepo ? entry.map(item => {

//       const reg = new RegExp(`${entryConfig}.(tsx|jsx|ts|js)`, 'g')

//       const pkgPath = path.join(item.replace(reg, ''), "package.json")

//       return fsExtra.existsSync(pkgPath) ? {
//         [fsExtra.readJSONSync(pkgPath).name]: item
//       } : {}
//     }).reduce((prev, next) => ({ ...prev, ...next }), {}) : {
//       [fsExtra.readJSONSync(path.join(process.cwd(), "package.json")).name]:
//         entry[0],
//     }

//     logger.info('Current Entry Config: ' + entryConfig)
//     logger.success('Resolve Entry Config Success:\n' + JSON.stringify(entryResult, null, 2))
//     return entryResult
//   } catch (e: any) {
//     logger.error(`Resolve Entry Config Error: ${e.message} !!!`)
//     return {};
//   }
// };
