//функция плавного скролла
export const scrollTo = id => {
  if (id === '#') return;
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
