import React from "react";
import Layout from "../HOC/Layout";
import Backdrop from "../Containers/Backdrop/Backdrop";

class Index extends React.Component {
  state = {
    showBackdrop: true
  };

  backdropClicked = () => {
    this.toggleBackdrop();
  };

  toggleBackdrop = () => {
    this.setState(prevState => ({ showBackdrop: !prevState.showBackdrop }));
  };

  render() {
    return (
      <Layout>
        <h1>Index Content</h1>
        <Backdrop
          show={this.state.showBackdrop}
          backdropClicked={this.backdropClicked}
        />
      </Layout>
    );
  }
}

export default Index;
