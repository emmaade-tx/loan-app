import { openDB } from 'idb';
import { User } from '@/types/user';

export const storeUserData = async (user: User) => {
  const db = await openDB('lendDB', 1, {
    upgrade(db) {
      db.createObjectStore('users');
    },
  });

  await db.put('users', user, user.id);
}


export const getUser = async (id: string | number) => {
  const key = typeof id === 'string' ? parseInt(id, 10) : id;
  const db = await openDB('lendDB', 1, {
    upgrade(db) {
      db.createObjectStore('users');
    },
  });

  const user = await db.get('users', key);

  return user;
}

export const updateStatus = async (id: string | number, newStatus: string) => {
  const key = typeof id === 'string' ? parseInt(id, 10) : id;
  const db = await openDB('lendDB', 1, {
    upgrade(db) {
      db.createObjectStore('users', { keyPath: 'id' }); // Specify the keyPath as 'id'
    },
  });

  const transaction = db.transaction('users', 'readwrite');
  const store = transaction.objectStore('users');

  const user = await store.get(key);

  if (user) {
    user.status = newStatus;
    store.put(user, user.id); // Pass the key as the second parameter to put method
  }

  return new Promise<void>((resolve, reject) => {
    transaction.oncomplete = () => {
      resolve();
    };

    transaction.onerror = () => {
      reject(new Error('Transaction failed.'));
    };
  });
};



