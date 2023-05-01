const directMenu = document.getElementsByClassName("header-block")[0];
const menu = document.getElementsByClassName("menu")[0];

directMenu.addEventListener('click', function() {
    menu.classList.toggle("active");
});

const materialTypesLink = document.querySelector('#material-types-link');
const materialTypesModal = document.querySelector('#material-types-modal');
const materialTypesClose = document.querySelector('#material-types-close');
const materialTypesExit = document.querySelector('#material-types-exit');

materialTypesLink.addEventListener('click', function(event) {
  event.preventDefault();
  materialTypesModal.style.display = 'block';
});

materialTypesClose.addEventListener('click', function(event) {
  event.preventDefault();
  materialTypesModal.style.display = 'none';
});

materialTypesExit.addEventListener('click', function(event) {
  event.preventDefault();
  materialTypesModal.style.display = 'none';
});