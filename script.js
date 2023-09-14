const body = document.body;
const constBotonModo = document.getElementById("BotonModo");
var H1 = document.getElementById("Titulo");
var rasismo = document.getElementById("rasismo");

constBotonModo.addEventListener("click", () => {
  // Cambia las clases CSS del body para alternar entre modo oscuro y claro
  body.classList.toggle("dark-mode");

  // Verifica si el modo oscuro está activado o desactivado
  const isDarkMode = body.classList.contains("dark-mode");

  if (isDarkMode) {
    constBotonModo.textContent = "🧑🏻";
    H1.textContent = "Sin Derechos";
    rasismo.textContent = "Coloque su chiste Racista";
  } else {
    H1.textContent = "Derechos";
    constBotonModo.textContent = "🧑🏿";
    rasismo.textContent = "Coloque su chiste";
  }


});


