import { removeProcessCwd } from "../../utils";

/**
 * 添加类型定义
 * @param content
 * @return {Promise<string>}
 */
export function appendTypes(content: string, getMainComponent) {
  if (!!content.includes("<API")) {
    return content;
  }

  const mainFile = getMainComponent();
  if (!mainFile) {
    return content;
  }

  content += "\n";
  const appendCode = `

---

#### API

<API src="${mainFile + ".type"}" />
`;


  content += appendCode;

  return content;
}
