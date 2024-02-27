let livros = [];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLirosDaApi()


//Isso antes de function torna a função assíncrona 
async function getBuscarLirosDaApi() {
  const res = await fetch(endpointDaApi);
  livros = await res.json();
  const livrosComDesconto = aplicarDesconto(livros);
  exibirOsLivrosNaTela(livrosComDesconto);
}



