import React from "react";

import "./styles.css";

export default class InputButtons extends React.Component {
  render() {
    return (
      <div className="input-buttons-cont">
        <input type="button" className="submit-btn" value="SUBMIT"></input>
        <input type="button" className="clear-btn" value="CLEAR"></input>
      </div>
    );
  }
}
