import React from "react";

import './App.css';
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';

export default (props) => (
  <div className="App">
    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>
    <Card titulo="#02 - Componente com parâmetro">
      <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
      <ComParametro titulo="Second title" subtitulo="Second subtitle" />
    </Card>
    <Card titulo="#03 - Componente com filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="#04 - Repetição">
      <Repeticao/>
    </Card>
    <Card titulo="#05 - Condicional v1">
      <Condicional numero={11}/>
    </Card>
    <Card titulo="#06 - Condicional v2">
      <CondicionalComIf numero={10}/>
    </Card>
  </div>
);
