/* eslint-disable lines-between-class-members */
/* eslint-disable no-plusplus */

export default class ActivitiesManager {
  #activitiesArr = [];
  #createTask = (description, completed, number) => ({ description, completed, number });
  #taskContainer;

  constructor(taskContainer) {
    this.#taskContainer = taskContainer;
  }

  addTask(description, completed, number) {
    this.#activitiesArr.push(this.#createTask(description, completed, number));
  }

  displayTasks() {
    for (let i = 0; i < this.#activitiesArr.length; i++) {
      const { description, completed, number } = this.#activitiesArr[i];
      const liContainer = document.createElement('li');
      const checkBox = document.createElement('INPUT');
      const numTask = document.createElement('p');
      const paragraph = document.createElement('p');
      const icon = document.createElement('i');

      checkBox.setAttribute('type', 'checkbox');

      liContainer.classList.add('items-container__item');
      numTask.classList.add('number');
      paragraph.classList.add('description');
      icon.className = 'fa-solid fa-ellipsis-vertical';

      checkBox.checked = completed;
      numTask.textContent = number;
      paragraph.textContent = description;
      if (completed) paragraph.classList.add('line-trhough');

      liContainer.append(checkBox, numTask, paragraph, icon);
      this.#taskContainer.append(liContainer);
    }
    this.createDeleteButton();
  }

  createDeleteButton() {
    const liContainer = document.createElement('li');
    liContainer.classList.add('items-container__item', 'delete-button');
    liContainer.textContent = 'Clear all Completed';
    this.#taskContainer.append(liContainer);
  }

  createHeaders() {
    const liTitle = document.createElement('li');
    const liInput = document.createElement('li');
    const titleIcon = document.createElement('i');
    const addInput = document.createElement('INPUT');

    const text = document.createTextNode("Today's To Do");
    addInput.setAttribute('type', 'text');
    addInput.setAttribute('required', '');

    liTitle.append(text, titleIcon);
    liInput.append(addInput);
    this.#taskContainer.append(liTitle, liInput);
  }
}
