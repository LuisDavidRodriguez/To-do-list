/* eslint-disable lines-between-class-members */
/* eslint-disable no-plusplus */

export default class ActivitiesManager {
  #activitiesArr = [];
  #createTask = (description, completed, number) => ({ description, completed, number });
  #taskContainer;
  #storage;

  constructor(taskContainer, storage) {
    this.#taskContainer = taskContainer;
    this.#storage = storage;
    this.storageAvailable = storage.storageAvailable();
    if (this.storageAvailable) this.#activitiesArr = this.#storage.getTask();
  }

  get size() {
    return this.#activitiesArr.length;
  }

  addTask(description) {
    const id = this.size;
    const object = this.#createTask(description, false, id);
    this.#addToState(object);
    const item = this.#createItem(object, id);
    this.#taskContainer.append(item);
  }

  #saveLocal() {
    if (this.storageAvailable) this.#storage.setTask(this.#activitiesArr);
  }

  #addToState(object) {
    this.#activitiesArr.push(object);
    this.#saveLocal();
  }

  #deleteFromState(index) {
    this.#activitiesArr.splice(index, 1);
    this.#saveLocal();
    console.log(this.#activitiesArr);
    this.refresh();
  }

  deleteAllComplete() {
    this.#activitiesArr = this.#activitiesArr.filter(({ completed }) => !completed);
    console.log(this.#activitiesArr);
    this.#saveLocal();
    this.refresh();
  }

  updatePosition(index, newIndex) {
    // console.log(`in update position--- index to uptate:${index}  -- new index ${newIndex}`);
    const temp = [...this.#activitiesArr];
    const elementToMove = temp.splice(index, 1);
    temp.splice(newIndex, 0, ...elementToMove);

    this.#activitiesArr = [...temp];
    this.#saveLocal();
    this.refresh();
  }

  #updateState(position, object) {
    const { description: desc, completed: comp, number: num } = object;

    if (desc !== undefined) this.#activitiesArr[position].description = desc;
    if (comp !== undefined) this.#activitiesArr[position].completed = comp;
    if (num !== undefined) this.#activitiesArr[position].description = num;

    this.#saveLocal();
  }

  refresh() {
    this.#taskContainer.innerHTML = '';

    for (let i = 0; i < this.#activitiesArr.length; i++) {
      // update number according to index
      this.#activitiesArr[i].number = i;
      const item = this.#createItem(this.#activitiesArr[i], i);
      this.#taskContainer.append(item);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  #createItem({ description, completed, number }, i) {
    const liContainer = document.createElement('li');
    const checkBox = document.createElement('INPUT');
    checkBox.setAttribute('type', 'checkbox');
    const numTask = document.createElement('p');
    const inputTask = document.createElement('INPUT');
    inputTask.setAttribute('type', 'text');
    const iconMore = document.createElement('i');
    const iconDelete = document.createElement('i');
    const cancel = document.createElement('button');

    liContainer.id = `itemBody${i}`;
    checkBox.id = `checkBox${i}`;
    numTask.id = `numTask${i}`;
    inputTask.id = `inputTask${i}`;
    iconMore.id = `iconMore${i}`;
    iconDelete.id = `iconDelete${i}`;
    cancel.id = `btnEdit${i}`;

    liContainer.classList.add('items-container__item');
    liContainer.setAttribute('draggable', true);
    numTask.classList.add('number');
    inputTask.classList.add('description');
    iconMore.className = 'fa-solid fa-ellipsis-vertical';
    iconDelete.className = 'fa-solid fa-trash-can';
    cancel.className = 'btn-cancel';
    iconDelete.style.display = 'none';
    cancel.style.display = 'none';

    checkBox.checked = completed;
    numTask.textContent = number;
    inputTask.value = description;
    inputTask.disabled = true;
    cancel.textContent = 'cancel';

    if (completed) inputTask.classList.add('line-trhough');
    liContainer.append(checkBox, numTask, inputTask, cancel, iconMore, iconDelete);

    checkBox.addEventListener('click', (event) => {
      console.log(event);
      this.#updateState(i, { completed: checkBox.checked });
      if (checkBox.checked) {
        inputTask.classList.add('line-trhough');
      } else {
        inputTask.classList.remove('line-trhough');
      }
    });

    inputTask.addEventListener('change', () => {
      console.log(inputTask.value);
    });

    inputTask.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        // code for enter
        const value = inputTask.value.trim();
        console.log(value);
        liContainer.classList.remove('editor');
        iconMore.style.display = 'block';
        iconDelete.style.display = 'none';
        cancel.style.display = 'none';
        liContainer.classList.remove('editor');
        inputTask.blur();
        inputTask.disabled = true;
        this.#updateState(i, { description: value });
      }
    });

    iconDelete.addEventListener('click', () => {
      liContainer.classList.add('invisible');
      setTimeout(() => {
        liContainer.remove();
        this.#deleteFromState(i);
      }, 1000);
    });

    this.counter = 1;
    this.idInterval = undefined;
    let previusImput;

    iconMore.addEventListener('mousedown', () => {
      iconMore.title = this.counter;
      iconMore.classList.add('hold', 'fa-spin');

      this.idInterval = setInterval(() => {
        console.log('mousedown', this.counter);
        this.counter++;
        if (this.counter >= 2) {
          clearInterval(this.id);
          iconMore.style.display = 'none';
          iconDelete.style.display = 'block';
          cancel.style.display = 'block';
          liContainer.classList.add('editor');
          previusImput = inputTask.value;
          inputTask.disabled = false;
        }
      }, 1000);
    });

    document.addEventListener('mouseup', () => {
      this.counter = 1;
      clearInterval(this.idInterval);
      iconMore.classList.remove('hold', 'fa-spin');
    });

    cancel.addEventListener('click', () => {
      iconMore.style.display = 'block';
      iconDelete.style.display = 'none';
      cancel.style.display = 'none';
      liContainer.classList.remove('editor');
      inputTask.disabled = true;
      inputTask.value = previusImput;
    });

    return liContainer;
  }
}
