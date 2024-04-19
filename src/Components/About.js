import { Home2 } from "./Home/Home2";

export const About = () => {
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "/style.css";
  document.head.appendChild(style);
  return <Home2 />;
};
