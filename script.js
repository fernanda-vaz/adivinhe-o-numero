let numeroAleatorio = Math.floor(Math.random() * 100 + 1);
const palpites = document.querySelector(".palpites");
const ultimoPalpite = document.querySelector(".ultimo-palpite");
const altoOuBaixo = document.querySelector(".alto-baixo");
const input = document.querySelector(".campo-adivinhacao");
const enviarBt = document.querySelector(".enviar-palpite");
const formulario = document.querySelector(".formulario");

let tentativas = 1;
let reset;

function checarPalpite() {
  const tentativaUsuario = Number(input.value);

  if (tentativas === 1) {
    palpites.textContent = "";
  }
  palpites.textContent = `${palpites.textContent} ${tentativaUsuario}`;

  if (tentativaUsuario === numeroAleatorio) {
    ultimoPalpite.textContent = `PARABÉNS!!! Você acertou em ${tentativas} tentativas!`;
    ultimoPalpite.style.color = "#117864";
    altoOuBaixo.innerHTML = "";
    fimDeJogo();
  } else if (tentativas === 10) {
    ultimoPalpite.textContent = "Fim de jogo... Acabaram as tentativas.";
    altoOuBaixo.textContent = "";
    fimDeJogo();
  } else {
    ultimoPalpite.textContent = `Você errou! Ainda restam ${
      10 - tentativas
    } tentativas.`;
    ultimoPalpite.style.color = "#CB4335";

    if (tentativaUsuario < numeroAleatorio) {
      altoOuBaixo.textContent = "O número secreto é maior.";
    } else if (tentativaUsuario > numeroAleatorio) {
      altoOuBaixo.textContent = "O número secreto é menor.";
    }
  }

  tentativas++;
  input.value = "";
  input.focus();
}

enviarBt.addEventListener("click", checarPalpite);

function fimDeJogo() {
  input.disabled = true;
  enviarBt.disabled = true;
  recomecarBt = document.createElement("button");
  recomecarBt.classList.add("novo-jogo");
  recomecarBt.textContent = "Novo jogo";
  formulario.appendChild(recomecarBt);
  recomecarBt.addEventListener("click", recomecarJogo);
}

function recomecarJogo() {
  tentativas = 1;
  const resetResultados = document.querySelectorAll(".resultados p");
  for (const resetResultado of resetResultados) {
    resetResultado.textContent = "";
  }

  recomecarBt.parentNode.removeChild(recomecarBt);
  input.disabled = false;
  enviarBt.disabled = false;
  input.value = "";
  input.focus();
  ultimoPalpite.style.backgroundColor = "white";
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
