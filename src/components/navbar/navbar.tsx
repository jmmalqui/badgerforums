import "./navbar.css";
import logoIcon from "../../assets/png/logoicon.png";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="container">
        <div className="logo-container">
          <img src={logoIcon} alt="" className="logo-image" />
          <div className="text-logo">BadgerForums</div>
        </div>
        <div className="navbar-links">
          <NavLink className="nb-link" to="signinname">
            {" "}
            Sign up
          </NavLink>
          <NavLink className="nb-link" to="signup">
            {" "}
            Sign in
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
