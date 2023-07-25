import "./more-container.css"
import { data } from "../data"
import githubIcon from "../../assets/png/github-mark.png"
function MoreContainer(){
    return (
            <div className="more-master">
                <div className="more-title">
                    The repository for this project can be found in GitHub.
                </div>
                <div className="github-logo-container">
                    <a href="https://github.com/ThePrimeagen">
                        <img src={githubIcon} alt=""  className="github-logo" />
                    </a>
                </div>
            </div>
      
    )
}

export default MoreContainer