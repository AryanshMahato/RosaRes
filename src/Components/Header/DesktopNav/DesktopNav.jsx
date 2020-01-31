import React from "react";
import NavLinks from "../NavLinks/NavLinks";

import styles from "./DesktopNav.module.css";

const DesktopNav = () => {
  return (
    <div className={styles.desktopNav}>
      <NavLinks />
    </div>
  );
};

export default DesktopNav;
