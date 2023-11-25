const btnReadMore01 = document.querySelector("#read-more-01");
const popupReadMore01 = document.querySelector(".popup-wrapper-rm");

btnReadMore01.addEventListener("click", () => {
  popupReadMore01.style.display = "flex";
});

popupReadMore01.addEventListener("click", (event) => {
  const classNameOfClickedEvent = event.target.classList[0];
  const classNames = ["bx", "popup-link", "popup-wrapper-rm"];
  const shouldClosePopup = classNames.some(
    (classNames) => classNames === classNameOfClickedEvent
  );
  if (shouldClosePopup) {
    //console.log("Funciona!");
    popupReadMore01.style.display = "none";
  }
});
