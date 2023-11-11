const openFiltersBtn = document.querySelector('#openFilters');
const filtersWrap = document.querySelector('#filtersWrap');

openFiltersBtn.addEventListener('click', openFilters);

function openFilters() {
    if (window.matchMedia('(max-width: 576px)').matches) {
        filtersWrap.classList.toggle('filter-wrap_shown');
    }
}
