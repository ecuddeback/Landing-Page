document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navbarList = document.querySelector('.navbar ul');

    menuIcon.addEventListener('click', function () {
      navbarList.classList.toggle('show');
      menuIcon.classList.toggle('active');
    });
  });
