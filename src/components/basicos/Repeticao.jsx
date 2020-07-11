import React from 'react';

import produtos from '../../data/products';

export default props => {
  function getProdutoLi() {
    return produtos.map(produto => {
      return <li key={produto.id}>
        {produto.id} - {produto.nome} -> R${produto.preco.toFixed(2)}
        </li>
    });
  }

  return (
    <div>
      <h2>Repetição</h2>
      <ul>
        {getProdutoLi()}
      </ul>
    </div>
  )
}