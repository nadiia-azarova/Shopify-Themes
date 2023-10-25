function getVals() {
    // Get slider values
    const thisValue = parseFloat(this.value);
    const parent = this.parentElement;
    const minField = parent.querySelector('.range-slider__values_min');
    const maxField = parent.querySelector('.range-slider__values_max');

    // find values for each input within the parent
    const value1 = parseFloat(
        parent.querySelectorAll('.range-slider__range')[0].value
    );
    const value2 = parseFloat(
        parent.querySelectorAll('.range-slider__range')[1].value
    );

    // find wish value is the bigger and print it in the proper div
    let maxValue;

    if (value1 > value2) {
        maxValue = value1;
    } else {
        maxValue = value2;
    }

    if (thisValue === maxValue) {
        maxField.textContent = thisValue;
    } else {
        minField.textContent = thisValue;
    }
}
