import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const MobileNav = ({ navItems, footerItems }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <div className="mobileNav">
      <div className="mobileNavHeaderContainer">
        <div className="flex mobileNavHeader">
          <img src="/img/logo.svg" alt="logo" />
          <p>CodeAnt AI</p>
        </div>
        <div className="">
          {showMobileNav ? (
            <img
              style={{ cursor: "pointer" }}
              src="/img/close.svg"
              alt="close"
              onClick={() => setShowMobileNav(false)}
            />
          ) : (
            <img
              style={{ cursor: "pointer" }}
              src="/img/bars.svg"
              alt="menu"
              onClick={() => setShowMobileNav(true)}
            />
          )}
        </div>
      </div>

      {showMobileNav && (
        <div className="mobileNavContent">
          <div className="mobileNavSearch">
            <input type="text" placeholder="Search" />
            <img src="/img/chevron-down.svg" alt="search" />
          </div>
          {navItems.map((nav, index) => (
            <NavLink to={nav.link} key={index} className={`flex mobileNavItem`}>
              <img src={nav.img} alt={nav.name} />
              <p>{nav.name}</p>
            </NavLink>
          ))}
          {footerItems.map((footer, index) => (
            <Link
              to={footer.link}
              key={index}
              className="flex mobileFooterItem"
            >
              <img src={footer.img} alt={footer.name} />
              <p>{footer.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
