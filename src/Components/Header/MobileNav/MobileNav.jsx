import React from "react";

import styles from "./MobileNav.module.css";
import NavLinks from "../NavLinks/NavLinks";

const MobileNav = () => {
  return (
    <div className={styles.mobileNav}>
      <NavLinks />
    </div>
  );
};

export default MobileNav;
