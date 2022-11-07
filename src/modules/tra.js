import { service } from './service';

export const tra = () => {
  service.getUsers().then(data => console.log(data));
};
