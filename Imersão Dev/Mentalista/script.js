const secretNumber = parseInt(Math.random() * (1001 - 1) + 1);

while (anotherGuess !== secretNumber) {
  var anotherGuess = Number(prompt('Digite um número entre 0 e 1000'));

  if (anotherGuess === secretNumber) {
    alert('Acertou!');
  } else if (anotherGuess > secretNumber) {
    alert('O número secreto é menor');
  } else if (anotherGuess < secretNumber) {
    alert('O número secreto é maior');
  }
}
