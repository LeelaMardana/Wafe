const URL = 'https://6368902528cd16bba706dd6f.mockapi.io/AwesomeTowa/data/wafe';

class Service {
  getDataElem(id) {
    return fetch(`${URL}/${id}`).then(response => response.json());
  }
  getData() {
    return fetch(URL).then(response => response.json());
  }
  addData(data) {
    return fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json());
  }
  deleteData(id) {
    return fetch(`${URL}/${id}`, {
      method: 'DELETE',
    }).then(response => response.json());
  }
  // changeUser(id, permissions) {
  //   return fetch(`http://localhost:4545/users/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(permissions),
  //   }).then(response => response.json());
  // }

  editData(data) {
    return fetch(`${URL}/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json());
  }

  // filterUsers(filterOption) {
  //   return fetch(`http://localhost:4545/users?${filterOption}=true`).then(
  //     response => response.json()
  //   );
  // }
  // getSortUsers(sortOption) {
  //   return fetch(
  //     `http://localhost:4545/users?_sort=${sortOption.name}&_order=${sortOption.value}`
  //   ).then(response => response.json());
  // }
  // getSearchUsers(str) {
  //   return fetch(`http://localhost:4545/users?name_like=${str}`).then(
  //     response => response.json()
  //   );
  // }
}
export const service = new Service();
