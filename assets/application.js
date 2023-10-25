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
