import { fetchUsers } from './fetchUsers.js';
import { newUsers } from './usersList.js';

// initialize variables

fetchUsers()
  .then((userData) => displayUsersInTable(userData))
  .catch((err) => console.error(err));

function displayUsersInTable(users) {
  console.log(users);
}

console.log(newUsers);
