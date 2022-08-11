import './styles/main.scss';
import ActivitiesManager from './modules/activities.js';
import * as storage from './modules/dataStorage.js';
import draggListeners from './modules/dragg.js';

const itemContainer = document.querySelector('#itemsContainer');
const addInput = document.querySelector('#addTask');
const refresh = document.querySelector('#refresh');
const buttonAdd = document.querySelector('#enter');
const buttonDelete = document.querySelector('#buttonDelete');

const activitiesManager = new ActivitiesManager(itemContainer, storage);
activitiesManager.refresh();
addInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    // code for enter
    const value = addInput.value.trim();
    addInput.value = '';
    if (value !== '') activitiesManager.addTask(value);
  }
});

buttonAdd.addEventListener('click', () => {
  const value = addInput.value.trim();
  addInput.value = '';
  if (value !== '') activitiesManager.addTask(value);
});

refresh.addEventListener('click', () => {
  refresh.classList.add('fa-spin');
  itemContainer.innerHTML = '';
  setTimeout(() => {
    refresh.classList.remove('fa-spin');
    activitiesManager.refresh();
  }, 2000);
});

buttonDelete.addEventListener('click', () => {
  activitiesManager.deleteAllComplete();
});

draggListeners(activitiesManager);
