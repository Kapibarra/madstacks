import React, { Component } from "react";
import Card from "../../components/Cards/Card";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import classes from "./Layout.module.css";


class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header />
        <Main />
        <Card />
      </div>
    );
  }
}

export default Layout