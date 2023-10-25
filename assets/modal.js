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

const zoomInBtn = document.querySelector('#zoomInBtn');
const modalImg = document.querySelector('#modalImage');
const zoomOutBtn = document.querySelector('#zoomOutBtn');

zoomInBtn.addEventListener('click', openModalWindow);
zoomOutBtn.addEventListener('click', closeModalWindow);

function openModalWindow() {
    modalImg.classList.add('featured-img__img-wrap_modal');
}

function closeModalWindow() {
    modalImg.classList.remove('featured-img__img-wrap_modal');
}
