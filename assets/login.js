// Back button
const backBtn = document.querySelector('#backLink');

backBtn.addEventListener('click', goBack);

function goBack(e) {
    e.preventDefault();

    history.back();
}


// Recover Password
const 
    forgotPWBtn = document.querySelector('#forgotPWBtn'),
    backToLogin = document.querySelector('#backToLogin'),
    loginForm = document.querySelector('#loginForm'),
    recoverPWForm = document.querySelector('#recoverPWForm');

forgotPWBtn.addEventListener('click', switchForms);
backToLogin.addEventListener('click', switchForms);

function switchForms(e) {
    e.preventDefault();

    if (this === forgotPWBtn) {
        loginForm.classList.add('form_hidden');
        recoverPWForm.classList.remove('form_hidden');
        return
    }

    recoverPWForm.classList.add('form_hidden');
    loginForm.classList.remove('form_hidden');
}
