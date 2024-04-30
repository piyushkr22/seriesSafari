import React from "react";

import "./style.scss";

const Spinner = ({ initial }) => {
  return (
    <div className={`loadingSpinner ${initial ? "initial" : ""}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
