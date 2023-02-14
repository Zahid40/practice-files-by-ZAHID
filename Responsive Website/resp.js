burger = document.querySelector('.burger');
navlist = document.querySelector('.navlist');
rightnav = document.querySelector('.rightnav');

burger.addEventListener('click', () => {
    navlist.classList.toggle('dispalychanger');
    rightnav.classList.toggle('dispalychanger');
  });