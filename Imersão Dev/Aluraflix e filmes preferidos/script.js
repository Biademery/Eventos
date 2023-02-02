function adicionarFilme() {
  const favoriteMovie = document.querySelector('#filme').value;
  const movieElement = document.querySelector('#listaFilmes');
  movieElement.innerHTML = `${movieElement.innerHTML}<img src=${favoriteMovie}>`;

  document.querySelector('#filme').value = '';
}
