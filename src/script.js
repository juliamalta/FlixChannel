function adicionarFilme() {
  var adicionar = document.getElementById("filme").value;
  var nome = document.getElementById("titulo").value;

  if (adicionar.endsWith("jpg")) {
    listarFilmesNaTela(adicionar);

    listarNomeNaTela(nome);
  } else {
    console.error("Endereço de Filme Invalido");
  }

  document.getElementById("filme").value = "";

  document.getElementById("titulo").value = "";
}

function listarFilmesNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";

  var elementolistaFilmes = document.getElementById("listaFilmes");
  elementolistaFilmes.innerHTML =
    elementolistaFilmes.innerHTML + elementoFilmeFavorito;
}

function listarNomeNaTela(nome) {
  var elementoNomeFilme = '<div class="flex-container">' + nome + "</div>";
  console.log(elementoNomeFilme);
  var elementoexibiFilme = document.getElementById("listaFilmes");

  elementoexibiFilme.innerHTML =
    elementoexibiFilme.innerHTML + elementoNomeFilme;
}
