import * as fs from "fs";
import * as path from 'path'

// 检查不同 monorepo 工具的配置文件
const monorepoConfigFiles = {
  lerna: 'lerna.json',
  yarnWorkspaces: 'package.json', // 包含 workspaces 字段
  pnpmWorkspaces: 'pnpm-workspace.yaml',
};


// 检查指定路径下是否有对应的配置文件
function hasConfigFile(rootPath: string, configFile: string) {
  return fs.existsSync(path.join(rootPath, configFile));
}

// 检查 package.json 是否具有工作区配置
function hasYarnWorkspacesConfig(rootPath: string) {
  const packageJsonPath = path.join(rootPath, 'package.json');

  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    return packageJson.workspaces !== undefined;
  }

  return false;
}

// 检查是否为 monorepo
function checkForMonorepo(rootPath) {
  // 检查 monorepo 特定的配置文件
  for (const tool in monorepoConfigFiles) {
    const configFile = monorepoConfigFiles[tool];

    if (hasConfigFile(rootPath, configFile)) {
      if (tool === 'yarnWorkspaces') {
        if (hasYarnWorkspacesConfig(rootPath)) {
          return true;
        }
      } else {
        return true;
      }
    }
  }

  return false;
}

export function isMonorepo(path: string) {
  return checkForMonorepo(path);
}
