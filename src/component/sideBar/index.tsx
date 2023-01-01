import React, { useEffect } from "react";
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
  
    const removeActiveClassFromSubMenu = () => {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        el.classList.remove("active");
      });
    };

     /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);
  
  return (
    <div className={`sidebar`}>
      
    <div className="main-menu">
    
        {menuItems.map((menuItem, index) => (
          <>
          {menuItem?.title && 
              <NavLink
                // exact={exact}
                to={menuItem.to || ''}
                className='menu-item'
              >
                  <>{menuItem.icon}</>
                <h3 className="title">{menuItem.title}</h3>
              </NavLink>
          }
          
          <MenuItem
            key={index}
            heading={menuItem.heading || ""}
            title={menuItem.title || ""}
            exact={menuItem.exact}
            to={menuItem.to || ""}
            subMenus={menuItem.subMenus || []}
          />
          </>
           
        ))}
    </div>
  </div>
  )
}

export default SideBar;