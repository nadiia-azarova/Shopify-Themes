const qtyBtns = document.querySelectorAll('.qty__btn');

qtyBtns.forEach(btn => {
    btn.addEventListener('click', changeQty, true);
})

function changeQty(e) {
    e.preventDefault();

    const parentElem = this.parentElement;
    const currentInput = parentElem.querySelector('input');

    if (this.classList.contains('qty__btn_minus') && currentInput.value > 1) {
        currentInput.value = +currentInput.value - 1;
    } else if (this.classList.contains('qty__btn_plus')) {
        currentInput.value = +currentInput.value + 1;
    }

    updateCart();
}

function updateCart() {
    const btnUpdate = document.querySelector('#btnUpdate');
    btnUpdate.click();
}
