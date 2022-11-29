import EventEmitter from "eventemitter3";

declare global {
  interface Window {
    HMRRegisterMap$: Record<string, EventEmitter>;
  }
}

const processEvent = new EventEmitter();

function getEventEmitter(file) {
  if (!window.HMRRegisterMap$) {
    window.HMRRegisterMap$ = {};
  }
  if (undefined === window.HMRRegisterMap$[file]) {
    const emiter = new EventEmitter();
    window.HMRRegisterMap$[file] = emiter;
    processEvent.emit("new", file, emiter);
  }
  return window.HMRRegisterMap$[file];
}

export function waitForOneFile() {
  return new Promise((resolve) =>
    processEvent.once("new", (file) => {
      resolve(accept(file));
    })
  );
}

export function accept(file) {
  const emitter = getEventEmitter(file);

  return {
    emit(newModule) {
      emitter.emit("update", newModule);
    },
    on(cb) {
      emitter.on("update", cb);
      return () => emitter.off("update", cb);
    },
  };
}
