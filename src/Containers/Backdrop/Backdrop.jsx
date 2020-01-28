import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = props => {
  // Props Required:
  //   show: boolean,
  //   backdropClicked: function -> Executes on backdrop Clicked

  const classes = () => {
    if (props.show) {
      return styles.show;
    }
    return null;
  };

  return (
    <div
      className={styles.backdrop + " " + classes()}
      onClick={props.backdropClicked}
    />
  );
};

export default Backdrop;
