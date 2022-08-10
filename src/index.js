import './styles/main.scss';
import ActivitiesManager from './activities.js';

const itemContainer = document.querySelector('#itemsContainer');

const activitiesManager = new ActivitiesManager(itemContainer);

activitiesManager.addTask('walk the doog', true, 0);
activitiesManager.addTask('Cooking dinner', true, 1);
activitiesManager.addTask('Study', true, 2);
activitiesManager.addTask('Go to the gym', true, 3);
activitiesManager.displayTasks();

itemContainer.addEventListener('click', (event) => {
  const { id } = event.target;
  const regex = /(?<=checktask)\d+$/;
  console.log(id);
});