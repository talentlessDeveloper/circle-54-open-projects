import { fetchUsers } from './fetchUsers.js';

fetchUsers()
  .then((userData) => console.log(userData))
  .catch((err) => console.error(err));
