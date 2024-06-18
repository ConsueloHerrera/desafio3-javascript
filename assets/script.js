function pintar(elemento, colorInicial, colorNuevo) {
  const colorActual = elemento.style.backgroundColor;

  if (colorActual === colorInicial) {
    elemento.style.backgroundColor = colorNuevo;
  } else {
    elemento.style.backgroundColor = colorInicial;
  }
}

const ele = document.getElementById("ele1");

ele.addEventListener("click", function () {
  pintar(ele, "green", "yellow");
});
