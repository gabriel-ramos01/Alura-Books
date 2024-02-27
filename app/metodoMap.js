function aplicarDesconto(livros) {
  const desconto = 0.3;
  const livrosComDesconto = livros.map(livro => {
    return { ...livro, preco: livro.preco - (livro.preco * desconto) };
  });
  return livrosComDesconto;
}
//Esse método de return com chaves e ... é para criar uma cópia do objeto e alterando uma determinada propriedade dentro deste objeto.