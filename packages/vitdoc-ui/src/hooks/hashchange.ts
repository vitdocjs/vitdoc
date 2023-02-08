import { useMemoizedFn } from "ahooks";
import { useNavigate as _useNavigate } from "react-router-dom";

export function useNavigate() {
  const push = _useNavigate();

  return useMemoizedFn((newUrl) => {
    const oldURL = window.location.href;
    push(newUrl);

    const event = new HashChangeEvent("hashchange", {
      oldURL,
      newURL: window.location.href,
    });
    window.dispatchEvent(event);
  });
}
