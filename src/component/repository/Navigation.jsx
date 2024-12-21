import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import "./style.css";

const navItems = [
  {
    img: "/img/home.svg",
    name: "Repositories",
    link: "/repository",
  },
  {
    img: "/img/code.svg",
    name: "AI Code Review",
    link: "/ai-code-review",
  },
  {
    img: "/img/cloud.svg",
    name: "Cloud Security",
    link: "/cloud-security",
  },
  {
    img: "/img/book.svg",
    name: "How to Use",
    link: "/how-to-use",
  },
  {
    img: "/img/gear.svg",
    name: "Settings",
    link: "/settings",
  },
];

const footerItems = [
  {
    img: "/img/phone.svg",
    name: "Support",
    link: "#",
  },
  {
    img: "/img/sign-out.svg",
    name: "Logout",
    link: "#",
  },
];

const Navigation = () => {
  return (
    <>
      <MobileNav navItems={navItems} footerItems={footerItems} />
      <DesktopNav navItems={navItems} footerItems={footerItems} />
    </>
  );
};

export default Navigation;
