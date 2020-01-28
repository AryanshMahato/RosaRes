import React from "react";
import styles from "./NavLinks.module.css";
import NavLink from "./NavLink/NavLink";

const NavLinks = () => {
  return (
    <div className={styles.navLinks}>
      <NavLink>Contact Us</NavLink>
      <NavLink>Login</NavLink>
      <NavLink cta>Reach Us</NavLink>
    </div>
  );
};

export default NavLinks;
