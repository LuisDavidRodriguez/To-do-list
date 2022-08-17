/**
 * @jest-environment jsdom
 */
/* eslint-disable*/
import ActivitiesManager from '../modules/activities.js';
import * as storage from '../modules/dataStorage.js';

test('Testing activities Manager Add', () => {
  document.body.innerHTML = 
  '<div>' +
    '<ul id="itemsContainer"></ul>' +
  '</div>';

  const listContainer = document.querySelector('#itemsContainer');
  const activitiesManager = new ActivitiesManager(listContainer, storage);
  activitiesManager.addTask('task as probe');
  
  const elements = document.querySelectorAll('#itemsContainer li');
  expect(elements).toHaveLength(1);
});

test('Testing activities Manager Delete', () => {
  document.body.innerHTML = 
  `<div> 
    <ul id="itemsContainer">
    </ul>
  </div>`;

  const listContainer = document.querySelector('#itemsContainer');
  const activitiesManager = new ActivitiesManager(listContainer, storage);
  activitiesManager.addTask('task as probe');
  activitiesManager.addTask('task as probe');
  activitiesManager.addTask('task as probe');

  activitiesManager.deleteFromState(2);

  
  const elements = document.querySelectorAll('#itemsContainer li');
  expect(elements).toHaveLength(2);
});
