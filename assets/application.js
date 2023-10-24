const mobMenu = document.querySelector('#mobMenu'),
    mobMenuOpenBtn = document.querySelector('#mobMenuOpen'),
    mobMenuCloseBtn = document.querySelector('#mobMenuClose');

mobMenuOpenBtn.addEventListener('click', () =>
    mobMenu.classList.add('mobile-menu-wrap_open')
);
mobMenuCloseBtn.addEventListener('click', () =>
    mobMenu.classList.remove('mobile-menu-wrap_open')
);

// Current Year

let yearDate = new Date().getFullYear();

const yearInCopyright = document.querySelector('#year');

yearInCopyright.innerText = yearDate;

// Modal Window

const featuredImg = document.querySelector('#featuredImg');
const imgThumbs = document.querySelectorAll('.thumbs__link');

imgThumbs.forEach((elem) => {
    elem.addEventListener('click', changeFituredImg);
    elem.addEventListener('click', changeParentClass);
});

function changeFituredImg(e) {
    e.preventDefault();
    let imgSrc = this.getAttribute('href');
    featuredImg.setAttribute('src', imgSrc);
}

function changeParentClass() {
    const activeClass = 'thumbs__item_active';
    let parent = this.parentElement;
    let closests = this.closest('.thumbs').querySelectorAll('.thumbs__item');
    closests.forEach((elem) => {
        if (elem.classList.contains(activeClass)) {
            elem.classList.remove(activeClass);
        }
    });
    parent.classList.add(activeClass);
}

// Image in Modal Window

const zoomInBtn = document.querySelector('#zoomInBtn');
const modalImg = document.querySelector('#modalImage');
const zoomOutBtn = document.querySelector('#zoomOutBtn');

// zoomInBtn.addEventListener('click', openModalWindow);
// zoomOutBtn.addEventListener('click', closeModalWindow);

function openModalWindow() {
    modalImg.classList.add('featured-img__img-wrap_modal');
}

function closeModalWindow() {
    modalImg.classList.remove('featured-img__img-wrap_modal');
}

// Qty buttons

const qtyBtns = document.querySelectorAll('.qty__btn'),
    qtyInput = document.querySelector('.qty__input');

qtyBtns.forEach((btn) => {
    btn.addEventListener('click', changeQty);
});

function changeQty(e) {
    e.preventDefault();

    if (
        e.target === document.querySelector('.qty__btn_minus') &&
        qtyInput.value > +qtyInput.min
    ) {
        console.log(qtyInput.value);
        qtyInput.value = +qtyInput.value - 1;
    } else if (
        e.target === document.querySelector('.qty__btn_plus') &&
        qtyInput.value <= +qtyInput.max
    ) {
        qtyInput.value = +qtyInput.value + 1;
    }
}
