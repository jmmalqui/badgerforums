import "./signin_name.css";
import badgerIcon from "../../../assets/png/badgericon.png";
import { NavLink } from "react-router-dom";
function SignInNameContainer() {
  return (
    <div className="signinname-container">
      <div className="entername-container">
        <div className="entername-title">Lets Make an Account</div>
        <div className="badgerui-container">
          <img src={badgerIcon} alt="" className="entername-image-active" />
          <img src={badgerIcon} alt="" className="entername-image" />
          <img src={badgerIcon} alt="" className="entername-image" />
        </div>
        <div className="entername-text">Enter your Name: </div>
        <input type="text" className="entername-input" />
        <NavLink className="namenext-button" to="signinpw">
          Next
        </NavLink>
      </div>
    </div>
  );
}

export default SignInNameContainer;
