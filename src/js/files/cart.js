var moneyFormat = wNumb({
    mark: ',',
    thousand: ' ',
    prefix: 'от ',
    suffix: '  ₽'
});

const products = document.querySelectorAll('.item-catalog');
const cartList = document.querySelector('.cart__list');

const cartForm = document.querySelector('.cart__form');

const headerCartEl = document.querySelector('.actions-bottom-header__cart span');
const cartTotalEl = document.querySelector('.cart__total .total');

let productInCart = [];
let itemCart;

if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify(productInCart));
} else {
    productInCart = JSON.parse(localStorage.getItem('cart'));
}

headerCartEl.innerHTML = productInCart.length;


function addToCart(el) {
    const product = el.target.parentNode.parentNode;

    let itemCart = {
        id: product.dataset.id,
        thumb: product.querySelector('.item-catalog__thumb img').src,
        title: product.querySelector('.item-catalog__title').innerHTML,
        price: product.querySelector('.item-catalog__price .current').innerHTML,
        quantity: 1,
    }



    if (productInCart.find(product => product.id === itemCart.id)) {
        productInCart.find(product => product.id === itemCart.id).quantity++;
    } else {
        productInCart.push(itemCart);
    }

    localStorage.setItem('cart', JSON.stringify(productInCart));
}

function delFromCart(el) {
    if (el.target.dataset.ids) {
        productInCart = productInCart.filter(x => {
            return x.id != el.target.dataset.ids;
        })

        renderList();

        localStorage.setItem('cart', JSON.stringify(productInCart));
        
    }
}

function openCart() {
    if (productInCart.length == 0) {
        document.querySelector('.cart__list').style.display = 'none';
        document.querySelector('.cart__total').style.display = 'none';
        document.querySelector('.cart__empty').style.display = 'block';
    } else {
        document.querySelector('.cart__list').style.display = 'block';
        document.querySelector('.cart__total').style.display = 'block';
        document.querySelector('.cart__empty').style.display = 'none';
    }

    let totalPrice = 0;

    renderList();

    productInCart.forEach(item => {
        totalPrice = totalPrice + moneyFormat.from(item.price) * item.quantity;
    })

    cartTotalEl.innerHTML = moneyFormat.to(totalPrice);
}

function changeQuantityInCart(el) {
    let totalPrice = 0;
    if (el.target.classList.contains('quantity__button_minus')) {
        let prod = productInCart.find(product => product.id === el.target.dataset.qids);

        if (prod.quantity > 1) {
            --prod.quantity;

            productInCart.forEach(item => {
                totalPrice = totalPrice + moneyFormat.from(item.price) * item.quantity;
            })

            cartTotalEl.innerHTML = moneyFormat.to(totalPrice);

        } else {
            productInCart = productInCart.filter(x => {
                return x.id != prod.id;
            })

            renderList();
        }

    } else if (el.target.classList.contains('quantity__button_plus')) {
        ++productInCart.find(product => product.id === el.target.dataset.qids).quantity;

        productInCart.forEach(item => {
            totalPrice = totalPrice + moneyFormat.from(item.price) * item.quantity;
        })

        cartTotalEl.innerHTML = moneyFormat.to(totalPrice);
    }

    localStorage.setItem('cart', JSON.stringify(productInCart));
}

function renderList() {
    cartList.innerHTML = '';

    productInCart.map(item => {
        const el = document.createElement('div');
        el.className = 'cart__item item-cart';
        el.innerHTML = `
        <div class="item-cart__thumb">
            <img src="${item.thumb}" alt="${item.title}">
        </div>
        <div class="item-cart__title">${item.title}</div>
        <div class="item-cart__quantity quantity">
        <div class="quantity__button quantity__button_minus" data-qids="${item.id}"></div>
        <div class="quantity__input">
            <input autocomplete="off" type="text" name="form[]" value="${item.quantity}" style="width: 30px">
        </div>
        <div class="quantity__button quantity__button_plus" data-qids="${item.id}"></div>
        </div>
        <div class="item-cart__price">${item.price}</div>
        <div class="item-cart__delete _icon-cross" data-ids="${item.id}"></div>
        `
        cartList.appendChild(el);
    })

    fillingProductInfo();
}

function fillingProductInfo() {
    const cartFormInputHidden = cartForm.querySelector('input[name=products]');
    cartFormInputHidden.value = '';
    productInCart.map(item => {
        cartFormInputHidden.value = cartFormInputHidden.value + item.title + ' ; <br/>'
    })
}

if (products.length) {
    products.forEach(product => {
        const productAddToCart = product.querySelector('.item-catalog__add-to-cart');
        productAddToCart.addEventListener('click', addToCart);
    })
}

document.addEventListener("beforePopupOpen", function (e) {
    // Попап
    const currentPopup = e.detail.popup;
    if (currentPopup.hash == '#cart') {
        openCart();
    }
});

document.addEventListener("beforePopupClose", function (e) {
    // Попап
    const currentPopup = e.detail.popup;
    if (currentPopup.hash == '#cart') {
        renderList();
    }
});

cartList.addEventListener('click', delFromCart);
cartList.addEventListener('click', changeQuantityInCart);