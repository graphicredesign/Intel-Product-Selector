import React from "react";
import "./styles.css";

class Product extends React.Component {
  render() {
    return (
      <div className="product-content">
        <div className="initial-cont"></div>
        <div className="product-main-cont">
          <div className="product-icon"></div>
          <div className="product-eyebrow">
            LOOK FOR A LAPTOP POWERED&nbsp;BY&nbsp;THE
          </div>
          <div className="product-hl">
            10<sup>th</sup> Gen<sup></sup> Intel<sup>®</sup>&nbsp;Core
            <sup>™</sup> i7&nbsp;-&nbsp;10875H<sup></sup> Processor<sup></sup>
          </div>
          <div className="divider"></div>
          <div className="product-sh-cont">
            <div id="sh-1" className="product-sh">
              Up To 5.1 GHz Clock Speed<sup>1</sup>
            </div>
            <div id="sh-2" className="product-sh">
              With 8 Cores & 16 Threads
            </div>
          </div>
          <div className="product-footer"></div>
        </div>
      </div>
    );
  }
}

export default Product;