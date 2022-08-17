/**
 * @jest-environment jsdom
 */
/* eslint-disable*/
import ActivitiesManager from '../modules/activities.js';

test('Testing activities Manager Add', () => {
  document.body.innerHTML = 
  '<div>' +
    '<ul id="itemsContainer"></ul>' +
  '</div>';

  const listContainer = document.querySelector('#itemsContainer');
  const activitiesManager = new ActivitiesManager(listContainer);
  activitiesManager.addTask('task as probe');
  
  const elements = document.querySelectorAll('#itemsContainer li');
  expect(elements).toHaveLength(1);
});
