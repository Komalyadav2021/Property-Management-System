import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <Link to="/"> Home </Link>{" "}
      <Link
        to="/About
        "
      >
        {" "}
        About{" "}
      </Link>{" "}
      <button onClick={() => navigate(-1)}> Back </button>{" "}
    </nav>
  );
};
