const MostrarProduto = ({ produto }) => {
    return (
      <div>
        <h3>Produto:</h3>
        <p><strong>Nome:</strong> {produto.nome}</p>
        <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2).replace('.', ',')}</p>
        <p><strong>Estoque:</strong> {produto.estoque} unidades</p>
      </div>
    );
  };
  
  export default MostrarProduto;