const burger_btn = document.querySelector('.burger-btn');
const mobile_menu = document.querySelector(`${burger_btn.getAttribute('href')}`);
const btn_img = burger_btn.querySelector('img');

burger_btn.addEventListener('click', event => {
    event.preventDefault()
    mobile_menu.classList.toggle('open')

    if (mobile_menu.classList.contains('open')) {
        btn_img.src = 'images/icon-close.svg';
    } else {
        btn_img.src = 'images/icon-hamburger.svg';
    }
})