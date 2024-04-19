import { useEffect } from "react";

const useStyle = (url) => {
  useEffect(() => {
    const style = document.createElement("link");

    style.href = url;
    style.rel = "stylesheet";
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [url]);
};

export default useStyle;
