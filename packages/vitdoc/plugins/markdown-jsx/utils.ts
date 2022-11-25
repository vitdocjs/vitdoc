import { removeProcessCwd } from "../../utils";

/**
 * 添加类型定义
 * @param content
 * @param getMainModuleId
 * @param id
 * @return {Promise<string>}
 */
export async function appendTypes(
  id: string,
  content: string,
  getMainModuleId: () => Promise<string>
) {
  if (!content.includes("renderType$")) {
    const mainModuleId = await getMainModuleId();

    // const readmeFile = removeProcessCwd(id);

    if (mainModuleId) {
      content += "\n";
      const appendCode = `
---

#### API

\`\`\`tsx
import ComponentType from '${removeProcessCwd(mainModuleId)}.type';

renderType$(ComponentType, mountNode);
\`\`\``;

      // console.log(
      //   chalk.yellow(
      //     `[Warning] The file '${removeProcessCwd(
      //       readmeFile
      //     )}' document miss the type define.`
      //   )
      // );
      // console.log(
      //   chalk.yellow(`Please append following code to your .md file.`)
      // );
      // console.log(chalk.dim(appendCode));

      content += appendCode;
    }
  }
  return content;
}
