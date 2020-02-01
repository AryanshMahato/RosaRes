import React from "react";

import classes from "./Header.module.scss";

import Logo from "./Logo/Logo";
import MobileNav from "./MobileNav/MobileNav";
import DesktopNav from "./DesktopNav/DesktopNav";

const Header = () => {
  return (
    <div className={classes.mainHeader}>
      <MobileNav />
      <Logo />
      <DesktopNav />
    </div>
  );
};

export default Header;
