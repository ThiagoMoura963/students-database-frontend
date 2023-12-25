import { NavLink } from "react-router-dom";
import styles from "./BannerLink.module.css";

const BannerLink = ({ to, children }) => {
    return (
        <>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `${styles.link} ${isActive
                  ?  styles.linkActive 
                  : ""
                }`
              }
              end
            >
                {children}
            </NavLink>
        </>
    )
}

export default BannerLink;