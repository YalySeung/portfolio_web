import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions = new Map();

export default function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const key = location.pathname + location.search;

    if (navigationType === "POP") {
      const savedY = scrollPositions.get(key);

      window.scrollTo({
        top: savedY ?? 0,
        left: 0,
        behavior: "auto",
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }

    return () => {
      scrollPositions.set(key, window.scrollY);
    };
  }, [location.pathname, location.search, navigationType]);

  return null;
}