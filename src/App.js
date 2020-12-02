import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Layout from "./Hoc/Layout/Layout";

function App() {
  return (
    <Fragment>
      <Layout />
    </Fragment>
  );
}

export default App;
