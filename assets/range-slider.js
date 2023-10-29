function getVals() {
    // Get slider values

    const thisValue = parseFloat(this.value);
    const parent = this.parentElement;
    const minSlider = parent.querySelector('.range-slider__range_min');
    const maxSlider = parent.querySelector('.range-slider__range_max');
    const minField = parent.querySelector('.range-slider__values_min');
    const maxField = parent.querySelector('.range-slider__values_max');

    if (this == minSlider) {
        minField.textContent = thisValue;
    } else if (this == maxSlider) {
        maxField.textContent = thisValue;
    }
}

window.onload = function () {
    // Get all sliders on a page
    const sliderSections = document.querySelectorAll('.range-slider');

    sliderSections.forEach((sliderSection) => {
        // get all inputs within a given slider
        const sliders = sliderSection.querySelectorAll('.range-slider__range');
        sliders.forEach((slider) => {
            // check slider type
            if (slider.type === 'range') {
                slider.oninput = getVals;
                // Manually trigger event first time to display values
                slider.oninput();
            }
        });
    });
};
