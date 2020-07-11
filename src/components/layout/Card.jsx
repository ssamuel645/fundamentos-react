import React from "react";

import "./Card.css";

export default (props) => (
  <div className="card">
    <div className="content">{props.children}</div>
    <div className="footer">{props.titulo}</div>
  </div>
);
