import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about-us",
    name: "About Us",
  },
  {
    path: "/contact-us",
    name: "Contact Us",
  },
  {
    path: "/track-order",
    name: "Track Order",
  },
];

export default function Navbar() {
  return (
    <div className="flex justify-around p-5 bg-black ">
      {links.map((ele, index) => (
        <NavLink
          key={index}
          to={ele.path}
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
        >
          {ele.name}
        </NavLink>
      ))}
    </div>
  );
}
