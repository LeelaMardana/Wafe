const validation = () => {
  const nameInput = form.querySelector('#form-name');
  const emailInput = form.querySelector('#form-email');
  const phoneInput = form.querySelector('#form-phone');

  const typeNumber = input => {
    input.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/\D+/, '');
    });
  };

  const typeCyrillic = input => {
    input.addEventListener('input', e => {
      e.target.value = e.target.value
        .replace(/\s+/g, ' ') // заменить 1+ пробелов на 1
        .replace(/\-+/g, '-') // заменить 1+ дефизов на 1
        .replace(/^\s+|\s+$/g, '') // убрать все пробелы в начале и конце
        .replace(/^\-+|\-+$/g, '') // убрать все дефизы в начале и конце
        .replace(/[^А-Яа-я/A-Za-z\s-]/g, '') // убрать все символы за исключением:
        .replace(/(^|\s)\S/g, a => {
          return a.toUpperCase();
        });
    });
  };

  const typeEmail = input => {
    input.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/[^\w\@\-\.\!\~\*\']/g, '');
    });
  };
  const typeTel = input => {
    input.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/[^\d\(\)\-\+]/g, '');
    });
  };
  typeCyrillic(nameInput);
  typeTel(phoneInput);
  typeEmail(emailInput);

  // calcInputs.forEach(item => {
  //   typeNumber(item);
  // });

  // textInputs.forEach(item => {
  //   typeCyrillic(item);
  // });

  // emailInputs.forEach(item => {
  //   typeEmail(item);
  // });

  // telInputs.forEach(item => {
  //   typeTel(item);
  // });
};

export { validation };
