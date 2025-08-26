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
            subMenus.forEach(subMenu => {
                subMenu.style.maxHeight = "0px";
            })

            burger.onclick = () => {
                if (burger.classList.contains('active')) {
                    // Закрыли меню
                    header.classList.remove("active");
                    burger.classList.remove("active");
                    headerBox.classList.remove("active");

                    subMenus.forEach(subMenu => {
                        subMenu.style.maxHeight = "0px";
                        subMenu.classList.remove('active');
                    })
                } else {
                    // Активировали меню
                    header.classList.add("active");
                    burger.classList.add("active");
                    headerBox.classList.add("active");
                }
            };

            menuItems.forEach(menuItem => {
                menuItem.onclick = () => {
                    const subMenu = menuItem.querySelector(".sub-menu");

                    // Закрываем все подменю кроме текущего
                    menuItems.forEach(otherItem => {
                        if (otherItem !== menuItem) {
                            const otherSubMenu = otherItem.querySelector(".sub-menu");
                            otherSubMenu.classList.remove('active');
                            otherSubMenu.style.maxHeight = "0px";
                        }
                    });

                    // Переключаем текущее подменю
                    subMenu.classList.toggle('active');

                    if (subMenu.classList.contains('active')) {
                        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                    } else {
                        subMenu.style.maxHeight = "0px";
                    }
                }
            });

        } else {
            // экран > 1200
            header.classList.remove("active");
            burger.classList.remove("active");
            headerBox.classList.remove("active");

            subMenus.forEach(subMenu => {
                subMenu.style.maxHeight = "";
            })
        }
    }

    // проверяем при загрузке
    handleChange(mediaQuery);

    // слушаем изменения
    mediaQuery.addEventListener("change", handleChange);
});