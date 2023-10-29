const applyBtn = document.querySelector('#applyBtn');
const filterLabel = document.querySelectorAll('.filter-list__label');
const rangeSliders = document.querySelectorAll('.range-slider__range');
const filtersCheckbox = document.querySelectorAll('.filter-list__checkbox');

filterLabel.forEach((label) => {
    label.addEventListener('click', applyFilterBtn);
});

// rangeSliders.forEach((label) => {
//     label.addEventListener('click', showApplyFilterBtn);
// });

function applyFilterBtn() {
    changeTopValue(this);

    console.log('AAAAA');
    console.log(isSelected());

    // if (applyBtn.classList.contains('filter__apply-btn_show') && !isSelected) {
    //     console.log('AAAAA');
    //     applyBtn.classList.remove('filter__apply-btn_show');
    //     return;
    // }

    applyBtn.classList.add('filter__apply-btn_show');
}

function changeTopValue(elem) {
    let thisY = elem.offsetTop;
    let thisHalfHeight = elem.offsetHeight / 2;
    applyBtn.style.top = thisY + thisHalfHeight + 'px';
}

function checkAttribute(elem) {
    return elem.hasAttribute('checked');
}

let isSelected = () => {
    let filtersArray = [];

    filtersCheckbox.forEach((checkbox) => {
        filtersArray.push(checkbox);
    });

    console.log(filtersArray.some(checkAttribute));

    return filtersArray.some(checkAttribute);
};
