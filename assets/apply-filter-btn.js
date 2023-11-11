const applyBtn = document.querySelector('#applyBtn');
const filterLabel = document.querySelectorAll('.filter-list__label');
const rangeSliders = document.querySelectorAll('.range-slider__range');
const filtersCheckbox = document.querySelectorAll('.filter-list__checkbox');

filtersCheckbox.forEach((box) => {
    box.addEventListener('change', applyFilterBtn);
});

rangeSliders.forEach((slider) => {
    slider.addEventListener('click', applyFilterBtn);
});

function applyFilterBtn() {
    if (window.matchMedia('(min-width: 577px)').matches) {
        changeTopValue(this);

        if (
            applyBtn.classList.contains('filter__apply-btn_show') &&
            !isSelected()
        ) {
            applyBtn.classList.remove('filter__apply-btn_show');
            return;
        }

        applyBtn.classList.add('filter__apply-btn_show');
    }
}

function changeTopValue(elem) {
    let thisY = elem.offsetTop;
    applyBtn.style.top = thisY + 10 + 'px';
}

function checkAttribute(elem) {
    return elem.checked;
}

function isSelected() {
    let filtersArray = [];

    filtersCheckbox.forEach((checkbox) => {
        filtersArray.push(checkbox);
    });

    return filtersArray.some(checkAttribute);
}
