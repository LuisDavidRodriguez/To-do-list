const LOCAL_STORAGE = 'localStorage';
const TASK_DATA = 'taskData';

const taskData = [];

/**
 * If is the first time the software run in one browser load the default data
 * if not you will have an exeption
 */
const setUp = () => {
  if (localStorage.getItem(TASK_DATA) === null) {
    localStorage.setItem(TASK_DATA, JSON.stringify(taskData));
  }
};

/**
 * You must ask if the browser support the localStorage before use it
 * this function also set up the initial values
 * @param {*} type string
 * @returns Boolean if the browser supports local storage
 */
function storageAvailable(type = LOCAL_STORAGE) {
  let storage;
  try {
    storage = window[type];
    const test = '__storage_test__';
    storage.setItem(test, test);
    storage.removeItem(test);
    setUp();
    return true;
  } catch (exeption) {
    return exeption instanceof DOMException
      && (exeption.code === 22 || exeption.code === 1014 || exeption.name === 'QuotaExceededError' || exeption.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && (storage && storage.length !== 0);
    /* the code 22 check everything exept firefox
    the code 1014 check firefox
    we also need to check for the name because sometimes the code is not present
    everithing exept firefox  QuotaExceededError
    firefox NS_ERROR_DOM_QUOTA_REACHED
    this last part has not sunk in my mind yet :(
    acknowledge QuotaExceededError only if there's something already stored */
  }
}

const setTask = (arrBooks) => localStorage.setItem(TASK_DATA, JSON.stringify(arrBooks));

const getTask = () => JSON.parse(localStorage.getItem(TASK_DATA));

export { storageAvailable, setTask, getTask };
