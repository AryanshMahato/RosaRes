import React from "react";
import styles from "./NavLink.module.css";

const NavLink = props => {
  if (props.cta) {
    return (
      <div className={styles.cta__container}>
        <div className={[styles.navLink, styles.cta].join(" ")}>
          {props.children}
        </div>
      </div>
    );
  }
  return <div className={styles.navLink}>{props.children}</div>;
};

export default NavLink;
