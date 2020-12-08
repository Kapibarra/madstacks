import React, { Component } from "react";
import Card from "../../components/Cards/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Portfolio from "../../components/Portfolio/Portfolio";
import Service from "../../components/Service/Service";
import classes from "./Layout.module.css";


class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header />
        <Service />
        <Main />
        <Card />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default Layout