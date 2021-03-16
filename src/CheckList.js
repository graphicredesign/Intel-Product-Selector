import React from "react";
import CheckItem from "./CheckItem";
import productList from "./products.json";

import "./styles.scss";

class CheckList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: productList
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (i) => {
    console.log(`Product Received: ${i}`);
    this.setState((prevState) => {
      const newState = prevState.products.map((p) => {
        if (p.i === i) {
          //console.log(`Items Matched: ${i}`);
          p.completed = !p.completed;
          //console.log(p.isChecked);
        }
        return newState;
      });
      //console.log(newState);
    });
  };

  render() {
    const list = this.state.products.map((item) => (
      <CheckItem
        key={item.number}
        products={item}
        handleChange={this.handleChange}
      />
    ));
    return list;
  }
}

export default CheckList;
