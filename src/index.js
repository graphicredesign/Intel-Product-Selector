import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";

//import App from "./App";
import "./styles.scss";
import CheckList from "./CheckList";
import Product from "./Product";
import InputButtons from "./InputButtons";

class Main extends React.Component {
  render() {
    return (
      <div className="app-cont flex-wrap">
        <div className="list-cont">
          <CheckList />
        </div>
        <div className="product-cont">
          <Product />
        </div>
        <div className="input-cont">
          <InputButtons />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Main />
  </StrictMode>,
  rootElement
);
