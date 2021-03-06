;(() => {
  "use strict";

  const headerMenu = document.querySelector(".header__menu");
  const headerNavigationList = document.querySelector(".header__navigation-list");

  const showMenu = () => {
    headerMenu.classList.toggle("header__menu--active");
    headerNavigationList.classList.toggle("header__navigation-list--active");
  };

  headerMenu.addEventListener("click", showMenu);
})();