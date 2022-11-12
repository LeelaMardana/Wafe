import { render } from './render';
import { service } from './service';

export const editData = () => {
  const dataBody = document.querySelector('#data-body');
  const form = document.querySelector('form');
  const formButton = document.querySelector('.form__button');
  const nameInput = document.querySelector('#form-name');
  const emailInput = document.querySelector('#form-email');
  const phoneInput = document.querySelector('#form-phone');
  const formSwim = document.querySelector('#form-swim');
  const applicationTitle = document.querySelector('.application__title');
  let userData = {};

  // Создаем статус текст
  const editText = 'В процессе редактирования...';
  // клик по кнопке редактировать, добавление аттрибута,
  // сохранение данных userData
  dataBody.addEventListener('click', e => {
    if (e.target.closest('.btn-edit')) {
      const id = e.target.closest('.data__body-items').dataset.key;
      const tariffs = form.querySelectorAll('.pricing__items-link');

      // Очистка старых ошибок и статуса, если вдруг они были
      const elements = form.querySelectorAll('.form__input');
      const checkStatus = form.querySelector('.status');
      elements.forEach(elem => elem.classList.remove('reg-error'));
      if (checkStatus) {
        checkStatus.remove();
      }

      // Статус
      const statusBlock = document.createElement('div');
      const status = document.createElement('span');
      statusBlock.classList.add('status');
      statusBlock.append(status);
      status.textContent = editText;
      formButton.before(status.parentNode);

      // Получаем данные с сервера
      service.getDataElem(id).then(data => {
        // Добавляем метод
        form.dataset.method = 'edit';

        // Изменяем тайтл
        if (form.dataset.method === 'edit') {
          applicationTitle.textContent = 'Редактировать заявку';
        } else {
          applicationTitle.textContent = 'Оставить заявку';
        }
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
    const tariffItem = form.querySelector('.active');
    const tariff = tariffItem.querySelector('.pricing__item-name');

    if (form.dataset.method === 'edit') {
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
      service.editData(userData).then(data => {
        console.log(data);
        // очистка формы, удаление атрибута, рендер новых данных
        service.getData().then(data => {
          render(data);
          form.reset();
          form.removeAttribute('data-method');
        });
      });
    }
  });
};
