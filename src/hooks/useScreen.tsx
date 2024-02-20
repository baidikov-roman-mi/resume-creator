import { useState, useEffect } from "react";

function getWindowSize() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useScreen() {
  const [screen, setScreen] = useState(getWindowSize());

  useEffect(() => {
    function handleResize() {
      setScreen(getWindowSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screen;
}
