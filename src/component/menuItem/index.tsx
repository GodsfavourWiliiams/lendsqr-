import React from "react";
import { NavLink } from "react-router-dom";
import "./menuItem.scss";

interface MenuItemProps {
  title: string;
  heading: string;
  subMenus?: { name: string; to: string, icon: any }[];
  to: string;
  exact?: boolean;
  isActive?: boolean;
  icon: any;
}


const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { subMenus, heading, title, to, icon } = props;


  return (
    <li className="li">
       {title && 
              <NavLink
                to={to || ''}
                style={{textDecoration: 'none'}}
                className="menu-item"
              >
                 {({ isActive }) => (
                   <div className={`${ isActive ? 'activeClassName' : 'opacity'} menu-list`}>
                    <span className={isActive ? "stripe" : 'd-none'}/>
                    <img src={icon} alt={title} />
                    <h3 className="title">{title}</h3>
                  </div>
                  )}
              
                
              </NavLink>
          }
      {subMenus && subMenus.length > 0 ? (
        <>
         <div className={`sub-menu`}>
           <h3 className="heading">{heading}</h3>
           <div>
             {subMenus.map((menu, index) => (
              <NavLink to={menu.to} 
                key={index} 
              >
                {({ isActive }) => (
                   <div className={`${ isActive ? 'activeClassName' : 'opacity'} sub-menu-list`}>
                    <span className={isActive ? "stripe" : 'd-none'}/>
                        <img src={menu.icon} alt={menu.name} />
                      {menu.name}
                  </div>
                  )}
              </NavLink>
          ))}
           </div>
         
        </div>
        </> 
      ) : null}
    </li>
  );
};

export default MenuItem;
