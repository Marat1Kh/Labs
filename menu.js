const menu_dd_btn = document.querySelector('.menu_dd_btn');
const menu = document.querySelector('.nav_m');
const body = document.body;
const menuLinks = document.querySelectorAll('.source_dropdown');

menu_dd_btn.addEventListener('click', function () {
    if (this.classList.contains('active')) {
        closeMenu();
    } else {
        menu.classList.add('active');
        this.classList.add('active');
        body.classList.add('lock');
    }
});
menuLinks.forEach(function (item) {
    item.addEventListener('click', function (event) {
        closeMenu();
    });
});
function closeMenu () {
    menu.classList.remove('active');
    menu_dd_btn.classList.remove('active');
    body.classList.remove('lock');
}
