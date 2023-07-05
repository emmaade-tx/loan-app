import { openDB } from 'idb';
import { User } from '@/types/user';

export const storeUserData = async (user: User) => {
  const db = await openDB('lendDB', 1, {
    upgrade(db) {
      db.createObjectStore('users');
    },
  });

  await db.put('users', user, user.email);
}


export const getUser = async (id: string) => {
  const db = await openDB('lendDB', 1, {
    upgrade(db) {
      db.createObjectStore('users');
    },
  });

  const user = await db.get('users', id);

  console.log(user);
  return user;
}
