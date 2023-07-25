import "./signup.css";
import credentials from "../../assets/png/credentials.png";
import { Navigate, useNavigate } from "react-router-dom";
function SignUpContainer() {
  const navigate = useNavigate();
  return (
    <div className="signup-container">
      <div className="signup-title">Enter your Credentials</div>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <img src={credentials} alt="" className="signup-image" />
      <button className="namenext-button" onClick={() => navigate("/")}>
        {" "}
        Begin Reading
      </button>
    </div>
  );
}

export default SignUpContainer;
