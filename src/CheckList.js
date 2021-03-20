import React from "react";
import CheckItem from "./CheckItem";
import productList from "./products.json";
import $ from "jquery";

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
          if (p.i === i) {
            console.log(i);
            console.log($(".product-eyebrow"));
          }
          //console.log(p.isChecked);
        }
        return newState;
      });
      //console.log(newState);
    });
  };

  componentDidMount() {
    var lastToggle = "left";
    function toggleButton(e) {
      if (e !== lastToggle) {
        lastToggle = e;
        $(".toggle-left-btn").toggleClass("white-button");
        $(".toggle-right-btn").toggleClass("white-button");
      } else {
        lastToggle = e;
      }
    }
    $(".toggle-left-btn").on("click", function () {
      toggleButton("left");
    });
    $(".toggle-right-btn").on("click", function () {
      toggleButton("right");
    });
  }

  render() {
    const list = this.state.products.map((item) => (
      <CheckItem
        key={item.number}
        item={item.number}
        products={item}
        handleChange={this.handleChange}
      />
    ));

    return (
      <>
        <div className="product-hl default">FOR HOWEVER YOU&nbsp;GAME</div>

        <div className="callout">Choose your objective(s).</div>

        <div className="toggle-btn buttons">
          <div className="buttons toggle-left-btn white-button">Desktop</div>
          <div className="buttons toggle-right-btn">Laptop</div>
        </div>
        {list}
      </>
    );
  }
}

export default CheckList;
