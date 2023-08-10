const mobile_btn = document.querySelector('.menu-btn');
const mobile_menu = document.querySelector('#mobile_menu');

mobile_btn.addEventListener('click', () => {
    const isOpen = mobile_menu.getAttribute('data-visible') === 'true';
    const attr = isOpen ? false : true;

    mobile_menu.setAttribute('data-visible', attr);
    mobile_btn.setAttribute('aria-expanded', attr);
})