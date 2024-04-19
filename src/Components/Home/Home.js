import { Link } from "react-router-dom";
import useScript from "../useScript";
import useStyle from "../useStyle";
import { motion } from "framer-motion";

export const Home = () => {
  useScript("/Navbar.js");
  useStyle("/style.css");
  return (
    <>
      <div className="box">
        <Link to="/">
          <div className="menu" id="setting">
            <img className="icons" draggable="false" src="img1.svg" alt="" />{" "}
          </div>{" "}
        </Link>{" "}
        <Link to="/buy">
          <div className="menu" id="image2">
            <img className="icons" draggable="false" src="img2.svg" alt="" />{" "}
          </div>{" "}
        </Link>{" "}
        <Link to="/rent">
          <div className="menu" id="image3" to="/rent">
            <img className="icons" draggable="false" src="img3.svg" alt="" />{" "}
          </div>{" "}
        </Link>{" "}
      </div>{" "}
    </>
  );
};
