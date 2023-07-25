import "./signin_complete.css";
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
            onClick={() => navigate(-2)}
          />

          <img
            src={badgerIcon}
            alt=""
            className="entername-image-clickable"
            onClick={() => navigate(-1)}
          />
          <img src={badgerIcon} alt="" className="entername-image-active" />
        </div>
        <div className="entername-text">Welcome to Badger Forums</div>
        <button className="namenext-button" onClick={() => navigate("/")}>
          {" "}
          Begin Reading
        </button>
      </div>
    </div>
  );
}

export default SignInPasswordContainer;
