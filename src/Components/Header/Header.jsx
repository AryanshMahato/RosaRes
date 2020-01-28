import React from "react";
import classes from "./Header.module.css";
import NavLinks from "./NavLinks/NavLinks";
import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <div className={classes.mainHeader}>
      <Logo />
      <NavLinks />
    </div>
  );
};

export default Header;
