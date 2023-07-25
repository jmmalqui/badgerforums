import "./signin_pw.css";
import badgerIcon from "../../../assets/png/badgericon.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function SignInPasswordContainer() {
  const navigate = useNavigate();
  return (
    <div className="signinname-container">
      <div className="entername-container">
        <div className="entername-title">Lets Make an Account</div>
        <div className="badgerui-container">
          <img
            src={badgerIcon}
            alt=""
            className="entername-image-clickable"
            onClick={() => navigate(-1)}
          />

          <img src={badgerIcon} alt="" className="entername-image-active" />
          <img src={badgerIcon} alt="" className="entername-image" />
        </div>
        <div className="entername-text">Enter your Password: </div>
        <input type="text" className="entername-input" />
        <NavLink className="namenext-button" to="signincomplete">
          Next
        </NavLink>
      </div>
    </div>
  );
}

export default SignInPasswordContainer;
