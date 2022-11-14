import { render } from './render';
import { service } from './service';

export const editData = () => {
  const dataBody = document.querySelector('#data-body');
  const form = document.querySelector('form');
  const nameInput = document.querySelector('#form-name');
  const emailInput = document.querySelector('#form-email');
  const phoneInput = document.querySelector('#form-phone');
  const formSwim = document.querySelector('#form-swim');
  const applicationTitle = document.querySelector('.application__title');
  const pricingItems = document.querySelector('.pricing__items');
  const pricingItemsLink = document.querySelectorAll('.pricing__items-link');
  const status = document.querySelector('.status');
  let userData = {};

  // Создаем статус текст
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка! Проверьте заполненные данные.';
  const serverText = 'Ошибка! Сервер не доступен.';
  const editText = 'Данные успешно отредактированы!';

  // Проверка валидации
  const validate = activeTariff => {
    const elements = form.querySelectorAll('.form__input');

    elements.forEach(elem => elem.classList.remove('reg-error'));

    let error = false;

    // Проверка на пустое значение
    elements.forEach(elem => {
      if (elem.value.trim() === '') {
        error = true;
        elem.classList.add('reg-error');
      }
    });

    // Находим первую ошибку и даем фокус именно ей
    const has = form.querySelector('.reg-error');
    if (has) {
      has.focus();
    }

    //Проверка на выбор тарифа
    if (!activeTariff) {
      error = true;
      pricingItemsLink.forEach(link => link.classList.add('error'));
    } else {
      pricingItemsLink.forEach(link => link.classList.remove('error'));
    }

    return error;
  };

  // клик по кнопке редактировать, добавление аттрибута,
  // сохранение данных userData
  dataBody.addEventListener('click', e => {
    if (e.target.closest('.btn-edit')) {
      const id = e.target.closest('.data__body-items').dataset.key;
      const tariffs = form.querySelectorAll('.pricing__items-link');

      // Очистка старых ошибок
      const elements = form.querySelectorAll('.form__input');
      elements.forEach(elem => elem.classList.remove('reg-error'));
      pricingItemsLink.forEach(link => link.classList.remove('error'));
      status.textContent = '';

      // Получаем данные с сервера
      service.getDataElem(id).then(data => {
        // Добавляем метод
        form.dataset.method = 'edit';
        applicationTitle.textContent = 'Редактировать заявку';

        //заполняем поля
        nameInput.value = data.name;
        emailInput.value = data.email;
        phoneInput.value = data.phone;
        formSwim.checked = data.swim;

        // Оставляем id
        userData = { id: id };

        // Выбираем необходимый тариф для редактирования
        tariffs.forEach(tariff => {
          const tariffName = tariff.querySelector(
            '.pricing__item-name'
          ).textContent;
          tariff.classList.remove('active');

          if (tariffName === data.tariff) {
            tariff.classList.add('active');
          }
        });
      });

      nameInput.focus();
    }
  });

  // клик по кнопке сохранить
  form.addEventListener('submit', e => {
    e.preventDefault();

    if (form.dataset.method === 'edit') {
      status.textContent = loadText;

      const activeTariff = pricingItems.querySelector('.active');
      if (validate(activeTariff)) return (status.textContent = errorText);
      const tariff = activeTariff.querySelector('.pricing__item-name');

      applicationTitle.textContent = 'Редактировать заявку';
      // обновление данных userData
      userData = {
        id: userData.id,
        name: nameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        swim: formSwim.checked,
        tariff: tariff.textContent,
      };

      // замена данных в БД
      service
        .editData(userData)
        .then(() => {
          // очистка формы, удаление атрибута, рендер новых данных
          service.getData().then(data => {
            render(data);
            status.textContent = editText;
            form.reset();
            form.removeAttribute('data-method');
            applicationTitle.textContent = 'Оставить заявку';
          });
        })
        .catch(() => (status.textContent = serverText));
    }
  });
};
