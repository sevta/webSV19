import React, { Component } from "react";
import Navleft from "./Navleft";
import Layout from "../../../component/layout/Layout";
import BurgerMenu from "../../burgerMenu/BurgerMenu";

export default class ComponentList extends Component {
  render() {
    return (
      <Layout>
        <div className="container mx-auto">
          <h1>component list</h1>
          <Navleft />
          <BurgerMenu />
        </div>
      </Layout>
    );
  }
}
