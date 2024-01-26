document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menuLinks = document.querySelector('.navbar ul');

    menuIcon.addEventListener('click', function () {
        menuLinks.classList.toggle('show');
        menuIcon.classList.toggle('active');
    });
});
