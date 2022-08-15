import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Спливаючі повідомлення
export const notify = (message) =>
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });

export const getIndex = (id, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return i;
    }
  }
  return -1; //to handle the case where the value doesn't exist
};

export const uniqueArray = (array) => {
  return array.filter((item, index, self) => index == self.findIndex((t) => t.id == item.id));
  // спеціально == а не ===, бо в js id - string, а сервер висилає integer
};

export const compareById = (a, b) => {
  if (!a || !b || a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i].id !== b[i].id) {
      return false;
    }
  }
  return true;
};

export const getIndexByProperty = (list, key, value) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i][key] === value) {
      return i;
    }
  }
  return -1;
};

export const getItemById = (id, list) => {
  for (let i = 0; i < list.length; i++) {
    if (parseInt(list[i].id) === parseInt(id)) {
      return list[i];
    }
  }
  return -1;
};

export const isBlankOrZero = (item) => {
  return item == null || item === 0 || item === '0' || item.length === 0;
};

export const getToday = () => {
  const today_date = new Date();
  return (
    today_date.getDate() +
    '.' +
    (today_date.getMonth() < 9 ? '0' + (today_date.getMonth() + 1) : today_date.getMonth() + 1) +
    '.' +
    today_date.getFullYear()
  );
};
