import "./footer.css"
import logoIcon from "../../assets/png/logoicon.png"
function Footer(){
    return(
        <>
            <div className="footer-container">
                <div className="footer-logo-container">
                    <img src={logoIcon} alt="" className="footer-logo-image" />
                    <div className="footer-text-logo">BadgerForums</div>
                </div>
                <div className="footer-text">
                    Ferocious, the honey badger way.
                </div>
            </div>
           
        </>  
    )

}

export default Footer;