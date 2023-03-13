// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


//========================================================================================================================================================

// Menu items hover

/* const menuItemsWithSubMenu = document.querySelectorAll('.menu__item.menu-item-has-children');

if (menuItemsWithSubMenu.length) {
    menuItemsWithSubMenu.forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.classList.contains('_hover')) {
                item.classList.remove('_hover')
            } else {
                item.classList.add('_hover')
            }
            console.log('e: ', e.target);
            e.preventDefault();
            item.classList.toggle('_hover');
        });
    })
} */