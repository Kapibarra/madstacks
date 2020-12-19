import React, { Component } from "react";
import Card from "../../components/Cards/Card";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Slider from "../../components/Portfolio/Portfolio";
import Service from "../../components/Service/Service";
import classes from "./Layout.module.css";
import { BrowserRouter as Router, Switch,Redirect, withRouter, Route} from "react-router-dom";
import Form from "../../components/Form/Form";


class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
         <Switch>
        <Route path="/" exact>
          <Header />
          <Service />
          <Main />
          <Footer />
        </Route>
        <Route path="/portfolio" >
          <Header />
          <Slider />
          <Card />
          <Footer />
        </Route>
        <Route path="/contacts" >
          <Header />
          <Contacts />
          <Form />
          <Footer />
        </Route>
      </Switch>
      </div>
    );
  }
}

export default Layout