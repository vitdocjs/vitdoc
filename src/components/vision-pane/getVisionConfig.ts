import VisionTransfer from "@alife/json-2-vision";


let promise;
export async function getVisionConfig(componentTypes) {
  // let prefix = getPublicPrefix();

  const data = VisionTransfer.buildVisionFromTypes(componentTypes);
  return data;
  // const visionPath = new URL(prefix + "vision.config.json");
  //
  if (!promise) {
    // promise = RequireJS.load(visionPath.href).then(modules => {
    //   return modules[componentName];
    // });
  }

  return await promise;
}
