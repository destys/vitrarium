/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Autoplay, FreeMode, Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.partners__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.partners__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая 
			modules: [Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 2000,

			allowTouchMove: false, // можно ещё отключить свайп
			//touchRatio: 0,
			simulateTouch: false,
			loop: true,
			// loopedSlides: 5,
			// loopPreventsSliding: true,
			preloadImages: true,
			// lazy: true,

			// Эффекты
			// effect: 'fade',
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
			},


			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар

			/* scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			}, */

			// Кнопки "влево/вправо"
			/* navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			}, */

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				474: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 4,
				},
				1268: {
					slidesPerView: 5,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.videos__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.videos__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая 
			modules: [Navigation, Autoplay, FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: 6,
			spaceBetween: 14,
			//autoHeight: true,
			speed: 1500,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			preloadImages: true,
			//lazy: true,


			// Эффекты
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар

			/* scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			}, */

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 14,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 24,
				},
				1268: {
					slidesPerView: 5,
					spaceBetween: 24,
				},
				1367: {
					slidesPerView: 6,
					spaceBetween: 24,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.page-title__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.page-title__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая 
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			//autoHeight: true,
			speed: 1500,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			preloadImages: true,
			//lazy: true,


			// Эффекты
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			// Пагинация

			pagination: {
				el: '.page-title__pagination',
				clickable: true,
			},


			// Скроллбар

			/* scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			}, */
		});
	}
	if (document.querySelector('.quiz__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const quizSwiper = new Swiper('.quiz__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая 
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			//autoHeight: true,
			speed: 1500,

			touchRatio: 0,
			simulateTouch: false,
			//loop: true,
			preloadImages: true,
			//lazy: true,


			// Эффекты
			//effect: 'fade',
			/* autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			}, */


			// Пагинация

			pagination: {
				el: '.progress-bar',
				type: 'progressbar',
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.quiz__navigation .prev',
				nextEl: '.quiz__navigation .next',
			},

			// Скроллбар

			/* scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			}, */

			on: {
				slideChange: function () {
					const index_currentSlide = quizSwiper.realIndex;
					let currentPercent = (index_currentSlide) * 100 / (quizSwiper.slides.length - 1);

					index_currentSlide == quizSwiper.slides.length - 1 ? document.querySelector('.quiz__bar .js-percent').innerText = '100%' : document.querySelector('.quiz__bar .js-percent').innerText = `${currentPercent}%`;

					if (index_currentSlide != 0) {
						document.querySelector('.quiz__navigation').style.display = 'flex';
					} else {
						document.querySelector('.quiz__navigation').style.display = 'none';
					}
				},
			}
		});

		document.querySelector('.right-quiz-slide__button').addEventListener('click', () => {
			quizSwiper.slideNext();
		})
		document.querySelector('.slide-quiz__form .form').addEventListener('submit', () => {
			quizSwiper.slideNext();
		})
	}
	if (document.querySelector('.reviews__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const quizSwiper = new Swiper('.reviews__slider', { // Указываем скласс нужного слайдера
			modules: [Autoplay, Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 20,
			speed: 1500,
			preloadImages: true,
			autoplay: {
				delay: 7000,
				disableOnInteraction: false,
			},

			// Пагинация
			pagination: {
				el: '.progress-bar',
				type: 'progressbar',
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.reviews__nav .prev',
				nextEl: '.reviews__nav .next',
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});