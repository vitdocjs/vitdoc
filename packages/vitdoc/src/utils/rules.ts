import { fsExtra } from "@umijs/utils";
import glob from "glob";
import path from "path";
import logger from './logger'

export const getComponentFiles = (paths: string[]) => {
  const files = paths.reduce<string[]>((prev, path) => {
    const files = glob
      .sync(`${path ? `${path}/` : ""}{,!(node_modules)/**/}*.md`, {
        cwd: process.cwd(),
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

export const getPackageAlias = (params: {
  entry?: string;
  isMonorepo: boolean;
}) => {
  const {
    entry: entryConfig = 'src/index',
    isMonorepo,
  } = params
  try {
    const findPath = path.join(process.cwd(), isMonorepo ? `**/${entryConfig}.?(ts|tsx|js|jsx)` : `${entryConfig}.?(ts|tsx|js|jsx)`)
    const entry = glob.sync(findPath, {
      cwd: process.cwd(),
      ignore: '**/node_modules/**'
    });
    if (!entry.length) throw new Error("no entry file");


    const entryResult = isMonorepo ? entry.map(item => {

      const reg = new RegExp(`${entryConfig}.[ts|tsx|js|jsx]`, 'g')

      const pkgPath = path.join(path.dirname(item.replace(reg, '')), "package.json")

      return fsExtra.existsSync(pkgPath) ? {
        [fsExtra.readJSONSync(pkgPath).name]: item
      } : {}
    }).reduce((prev, next) => ({ ...prev, ...next }), {}) : {
      [fsExtra.readJSONSync(path.join(process.cwd(), "package.json")).name]:
        entry[0],
    }


    logger.info('Resolve Entry Config Success:\n' + JSON.stringify(entryResult, null, 2))
    return entryResult
  } catch (e) {
    logger.error('Resolve Entry Config Error !!!')
    return {};
  }
};
