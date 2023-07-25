import "./menu.css";
import MenuItem from "./menu-item";
import searchIcon from "../../assets/png/search.png";
import latestIcon from "../../assets/png/latest.png";
import imageIcon from "../../assets/png/image.png";
import moreIcon from "../../assets/png/more.png";
import homeIcon from "../../assets/png/home.png";
function Menu() {
  return (
    <>
      <div className="menu-container">
        <MenuItem text="Home" img_path={homeIcon} page="/"></MenuItem>
        <MenuItem text="Explore" img_path={searchIcon} page="search"></MenuItem>
        <MenuItem text="Images" img_path={imageIcon} page="images"></MenuItem>
        <MenuItem text="Latest" img_path={latestIcon} page="latest"></MenuItem>
        <MenuItem text="More" img_path={moreIcon} page="more"></MenuItem>
      </div>
    </>
  );
}

export default Menu;
