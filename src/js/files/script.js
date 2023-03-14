// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


//========================================================================================================================================================

// Popup video

const videoSlides = document.querySelectorAll('.slide-videos');
const popupVideo = document.querySelector('#video video');
const popupVideoPlay = document.querySelector('#video ._play');

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

if (videoSlides.length && popupVideo) {
    videoSlides.forEach(slide => {
        slide.addEventListener('click', () => {
            popupVideo.src = slide.dataset.video;
        })
    })

    popupVideoPlay.addEventListener('click', () => {
        if (popupVideo.playing) {
            popupVideo.pause();
            popupVideoPlay.classList.add('_show');
        } else {
            popupVideo.play();
            popupVideoPlay.classList.remove('_show');
        }
    })
}

document.addEventListener("beforePopupClose", function (e) {
    // Попап
    const currentPopup = e.detail.popup;
    if (currentPopup.hash == '#video') {
        popupVideo.pause();
        if (!popupVideoPlay.classList.contains('_show')) {
            popupVideoPlay.classList.add('_show');
        }
    }
    console.log('currentPopup: ', currentPopup);
});

//========================================================================================================================================================

// Mobile menu

const menuItems = document.querySelectorAll('.menu-item-has-children');

if (menuItems.length) {
    menuItems.forEach(item => {
        item.addEventListener('click', (el) => {
            if (el.target.classList.contains('menu-item-has-children') || el.target.parentNode.classList.contains('menu-item-has-children')) {
                item.classList.toggle('_active');
            }
        })
    })
}