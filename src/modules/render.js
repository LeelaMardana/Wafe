export const render = users => {
  const dataBody = document.querySelector('#data-body');

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
};
