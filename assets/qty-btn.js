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
