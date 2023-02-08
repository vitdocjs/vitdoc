import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

export function useHashChange() {
  const location = useLocation();
  const lastUrl = useRef(window.location.href);
  useEffect(() => {
    const event = new HashChangeEvent("hashchange", {
      oldURL: lastUrl.current,
      newURL: window.location.href,
    });

    window.dispatchEvent(event);
  }, [location]);
}
