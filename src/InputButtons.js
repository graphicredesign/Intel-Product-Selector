import React from "react";

import "./styles.scss";

export default class InputButtons extends React.Component {
  render() {
    return (
      <div className="input-buttons-cont flex-nowrap">
        <div className="submit-btn buttons white-button">SUBMIT</div>
        <div className="clear-btn buttons white-button">CLEAR</div>
      </div>
    );
  }
}
