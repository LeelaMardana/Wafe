import { service } from './service';
import { render } from './render';

const sendForm = () => {
  const form = document.querySelector('#form');
  const nameInput = form.querySelector('#form-name');
  const emailInput = form.querySelector('#form-email');
  const phoneInput = form.querySelector('#form-phone');
  const swimInput = form.querySelector('#form-swim');
  const formButton = document.querySelector('.form__button');

  const pricingItems = document.querySelector('.pricing__items');
  const pricingItemsLink = document.querySelectorAll('.pricing__items-link');

  /// just for test
  nameInput.value = 'Anton';
  emailInput.value = 'Deankurumi@gmail.com';
  phoneInput.value = '+996702635010';
  pricingItemsLink[0].classList.add('active');
  ///

  // Создаем статус
  const statusBlock = document.createElement('div');
  const status = document.createElement('span');
  statusBlock.classList.add('status');
  statusBlock.append(status);
  formButton.before(status.parentNode);

  // Создаем статус текст
  const loadText = 'Загрузка...';
  const successText =
    'Данные успешно отправлены! Наш менеджер с вами свяжется.';
  const serverText = 'Ошибка! Сервер не доступен.';

  // Выбор тарифа
  pricingItems.addEventListener('click', e => {
    e.preventDefault();
    if (!e.target.closest('.pricing__items-link')) return;

    pricingItemsLink.forEach(link => {
      link === e.target.closest('.pricing__items-link')
        ? link.classList.add('active')
        : link.classList.remove('active');
    });
  });

  // Проверка валидации
  const validate = tariffItem => {
    const errorDescription = document.querySelectorAll('.error-description');
    const elements = form.querySelectorAll('.form__input');

    // Очистка старых ошибок перед валидацией
    errorDescription.forEach(item => item.remove());
    elements.forEach(elem => elem.classList.remove('reg-error'));

    let error = false;

    // Создание ошибки
    const CreateNewError = error => {
      const newError = document.createElement('span');
      newError.textContent = error;
      newError.classList.add('error-description');

      // Пишем в статус ошибка
      status.textContent = 'Ошибка!';

      // Добавляем описание ошибки
      status.after(newError);
    };

    // Проверка на пустое значение
    elements.forEach(elem => {
      if (elem.value.trim() === '') {
        error = true;

        CreateNewError(`Поле «${elem.placeholder}» не может быть пустым*`);
        elem.classList.add('reg-error');
      }
    });

    // Находим первую ошибку и даем фокус именно ей
    const has = form.querySelector('.reg-error');
    if (has) {
      has.focus();
    }

    //Проверка на выбор тарифа
    if (!tariffItem) {
      error = true;
      CreateNewError('Выберите тариф*');
    }

    return error;
  };

  const submitForm = () => {
    const tariffItem = pricingItems.querySelector('.active');

    if (validate(tariffItem)) return;

    status.textContent = loadText;

    const tariff = tariffItem.querySelector('.pricing__item-name');

    const user = {
      name: nameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      swim: swimInput.checked,
      tariff: tariff.textContent,
    };

    service
      .addData(user)
      .then(() => {
        service.getData().then(data => {
          render(data);
          status.textContent = successText;
          form.reset();
          pricingItemsLink.forEach(link => link.classList.remove('active'));
        });
      })
      .catch(() => (status.textContent = serverText));
  };

  // Кнопка отправки формы
  form.addEventListener('submit', e => {
    e.preventDefault();

    if (form.dataset.method !== 'edit') submitForm();
  });
};

export { sendForm };
