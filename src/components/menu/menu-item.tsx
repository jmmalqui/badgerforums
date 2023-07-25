import { NavLink } from "react-router-dom";
import "./menu-item.css";

interface ItemProps {
  text: string;
  img_path: string;
  page: string;
}

function MenuItem(props: ItemProps) {
  return (
    <NavLink to={props.page} className="menuitem-container">
      <img src={props.img_path} alt="" className="menuitem-image" />
      <a href="" className="menu-link">
        {props.text}
      </a>
    </NavLink>
  );
}

export default MenuItem;
