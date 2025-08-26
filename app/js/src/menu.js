// мобильное меню
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const burger = document.querySelector(".header__burger");

    const menuItems = document.querySelectorAll(".header .menu > .menu-item");
    const subMenus = document.querySelectorAll(".header .menu > .menu-item > .sub-menu");

    const headerBox = document.querySelector(".header__content");
    const upButton = document.querySelector(".upButton");

    const mediaQuery = window.matchMedia("(max-width: 1200px)");

    subMenus.forEach(subMenu => {
        subMenu.style.maxHeight = "0px";
    })

    function handleChange(e) {
        if (e.matches) {
            // экран <= 1200
            burger.onclick = () => {
                header.classList.toggle("active");
                burger.classList.toggle("active");
                headerBox.classList.toggle("active");
            };

            menuItems.forEach(menuItem => {
                menuItem.onclick = () => {
                    const subMenu = menuItem.querySelector(".sub-menu");
                    subMenu.classList.toggle('active');

                    if (subMenu.classList.contains('active')) {
                        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                    } else {
                        subMenu.style.maxHeight = "0px";
                    }
                }
            })

        } else {
            // экран > 1200
        }
    }

    // проверяем при загрузке
    handleChange(mediaQuery);

    // слушаем изменения
    mediaQuery.addEventListener("change", handleChange);
});