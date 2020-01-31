import React from "react";
import Layout from "../HOC/Layout";

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
      </Layout>
    );
  }
}

export default Index;
