import React from "react";
import styles from "./Backdrop.module.css";

class Backdrop extends React.Component {
  state = {
    show: true
  };

  backdropClicked = () => {
    this.setState(prevState => {
      return { show: !prevState.show };
    });
  };

  classes=()=>{
    if (this.state.show){
      return styles.backdrop;
    }
    return styles.hide
  };

  render() {
    return (
      <div
        className={this.classes()}
        onClick={this.backdropClicked}
      />
    );
  }
}

export default Backdrop;
