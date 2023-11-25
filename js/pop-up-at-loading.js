const closeCtaBtn = document.querySelector("a.btn");
const closeXBtn = document.querySelector("div.popup-close");
const popup = document.querySelector(".popup-wrapper");

function exibirPopup() {
  popup.style.display = "flex";
  console.log("Apareceu!");

  closeCtaBtn.addEventListener("click", function () {
    fecharPopup();
    console.log("Clicou pra fechar!");
  });
  closeXBtn.addEventListener("click", function () {
    fecharPopup();
    console.log("Clicou pra fechar!");
  });
}

function fecharPopup() {
  popup.style.display = "none";

  localStorage.setItem("popupFechado", "true");
  // sessionStorage.setItem("popupFechado", "true");

  closeCtaBtn.removeEventListener("click", fecharPopup);
  closeXBtn.removeEventListener("click", fecharPopup);

  location.reload();
}

const popupFechado = localStorage.getItem("popupFechado");
// const popupFechado = sessionStorageStorage.getItem("popupFechado");

if (popupFechado !== "true") {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(exibirPopup, 1000);
  });
} else {
  popup.style.display = "none";
}
