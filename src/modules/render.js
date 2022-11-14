export const render = users => {
  const dataBody = document.querySelector('#data-body');
  const dataItems = document.querySelector('#data-items');
  const width = document.documentElement.clientWidth;

  if (width <= 1240) {
    dataItems.innerHTML = '';
    users.forEach(user => {
      dataItems.insertAdjacentHTML(
        'beforeend',
        `<div class="data-item" data-key="${user.id}">
              <h4 class="data-item__title">#${user.id}</h4>
              <ul class="data-item__list">
                <li class="data-item__wrap">
                  <span class="data-item__name">Имя:</span>
                  <span class="data-item__value">${user.name}</span>
                </li>
                <li class="data-item__wrap">
                  <span class="data-item__name">Телефон:</span>
                  <span class="data-item__value">${user.phone}</span>
                </li>
                <li class="data-item__wrap">
                  <span class="data-item__name">Email:</span>
                  <span class="data-item__value">${user.email}</span>
                </li>
                <li class="data-item__wrap">
                  <span class="data-item__name">Плавает:</span>
                  <span class="data-item__value">${
                    user.swim ? 'Да' : 'Нет'
                  }</span>
                </li>
                <li class="data-item__wrap">
                  <span class="data-item__name">Тариф:</span>
                  <span class="data-item__value">${user.tariff}</span>
                </li>
                <li class="data-item__btns">
                  <button class="data-item__btn" type="button">Изменить</button>
                  <button class="data-item__btn" type="button">Удалить</button>
                </li>
              </ul>
        </div>`
      );
    });
  } else {
    dataBody.innerHTML = '';
    users.forEach(user => {
      dataBody.insertAdjacentHTML(
        'beforeend',
        `
    <ul class="data__body-items grid" data-key="${user.id}"><li id="id">${
          user.id
        }</li><li>${user.name}</li>
              <li>${user.phone}</li>
              <li>${user.email}</li>
              <li>${user.swim ? 'Да' : 'Нет'}</li>
              <li>${user.tariff}</li>
              <li>
                <div class="data__btns">
                  <button type="button" class="data__btn btn-edit">
                    Изменить
                  </button>
                  <button type="button" class="data__btn btn-delete">
                    Удалить
                  </button>
                </div>
              </li>
            </ul>`
      );
    });
  }
};
