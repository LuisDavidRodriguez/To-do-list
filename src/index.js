import './styles/main.scss';
import ActivitiesManager from './activities.js';

const itemContainer = document.querySelector('#itemsContainer');

const activitiesManager = new ActivitiesManager(itemContainer);

activitiesManager.addTask('walk the doog', false, 0);
activitiesManager.addTask('Cooking dinner', true, 1);
activitiesManager.addTask('Study', false, 2);
activitiesManager.addTask('Go to the gym', true, 3);
activitiesManager.displayTasks();