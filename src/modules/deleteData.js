import { service } from './service';
import { render } from './render';
export const deleteData = () => {
  const dataInner = document.querySelector('.data__inner');
  dataInner.addEventListener('click', e => {
    if (e.target.closest('#btn-delete')) {
      const elem = e.target.closest('#data-item');
      const id = elem.dataset.key;
      elem.remove();
      service
        .deleteData(id)
        .then(() => service.getData().then(data => render(data)));
    }
  });
};
