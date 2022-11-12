import { service } from './service';
import { render } from './render';
export const deleteData = () => {
  const dataBody = document.querySelector('#data-body');

  dataBody.addEventListener('click', e => {
    if (e.target.closest('.btn-delete')) {
      const id = e.target.closest('ul').querySelector('#id').textContent;
      const elem = e.target.closest('.data__body-items');
      elem.remove();
      service
        .deleteData(id)
        .then(() => service.getData().then(data => render(data)));
    }
  });
};
