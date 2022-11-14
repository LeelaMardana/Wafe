//функция плавного скролла
export const scrollTo = id => {
  if (id === '#') return;
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

//local storage
export const saveName = () => {
  const nameInput = document.querySelector('#name');
  const username = localStorage.getItem('username') || '';

  nameInput.value = username;

  nameInput.addEventListener('change', e => {
    localStorage.setItem('username', e.target.value);
  });
};
