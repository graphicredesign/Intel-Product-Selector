import React from "react";
import "./styles.scss";

function CheckItem(props) {
  return (
    <div className="check-item">
      <div className="flex-container">
        <input
          className="flex-items"
          type="checkbox"
          data-item={props.item}
          checked={props.products.isChecked}
          onChange={() => {
            console.log("checked");
            props.handleChange(props.products.i);
            console.log(`Product Passed: ${props.products.i}`);
          }}
        />
        <p className="flex-items">{props.products.usage}</p>
      </div>
    </div>
  );
}
export default CheckItem;
