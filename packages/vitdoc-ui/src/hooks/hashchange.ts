import { useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router";

export function useHashChange() {
  const location = useLocation();
  const lastUrl = useRef(window.location.href);
  useMemo(() => {
    window.addEventListener("hashchange", (e) => {
      lastUrl.current = e.newURL;
    });
  }, []);
  useEffect(() => {
    if (lastUrl.current === window.location.href) return;
    const event = new HashChangeEvent("hashchange", {
      oldURL: lastUrl.current,
      newURL: window.location.href,
    });

    window.dispatchEvent(event);
  }, [location]);
}
