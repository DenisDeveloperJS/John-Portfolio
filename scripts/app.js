document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.menu__icon');
    const menuList = document.querySelector('.menu__list');
    const menuLink = document.querySelectorAll('.menu__link');

    const toggleBurger = () => {
        burger.classList.toggle('_active');
        if(burger.classList.contains('_active')) {
            menuLink.forEach(element => {
                element.style.display = 'block';
            });
            menuList.style.justifyContent = 'center';
            menuList.style.flexDirection = 'column';
        } else {
            menuLink.forEach(element => {
                element.style.display = 'none';
            });
        }
    }

    burger.addEventListener('click', toggleBurger);
});