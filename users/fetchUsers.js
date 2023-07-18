import { users } from './usersList.js';

function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.8) {
        resolve(users);
      } else {
        reject(new Error('OOps failed to fetch users'));
      }
    }, 3000);
  });
}

export { fetchUsers };
