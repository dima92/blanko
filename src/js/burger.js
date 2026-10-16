export const initBurger = () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");
  const body = document.body;

  if (burger && menu) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-open");

      body.classList.toggle("disable-scroll");
    });

    const menuItems = document.querySelectorAll(".header__link, .header__btn");
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        burger.classList.remove("is-active");
        menu.classList.remove("is-open");
        body.classList.remove("disable-scroll");
      });
    });
  }
};
