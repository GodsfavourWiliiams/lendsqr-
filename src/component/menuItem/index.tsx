import React from "react";
import { NavLink } from "react-router-dom";
import "./menuItem.scss";

interface MenuItemProps {
  title: string;
  heading: string;
  subMenus?: { name: string; to: string, icon: any }[];
  to: string;
  exact?: boolean;
}


const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { subMenus, heading, } = props;

  return (
    <li className="li">
      {subMenus && subMenus.length > 0 ? (
        <>
         <div className={`sub-menu`}>
           <h3 className="heading">{heading}</h3>
           <div className="div">
             {subMenus.map((menu, index) => (
            <span key={index} className="sub-menu-list">
              <img src={menu.icon} alt={menu.name} />
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </span>
          ))}
           </div>
         
        </div>
        </> 
      ) : null}
    </li>
  );
};

export default MenuItem;
