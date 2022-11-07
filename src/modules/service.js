const URL = 'https://6368902528cd16bba706dd6f.mockapi.io/api/v1/wafe/';

class Service {
  get() {
    console.log(URL);
  }
  getUser(id) {
    return fetch(`${URL}${id}`).then(response => response.json());
  }
  getUsers() {
    return fetch(URL).then(response => response.json());
  }
  // addUsers(user) {
  //   return fetch('http://localhost:4545/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(user),
  //   }).then(response => response.json());
  // }
  // removeUser(id) {
  //   return fetch(`http://localhost:4545/users/${id}`, {
  //     method: 'DELETE',
  //   }).then(response => response.json());
  // }
  // changeUser(id, permissions) {
  //   return fetch(`http://localhost:4545/users/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(permissions),
  //   }).then(response => response.json());
  // }

  // editUser(userData) {
  //   return fetch(`http://localhost:4545/users/${userData.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(userData),
  //   }).then(response => response.json());
  // }
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
