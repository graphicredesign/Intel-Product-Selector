import React from "react";

import "./styles.scss";

export default class InputButtons extends React.Component {
  render() {
    return (
      <div className="input-buttons-cont flex-nowrap">
        <div className="submit-btn buttons">SUBMIT</div>
        <div className="clear-btn buttons">CLEAR</div>
      </div>
    );
  }
}
