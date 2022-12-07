import { Link } from "react-router-dom";
import HomeIcon from "../assets/whitehouseicon.png";

const Navbar = () => {
  return (
    <div
      style={{
        height: "50px",
        backgroundColor: "blue",
        color: "white",
        textDecoration: "none",
      }}
    >
      <Link to="/">
        <img
          src={HomeIcon}
          alt="home"
          style={{ display: "flex", margin: "auto" }}
        />
      </Link>
    </div>
  );
};

export default Navbar;
