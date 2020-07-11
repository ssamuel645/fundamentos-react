import React from "react";

export default ({ numero }) => {
  return (
    <div>
      <h2>O número é {numero}</h2>
      {numero % 2 === 0 ? <span>Par</span> : <span>Ímpar</span>}
    </div>
  );
};
