function burgerMenuFn () {
    const burgerMenu = document.querySelector(".burger-menu");
const headerContainer = document.querySelector(".header__container");
const body = document.body;
burgerMenu.addEventListener("click", () => {
  headerContainer.classList.toggle("header__max-height");
  body.classList.toggle("no-scroll");
});
}

