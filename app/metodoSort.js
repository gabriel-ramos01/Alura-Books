let btnOrdenarPorPreço = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreço.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  let LivrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirOsLivrosNaTela(LivrosOrdenados);
}
