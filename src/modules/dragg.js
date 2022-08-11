/* eslint-disable no-plusplus */
/** @author Luis David Rodriguez Valades */

const itemContainer = document.querySelector('#itemsContainer');
let elementDraged = null;
let indexInDragg = null;
let pixelsStart = null;
let pixelsEnd = null;
const regex = /itemBody/;
const regexListParent = /itemsContainer/;
let previousOver = null;
let indexInOver = null;

function clearIndtervals() {
  // in case the set interval in the activities manager
  // where we add a timer to the 3 dots buttons run away
  // this error happen if you click on the 3 dots icon and
  // at the same time you dragg, the setInterval go away
  // i still workin on it
  console.log('clear intervals');
  for (let index = 0; index < 20; index++) {
    clearInterval(index);
  }
}

export default function draggListeners(activitiesManager) {
  // dragg start is called whend start a dragg but deliver the target whom where started the dragg
  itemContainer.addEventListener('dragstart', (event) => {
    console.log(`dragStart: dropEffect = ${event.dataTransfer.dropEffect} ; effectAllowed = ${event.dataTransfer.effectAllowed}`);
    console.log('drag started on: ', event);
    elementDraged = event.target;
    // elementDraged.classList.add('dragg');
    indexInDragg = parseInt(elementDraged.getElementsByClassName('number')[0].innerText, 10);
    pixelsStart = event.screenY;

    /*
    * Add this element's id to the drag payload so the drop handler will
    * know which element to add to its tree
    */
    event.dataTransfer.setData('text', event.target.id);
    event.dataTransfer.effectAllowed = 'move';
    clearIndtervals();
  });

  // dragover deliver the target is whom we are over!
  itemContainer.addEventListener('dragover', (event) => {
    // prevent defult do allow drop
    event.preventDefault();
    if (regex.test(event.target.id)) {
      const targetInOver = event.target;
      // console.log('drag over', event.target);
      indexInOver = parseInt(targetInOver.getElementsByClassName('number')[0].innerText, 10);
      // if the element in dragg is equals to the element in over we dont add the margin
      console.log('indexInOver: ', indexInOver, '    indexInDragg: ', indexInDragg);

      // if boths index are equals I dont add any margin
      if (indexInOver === indexInDragg) {
        targetInOver.style.marginTop = '0';
      } else if (indexInOver < indexInDragg) {
        // check if the index in over is less than the index in dragg it is mean we are
        // moving upwards we add the margin in the top
        console.log('adding margin in top');
        targetInOver.style.marginTop = '45px';
        targetInOver.style.marginBottom = '0';
      } else {
        console.log('moving downwards');
        targetInOver.style.marginTop = '0';
        targetInOver.style.marginBottom = '45px';
      }

      if (previousOver !== event.target) {
        if (previousOver) {
          previousOver.style.marginTop = '0';
          previousOver.style.marginBottom = '0';
        }
        previousOver = event.target;
      }
    }
    // Set the dropEffect to move
    event.dataTransfer.dropEffect = 'move';
  });

  itemContainer.addEventListener('drop', (event) => {
    // prevent defult actions (open as link for some elements)
    event.preventDefault();

    console.log('drop on: ', event.target);
    const dropContainer = event.target;
    pixelsEnd = event.screenY;
    clearIndtervals();
    console.log('desplacement= from: ', pixelsStart, ' to:', pixelsEnd, ' total= ', pixelsEnd - pixelsStart);
    if (regexListParent.test(dropContainer.id)) {
      /*
      * if we drop the element in a new position but inside of the parent list not in an element li
      * we not need to added to the doom again just change the last position and set that
      * position has index and reorder the list
      */
      console.log('Element dropped in the list !', 'previous position: ', indexInDragg, ' new position: ', indexInOver);
      elementDraged.style.transform = `translateY(${pixelsEnd - pixelsStart + -45}px)`;
      elementDraged.style.position = 'absolute';
      setTimeout(() => {
        // set a delay to allow the animation running before refresh
        activitiesManager.updatePosition(indexInDragg, indexInOver);
      }, 500);
    }
  });

  // dragg end is called whend finish the dragg but deliver the target whom where finished the dragg
  itemContainer.addEventListener('dragend', (event) => {
    console.log('drag end on: ', event);
    if (event.dataTransfer !== null) {
      console.log(event.dataTransfer);
    }
  }, false);
}
