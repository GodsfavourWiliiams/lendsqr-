import React from "react";
// import logo from "../assets/logo/webscript.png";
// import user from "../assets/user.jpg";
import MenuItem from "../menuItem";
import "./sidebar.scss";
import { menuItems } from "../../route";
import { NavLink } from "react-router-dom";


export interface IMenuItem {
    name: string;
    exact?: boolean;
    to: string;
    iconClassName: string;
    subMenus?: IMenuItem[];
  }
  
  interface SideMenuProps {
   
  }
  

  const SideBar: React.FC<SideMenuProps> = (props) => {
    
  return (
    <div className={`sidebar`}>
      
    <div className="main-menu">
    
        {menuItems.map((menuItem, index) => (
          <MenuItem
          icon={menuItem.icon || ''}
            key={index}
            heading={menuItem.heading || ""}
            title={menuItem.title || ""}
            exact={menuItem.exact}
            to={menuItem.to || ""}
            subMenus={menuItem.subMenus || []}
          />
        ))}
    </div>
  </div>
  )
}

export default SideBar;