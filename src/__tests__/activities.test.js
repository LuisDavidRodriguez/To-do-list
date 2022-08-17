/**
 * @jest-environment jsdom
 */
/* eslint-disable*/
import ActivitiesManager from '../__mocks__/activities.js';

describe('Task1', () => {

  it('Testing activities Manager Add', () => {
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

  it('Testing activities Manager Delete', () => {
    document.body.innerHTML = 
    `<div> 
      <ul id="itemsContainer">
      </ul>
    </div>`;
  
    const listContainer = document.querySelector('#itemsContainer');
    const activitiesManager = new ActivitiesManager(listContainer);
    activitiesManager.addTask('task 1');
    activitiesManager.addTask('task 2');
    activitiesManager.addTask('task 3');
    activitiesManager.addTask('task 4');
    activitiesManager.addTask('task 5');
  
    activitiesManager.deleteFromState(2);  
    
    const elements = document.querySelectorAll('#itemsContainer li');
    expect(elements).toHaveLength(4);
  });
});

