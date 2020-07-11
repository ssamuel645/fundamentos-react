import React from "react";

import If from './If';

export default ({ numero }) => {
  return (
    <div>
      <h2>O número é {numero}</h2>
      <If test={numero % 2 === 0}><span>Par</span></If>
      <If test={numero % 2 === 1}><span>Ímpar</span></If>
    </div>
  );
};
