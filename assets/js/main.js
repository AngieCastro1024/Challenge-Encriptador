// Variables
let encriptar = document.getElementById("encriptar");
let desencriptar = document.getElementById("desencriptar");
let texto = document.getElementById("input");
let resultado = document.getElementById("output");
let copiar = document.getElementById("copiar");
let limpiar = document.getElementById("limpiar");

function encriptarTexto() {
  let data = texto.value;
  // Reglas de encriptación
  /*
  La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
  */
  data = data.replace(/e/g, "enter");
  data = data.replace(/i/g, "imes");
  data = data.replace(/a/g, "ai");
  data = data.replace(/o/g, "ober");
  data = data.replace(/u/g, "ufat");

  return data;
}

function desencriptarTexto() {
  let data = texto.value;
  // Reglas de encriptación
  /*
  La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
  */
  data = data.replace(/enter/g, "e");
  data = data.replace(/imes/g, "i");
  data = data.replace(/ai/g, "a");
  data = data.replace(/ober/g, "o");
  data = data.replace(/ufat/g, "u");

  return data;
}
function chequearCampos() {
  if (texto.value == "") {
    document
      .getElementsByClassName("output-empty")[0]
      .classList.remove("disabled");
    document
      .getElementsByClassName("output-text")[0]
      .classList.remove("active");
  } else {
    document
      .getElementsByClassName("output-empty")[0]
      .classList.add("disabled");
    document.getElementsByClassName("output-text")[0].classList.add("active");
  }
}
// Eventos
encriptar.addEventListener("click", () => {
  chequearCampos();
  resultado.innerHTML = encriptarTexto();
});

desencriptar.addEventListener("click", () => {
  chequearCampos();
  resultado.innerHTML = desencriptarTexto();
});

copiar.addEventListener("click", () => {
  let data = resultado.innerHTML;
  navigator.clipboard.writeText(data);
});

limpiar.addEventListener("click", () => {
  texto.value = "";
  resultado.innerHTML = "";
  document
    .getElementsByClassName("output-empty")[0]
    .classList.remove("disabled");
  document.getElementsByClassName("output-text")[0].classList.remove("active");
});
