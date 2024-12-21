import { Link, NavLink } from "react-router-dom";
import "./style.css";

const DesktopNav = ({ navItems, footerItems }) => {
  return (
    <div className="desktopNav">
      <div className="desktopNavContent">
        <div className="desktopNavHeader flex">
          <img src="/img/logo.svg" alt="logo" />
          <p>CodeAnt AI</p>
        </div>
        <div className="desktopNavSearch">
          <input type="text" placeholder="Search" />
          <img src="/img/chevron-down.svg" alt="search" />
        </div>
        {navItems.map((nav, index) => (
          <NavLink
            to={nav.link}
            key={index}
            className={`${({ isActive }) =>
              isActive ? "active" : ""} desktopNavItem flex`}
          >
            <img src={nav.img} alt={nav.name} />
            <p>{nav.name}</p>
          </NavLink>
        ))}
      </div>
      <div className="desktopNavFooter">
        {footerItems.map((footer, index) => (
          <Link to={footer.link} key={index} className="desktopFooterItem flex">
            <img src={footer.img} alt={footer.name} />
            <p>{footer.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopNav;
