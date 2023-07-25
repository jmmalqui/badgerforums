import { NavLink, Outlet } from "react-router-dom"
import NavBar from "../components/navbar/navbar"
import Content from "../components/content/content"
import Footer from "../components/footer/footer"
import Menu from "../components/menu/menu"
import "../components/content/content.css"
export default function RootLayout(){
    return(
        <div className="root-layout">
            <NavBar></NavBar>
            <div className="content-container">
                <div className="container-child">
                    <Menu></Menu>
                    <div className="container-remainder">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            
        </div>
    )
}