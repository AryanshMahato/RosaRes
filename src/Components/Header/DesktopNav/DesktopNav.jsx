import React from "react";
import NavLinks from "../NavLinks/NavLinks";

import styles from "./DesktopNav.module.scss";

const DesktopNav = () => {
  return (
    <div className={styles.desktopNav}>
      <NavLinks />
    </div>
  );
};

export default DesktopNav;
