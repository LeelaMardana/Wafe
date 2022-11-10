import { scrollTo } from './helpers';

export const menu = () => {
  const menu = document.querySelector('.menu');
  const heroBtn = document.querySelector('.hero__btn');
  menu.addEventListener('click', e => {
    e.preventDefault();
    if (!e.target.closest('.menu__item-link')) return;
    scrollTo(e.target.closest('.menu__item-link').getAttribute('href'));
  });

  heroBtn.addEventListener('click', e => {
    e.preventDefault();
    scrollTo(e.target.getAttribute('href'));
  });
};
