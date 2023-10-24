const qtyBtns2 = document.querySelectorAll('.qty__btn'),
    qtyInput2 = document.querySelector('.qty__input');

qtyBtns2.forEach((btn) => {
    btn.addEventListener('click', updatePrice);
});
qtyInput2.addEventListener('click', updatePrice);

function updatePrice() {
    console.log('AAAA!!!11');
}
