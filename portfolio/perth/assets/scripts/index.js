;(() => {
  "use strict";

  const homeMenu = document.querySelector(".home__menu");
  const popup = document.querySelector(".popup");
  const popupClose = document.querySelector(".popup__close");
  const popupLinks = document.querySelectorAll(".popup__navigation-link");
  const VISUALLY_HIDDEN = "visually-hidden";

  const showPopup = () => {
    popup.classList.toggle(VISUALLY_HIDDEN);
  };

  homeMenu.addEventListener("click", showPopup);
  popupClose.addEventListener("click", showPopup);
  window.addEventListener("keydown", (event) => {
    if (event.keyCode === 27) {
      if (!popup.classList.contains(VISUALLY_HIDDEN)) {
        showPopup();
      }
    }
  });
  popupLinks.forEach(link => link.addEventListener("click", showPopup));
})();