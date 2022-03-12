// menu burger
const button = document.getElementById('burger-btn');
const mainMenu = document.getElementById('header-menu-hidden');

let isHiddenMenu = true;

button.addEventListener('click', toggleMenu)

function toggleMenu() {

  const hiddenClass = 'hidden';

  const iconShown = document.getElementById('icon-shown-btn');
  const iconHidden = document.getElementById('icon-shown-hidden');

  if (isHiddenMenu) {
    mainMenu.classList.remove(hiddenClass)
    iconHidden.classList.remove(hiddenClass)
    iconShown.classList.add(hiddenClass)
  } else {
    mainMenu.classList.add(hiddenClass)
    iconHidden.classList.add(hiddenClass)
    iconShown.classList.remove(hiddenClass)
  }

  isHiddenMenu = !isHiddenMenu;
}
// /menu burger