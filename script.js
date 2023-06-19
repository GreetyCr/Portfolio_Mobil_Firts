function openMenu() {
  document.querySelector('.menu__backdrop').style.display = 'flex';
}

function closeMenu() {
  document.querySelector('.menu__backdrop').style.display = 'none';
}

const btnMenu = document.getElementById('btnMenu');
const btnMenu2 = document.getElementById('btnMenu2');

btnMenu.onclick = () => {
  openMenu();
};

btnMenu2.onclick = () => {
  closeMenu();
};
