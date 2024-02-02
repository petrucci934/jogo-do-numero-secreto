let listaDeNumerosAleatorio = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
console.log(numeroSecreto);
const exibirTextoNaTela = (tag, texto) => {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
};
exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 a 10");

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite - 1);
  let quantidadeDeElementos = listaDeNumerosAleatorio.length;

  if (listaDeNumerosAleatorio == numeroLimite) {
    listaDeNumerosAleatorio = [];
  }
  if (listaDeNumerosAleatorio.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosAleatorio.push(numeroEscolhido);
    console.log(listaDeNumerosAleatorio);
    return numeroEscolhido;
  }
}
const limpaCampo = () => {
  chute = document.querySelector("input");
  chute.value = "";
};

const reiniciarJogo = () => {
  numeroSecreto = gerarNumeroAleatorio();
  limpaCampo();
  tentativa = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
};
function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 a 10");
}
exibirMensagemInicial();
function verificarChute() {
  exibirTextoNaTela("h1", "Acertou Parabéns!!");
  let palavraTetativa = tentativa > 1 ? "tentativas!" : "tentativa!";
  let chute = document.querySelector("input").value;
  let mensagemTentativas = `Você descobriu o número secreto com ${tentativa} ${palavraTetativa}`;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número é menor");
    } else {
      exibirTextoNaTela("p", "O número é maior");
    }
    tentativa++;
    limpaCampo();
  }
}
