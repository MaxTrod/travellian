
export function burger () {
  document.addEventListener('click', burgerClick);
  document.addEventListener('click', linkClick);

  const bodyLock = document.body;
  const menu = document.querySelector('.menu');

  function burgerClick (e) {
    const targetElement = e.target;
    if(targetElement.closest('.icon-menu')) {
      const icon = targetElement.closest('.icon-menu');
      icon.classList.toggle('icon-menu--open');
      menu.classList.toggle('menu--open');
      bodyLock.classList.toggle('body-lock');
    }
  }

  const burger = document.querySelector('.icon-menu');

  function linkClick (e) {
    const targetElement = e.target;
    if(window.innerWidth <= 1151.98) {
      if(targetElement.closest('.menu__link')) {
        burger.classList.toggle('icon-menu--open');
        menu.classList.toggle('menu--open');
        bodyLock.classList.toggle('body-lock');
      }
    }
  }
}






