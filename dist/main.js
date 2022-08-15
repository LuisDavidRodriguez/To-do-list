"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _modules_activities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/activities.js */ "./src/modules/activities.js");
/* harmony import */ var _modules_dataStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dataStorage.js */ "./src/modules/dataStorage.js");
/* harmony import */ var _modules_dragg_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dragg.js */ "./src/modules/dragg.js");




var itemContainer = document.querySelector('#itemsContainer');
var addInput = document.querySelector('#addTask');
var refresh = document.querySelector('#refresh');
var buttonAdd = document.querySelector('#enter');
var buttonDelete = document.querySelector('#buttonDelete');
var activitiesManager = new _modules_activities_js__WEBPACK_IMPORTED_MODULE_1__["default"](itemContainer, _modules_dataStorage_js__WEBPACK_IMPORTED_MODULE_2__);
activitiesManager.refresh();
addInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    // code for enter
    var value = addInput.value.trim();
    addInput.value = '';
    if (value !== '') activitiesManager.addTask(value);
  }
});
buttonAdd.addEventListener('click', function () {
  var value = addInput.value.trim();
  addInput.value = '';
  if (value !== '') activitiesManager.addTask(value);
});
refresh.addEventListener('click', function () {
  refresh.classList.add('fa-spin');
  itemContainer.innerHTML = '';
  setTimeout(function () {
    refresh.classList.remove('fa-spin');
    activitiesManager.refresh();
  }, 2000);
});
buttonDelete.addEventListener('click', function () {
  activitiesManager.deleteAllComplete();
});
(0,_modules_dragg_js__WEBPACK_IMPORTED_MODULE_3__["default"])(activitiesManager);

/***/ }),

/***/ "./src/modules/activities.js":
/*!***********************************!*\
  !*** ./src/modules/activities.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActivitiesManager)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _activitiesArr = /*#__PURE__*/new WeakMap();

var _createTask = /*#__PURE__*/new WeakMap();

var _taskContainer = /*#__PURE__*/new WeakMap();

var _storage = /*#__PURE__*/new WeakMap();

var _saveLocal = /*#__PURE__*/new WeakSet();

var _addToState = /*#__PURE__*/new WeakSet();

var _deleteFromState = /*#__PURE__*/new WeakSet();

var _updateState = /*#__PURE__*/new WeakSet();

var _createItem = /*#__PURE__*/new WeakSet();

/* eslint-disable lines-between-class-members */

/* eslint-disable no-plusplus */
var ActivitiesManager = /*#__PURE__*/function () {
  function ActivitiesManager(taskContainer, storage) {
    _classCallCheck(this, ActivitiesManager);

    _classPrivateMethodInitSpec(this, _createItem);

    _classPrivateMethodInitSpec(this, _updateState);

    _classPrivateMethodInitSpec(this, _deleteFromState);

    _classPrivateMethodInitSpec(this, _addToState);

    _classPrivateMethodInitSpec(this, _saveLocal);

    _classPrivateFieldInitSpec(this, _activitiesArr, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _createTask, {
      writable: true,
      value: function value(description, completed, number) {
        return {
          description: description,
          completed: completed,
          number: number
        };
      }
    });

    _classPrivateFieldInitSpec(this, _taskContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _storage, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _taskContainer, taskContainer);

    _classPrivateFieldSet(this, _storage, storage);

    this.storageAvailable = storage.storageAvailable();
    if (this.storageAvailable) _classPrivateFieldSet(this, _activitiesArr, _classPrivateFieldGet(this, _storage).getTask());
  }

  _createClass(ActivitiesManager, [{
    key: "size",
    get: function get() {
      return _classPrivateFieldGet(this, _activitiesArr).length;
    }
  }, {
    key: "addTask",
    value: function addTask(description) {
      var id = this.size;

      var object = _classPrivateFieldGet(this, _createTask).call(this, description, false, id);

      _classPrivateMethodGet(this, _addToState, _addToState2).call(this, object);

      var item = _classPrivateMethodGet(this, _createItem, _createItem2).call(this, object, id);

      _classPrivateFieldGet(this, _taskContainer).append(item);
    }
  }, {
    key: "deleteAllComplete",
    value: function deleteAllComplete() {
      _classPrivateFieldSet(this, _activitiesArr, _classPrivateFieldGet(this, _activitiesArr).filter(function (_ref) {
        var completed = _ref.completed;
        return !completed;
      }));

      console.log(_classPrivateFieldGet(this, _activitiesArr));

      _classPrivateMethodGet(this, _saveLocal, _saveLocal2).call(this);

      this.refresh();
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(index, newIndex) {
      // console.log(`in update position--- index to uptate:${index}  -- new index ${newIndex}`);
      var temp = _toConsumableArray(_classPrivateFieldGet(this, _activitiesArr));

      var elementToMove = temp.splice(index, 1);
      temp.splice.apply(temp, [newIndex, 0].concat(_toConsumableArray(elementToMove)));

      _classPrivateFieldSet(this, _activitiesArr, _toConsumableArray(temp));

      _classPrivateMethodGet(this, _saveLocal, _saveLocal2).call(this);

      this.refresh();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      _classPrivateFieldGet(this, _taskContainer).innerHTML = '';

      for (var i = 0; i < _classPrivateFieldGet(this, _activitiesArr).length; i++) {
        // update number according to index
        _classPrivateFieldGet(this, _activitiesArr)[i].number = i;

        var item = _classPrivateMethodGet(this, _createItem, _createItem2).call(this, _classPrivateFieldGet(this, _activitiesArr)[i], i);

        _classPrivateFieldGet(this, _taskContainer).append(item);
      }
    } // eslint-disable-next-line class-methods-use-this

  }]);

  return ActivitiesManager;
}();

function _saveLocal2() {
  if (this.storageAvailable) _classPrivateFieldGet(this, _storage).setTask(_classPrivateFieldGet(this, _activitiesArr));
}

function _addToState2(object) {
  _classPrivateFieldGet(this, _activitiesArr).push(object);

  _classPrivateMethodGet(this, _saveLocal, _saveLocal2).call(this);
}

function _deleteFromState2(index) {
  _classPrivateFieldGet(this, _activitiesArr).splice(index, 1);

  _classPrivateMethodGet(this, _saveLocal, _saveLocal2).call(this);

  console.log(_classPrivateFieldGet(this, _activitiesArr));
  this.refresh();
}

function _updateState2(position, object) {
  var desc = object.description,
      comp = object.completed,
      num = object.number;
  if (desc !== undefined) _classPrivateFieldGet(this, _activitiesArr)[position].description = desc;
  if (comp !== undefined) _classPrivateFieldGet(this, _activitiesArr)[position].completed = comp;
  if (num !== undefined) _classPrivateFieldGet(this, _activitiesArr)[position].description = num;

  _classPrivateMethodGet(this, _saveLocal, _saveLocal2).call(this);
}

function _createItem2(_ref2, i) {
  var _this = this;

  var description = _ref2.description,
      completed = _ref2.completed,
      number = _ref2.number;
  var liContainer = document.createElement('li');
  var checkBox = document.createElement('INPUT');
  checkBox.setAttribute('type', 'checkbox');
  var numTask = document.createElement('p');
  var inputTask = document.createElement('INPUT');
  inputTask.setAttribute('type', 'text');
  var iconMore = document.createElement('i');
  var iconDelete = document.createElement('i');
  var cancel = document.createElement('button');
  liContainer.id = "itemBody".concat(i);
  checkBox.id = "checkBox".concat(i);
  numTask.id = "numTask".concat(i);
  inputTask.id = "inputTask".concat(i);
  iconMore.id = "iconMore".concat(i);
  iconDelete.id = "iconDelete".concat(i);
  cancel.id = "btnEdit".concat(i);
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
  checkBox.addEventListener('click', function (event) {
    console.log(event);

    _classPrivateMethodGet(_this, _updateState, _updateState2).call(_this, i, {
      completed: checkBox.checked
    });

    if (checkBox.checked) {
      inputTask.classList.add('line-trhough');
    } else {
      inputTask.classList.remove('line-trhough');
    }
  });
  inputTask.addEventListener('change', function () {
    console.log(inputTask.value);
  });
  inputTask.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      // code for enter
      var value = inputTask.value.trim();
      console.log(value);
      liContainer.classList.remove('editor');
      iconMore.style.display = 'block';
      iconDelete.style.display = 'none';
      cancel.style.display = 'none';
      liContainer.classList.remove('editor');
      inputTask.blur();
      inputTask.disabled = true;

      _classPrivateMethodGet(_this, _updateState, _updateState2).call(_this, i, {
        description: value
      });
    }
  });
  iconDelete.addEventListener('click', function () {
    liContainer.classList.add('invisible');
    setTimeout(function () {
      liContainer.remove();

      _classPrivateMethodGet(_this, _deleteFromState, _deleteFromState2).call(_this, i);
    }, 1000);
  });
  this.counter = 1;
  this.idInterval = undefined;
  var previusImput;
  iconMore.addEventListener('mousedown', function () {
    iconMore.title = _this.counter;
    iconMore.classList.add('hold', 'fa-spin');
    _this.idInterval = setInterval(function () {
      console.log('mousedown', _this.counter);
      _this.counter++;

      if (_this.counter >= 2) {
        clearInterval(_this.id);
        iconMore.style.display = 'none';
        iconDelete.style.display = 'block';
        cancel.style.display = 'block';
        liContainer.classList.add('editor');
        previusImput = inputTask.value;
        inputTask.disabled = false;
      }
    }, 1000);
  });
  document.addEventListener('mouseup', function () {
    _this.counter = 1;
    clearInterval(_this.idInterval);
    iconMore.classList.remove('hold', 'fa-spin');
  });
  cancel.addEventListener('click', function () {
    iconMore.style.display = 'block';
    iconDelete.style.display = 'none';
    cancel.style.display = 'none';
    liContainer.classList.remove('editor');
    inputTask.disabled = true;
    inputTask.value = previusImput;
  });
  return liContainer;
}



/***/ }),

/***/ "./src/modules/dataStorage.js":
/*!************************************!*\
  !*** ./src/modules/dataStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTask": () => (/* binding */ getTask),
/* harmony export */   "setTask": () => (/* binding */ setTask),
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable)
/* harmony export */ });
var LOCAL_STORAGE = 'localStorage';
var TASK_DATA = 'taskData';
var taskData = [];
/**
 * If is the first time the software run in one browser load the default data
 * if not you will have an exeption
 */

var setUp = function setUp() {
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


function storageAvailable() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LOCAL_STORAGE;
  var storage;

  try {
    storage = window[type];
    var test = '__storage_test__';
    storage.setItem(test, test);
    storage.removeItem(test);
    setUp();
    return true;
  } catch (exeption) {
    return exeption instanceof DOMException && (exeption.code === 22 || exeption.code === 1014 || exeption.name === 'QuotaExceededError' || exeption.name === 'NS_ERROR_DOM_QUOTA_REACHED') && storage && storage.length !== 0;
    /* the code 22 check everything exept firefox
    the code 1014 check firefox
    we also need to check for the name because sometimes the code is not present
    everithing exept firefox  QuotaExceededError
    firefox NS_ERROR_DOM_QUOTA_REACHED
    this last part has not sunk in my mind yet :(
    acknowledge QuotaExceededError only if there's something already stored */
  }
}

var setTask = function setTask(arrBooks) {
  return localStorage.setItem(TASK_DATA, JSON.stringify(arrBooks));
};

var getTask = function getTask() {
  return JSON.parse(localStorage.getItem(TASK_DATA));
};



/***/ }),

/***/ "./src/modules/dragg.js":
/*!******************************!*\
  !*** ./src/modules/dragg.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ draggListeners)
/* harmony export */ });
/* eslint-disable no-plusplus */

/** @author Luis David Rodriguez Valades */
var itemContainer = document.querySelector('#itemsContainer');
var elementDraged = null;
var indexInDragg = null;
var pixelsStart = null;
var pixelsEnd = null;
var regex = /itemBody/;
var regexListParent = /itemsContainer/;
var previousOver = null;
var indexInOver = null;

function clearIndtervals() {
  // in case the set interval in the activities manager
  // where we add a timer to the 3 dots buttons run away
  // this error happen if you click on the 3 dots icon and
  // at the same time you dragg, the setInterval go away
  // i still workin on it
  console.log('clear intervals');

  for (var index = 0; index < 20; index++) {
    clearInterval(index);
  }
}

function draggListeners(activitiesManager) {
  // dragg start is called whend start a dragg but deliver the target whom where started the dragg
  itemContainer.addEventListener('dragstart', function (event) {
    console.log("dragStart: dropEffect = ".concat(event.dataTransfer.dropEffect, " ; effectAllowed = ").concat(event.dataTransfer.effectAllowed));
    console.log('drag started on: ', event);
    elementDraged = event.target; // elementDraged.classList.add('dragg');

    indexInDragg = parseInt(elementDraged.getElementsByClassName('number')[0].innerText, 10);
    pixelsStart = event.screenY;
    /*
    * Add this element's id to the drag payload so the drop handler will
    * know which element to add to its tree
    */

    event.dataTransfer.setData('text', event.target.id);
    event.dataTransfer.effectAllowed = 'move';
    clearIndtervals();
  }); // dragover deliver the target is whom we are over!

  itemContainer.addEventListener('dragover', function (event) {
    // prevent defult do allow drop
    event.preventDefault();

    if (regex.test(event.target.id)) {
      var targetInOver = event.target; // console.log('drag over', event.target);

      indexInOver = parseInt(targetInOver.getElementsByClassName('number')[0].innerText, 10); // if the element in dragg is equals to the element in over we dont add the margin

      console.log('indexInOver: ', indexInOver, '    indexInDragg: ', indexInDragg); // if boths index are equals I dont add any margin

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
    } // Set the dropEffect to move


    event.dataTransfer.dropEffect = 'move';
  });
  itemContainer.addEventListener('drop', function (event) {
    // prevent defult actions (open as link for some elements)
    event.preventDefault();
    console.log('drop on: ', event.target);
    var dropContainer = event.target;
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
      elementDraged.style.transform = "translateY(".concat(pixelsEnd - pixelsStart + -45, "px)");
      elementDraged.style.position = 'absolute';
      setTimeout(function () {
        // set a delay to allow the animation running before refresh
        activitiesManager.updatePosition(indexInDragg, indexInOver);
      }, 500);
    }
  }); // dragg end is called whend finish the dragg but deliver the target whom where finished the dragg

  itemContainer.addEventListener('dragend', function (event) {
    console.log('drag end on: ', event);

    if (event.dataTransfer !== null) {
      console.log(event.dataTransfer);
    }
  }, false);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nul {\n  padding-inline-start: 0;\n  list-style: none;\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n\na {\n  text-decoration: none;\n  word-wrap: break-word;\n}\n\n::before {\n  box-sizing: border-box;\n}\n\n::after {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Roboto\", arial, helvetica, sans-serif;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.container {\n  width: 500px;\n  min-height: 400px;\n  max-height: 800px;\n  box-shadow: 3px 3px 5px 5px #ff0000;\n  display: flex;\n  flex-direction: column;\n}\n.container .container__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 45px;\n  padding: 0 5px;\n  border-bottom: 1px solid lightgrey;\n}\n.container .container__header input {\n  border: none;\n  width: 80%;\n  height: 80%;\n  padding: 5px;\n  font-style: italic;\n}\n.container .container__header i {\n  text-align: center;\n  width: 20px;\n}\n.container .container__header i:hover {\n  cursor: pointer;\n}\n.container .container__footer {\n  height: 55px;\n  display: flex;\n  margin-top: auto;\n}\n.container .container__footer .delete-button {\n  justify-content: center;\n  width: 100%;\n  border: none;\n  height: 55px;\n  background-color: rgb(236, 236, 236);\n  color: gray;\n}\n.container .container__footer .delete-button:hover {\n  cursor: pointer;\n}\n\n.items-container {\n  width: 100%;\n  overflow-y: scroll;\n  position: relative;\n}\n.items-container .items-container__item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 0 5px;\n  height: 45px;\n  border-bottom: 1px solid lightgrey;\n  transition: all 0.5s linear;\n}\n.items-container .items-container__item.invisible {\n  transition: all 1s linear;\n  transform: translateX(-500px);\n}\n.items-container .items-container__item:active {\n  background-color: rgba(255, 208, 0, 0.712);\n  border: 2px solid;\n}\n.items-container .items-container__item.editor {\n  background-color: blanchedalmond;\n}\n.items-container .items-container__item .number {\n  width: 10%;\n}\n.items-container .items-container__item .description {\n  width: 50%;\n  border: none;\n  background-color: transparent;\n  padding: 0 3px;\n}\n.items-container .items-container__item .description:enabled {\n  color: black;\n  border: 1px solid gray;\n}\n.items-container .items-container__item .description:disabled {\n  color: black;\n}\n.items-container .items-container__item i {\n  text-align: center;\n  width: 20px;\n}\n.items-container .items-container__item i:hover {\n  cursor: pointer;\n}\n.items-container .items-container__item i.hold {\n  transition: all 2s linear;\n  transform: scale(1.5);\n}\n.items-container .items-container__item [type=checkbox] {\n  width: 15px;\n  height: 15px;\n}\n.items-container .items-container__item .btn-cancel {\n  background-color: transparent;\n  border: none;\n  text-decoration: underline;\n  font-size: 0.6em;\n  color: red;\n}\n.items-container .items-container__item .btn-cancel:hover {\n  cursor: pointer;\n}\n.items-container .line-trhough {\n  text-decoration: line-through;\n}", "",{"version":3,"sources":["webpack://./src/styles/2_base/_config.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;ACCF;;ADGA;EACE,uBAAA;EACA,gBAAA;EACA,qBAAA;EACA,mBAAA;ACAF;;ADGA;EACE,qBAAA;EACA,qBAAA;ACAF;;ADGA;EACE,sBAAA;ACAF;;ADGA;EACE,sBAAA;ACAF;;AAnBA;EACE,mDAHY;AAyBd;;AAnBA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAsBF;;AAnBA;EACE,YAAA;EACA,iBAAA;EACA,iBAAA;EACA,mCAAA;EACA,aAAA;EACA,sBAAA;AAsBF;AApBE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,gBAzBU;EA0BV,cAAA;EACA,kCAAA;AAsBJ;AApBI;EACE,YAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AAsBN;AAnBI;EACE,kBAAA;EACA,WAAA;AAqBN;AAnBM;EACE,eAAA;AAqBR;AAhBE;EACE,YAAA;EACA,aAAA;EACA,gBAAA;AAkBJ;AAhBI;EACE,uBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,oCAAA;EACA,WAAA;AAkBN;AAhBM;EACE,eAAA;AAkBR;;AAZA;EACE,WAAA;EACA,kBAAA;EACA,kBAAA;AAeF;AAbE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;EACA,cAAA;EACA,YA9EU;EA+EV,kCAAA;EACA,2BAAA;AAeJ;AAbI;EACE,yBAAA;EACA,6BAAA;AAeN;AAZI;EACE,0CAAA;EACA,iBAAA;AAcN;AAXI;EACE,gCAAA;AAaN;AAVI;EACE,UAAA;AAYN;AATI;EACE,UAAA;EACA,YAAA;EACA,6BAAA;EACA,cAAA;AAWN;AATM;EACE,YAAA;EACA,sBAAA;AAWR;AARM;EACE,YAAA;AAUR;AANI;EACE,kBAAA;EACA,WAAA;AAQN;AANM;EACE,eAAA;AAQR;AALM;EACE,yBAAA;EACA,qBAAA;AAOR;AAHI;EACE,WAAA;EACA,YAAA;AAKN;AAFI;EACE,6BAAA;EACA,YAAA;EACA,0BAAA;EACA,gBAAA;EACA,UAAA;AAIN;AAFM;EACE,eAAA;AAIR;AACE;EACE,6BAAA;AACJ","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n//yeah I get ride of that hideous padding once and for all for all my ul!!\r\nul {\r\n  padding-inline-start: 0;\r\n  list-style: none;\r\n  margin-block-start: 0;\r\n  margin-block-end: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  word-wrap: break-word;\r\n}\r\n\r\n::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\n::after {\r\n  box-sizing: border-box;\r\n}\r\n","@import '2_base/config';\r\n\r\n$item-height: 45px;\r\n$font-family: 'Roboto', arial, helvetica, sans-serif;\r\n\r\nbody {\r\n  font-family: $font-family;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.container {\r\n  width: 500px;\r\n  min-height: 400px;\r\n  max-height: 800px;\r\n  box-shadow: 3px 3px 5px 5px #ff0000;\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  #{&}__header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    min-height: $item-height;\r\n    padding: 0 5px;\r\n    border-bottom: 1px solid lightgrey;\r\n\r\n    & input {\r\n      border: none;\r\n      width: 80%;\r\n      height: 80%;\r\n      padding: 5px;\r\n      font-style: italic;\r\n    }\r\n\r\n    & i {\r\n      text-align: center;\r\n      width: 20px;\r\n\r\n      &:hover {\r\n        cursor: pointer;\r\n      }\r\n    }\r\n  }\r\n\r\n  #{&}__footer {\r\n    height: $item-height + 10;\r\n    display: flex;\r\n    margin-top: auto;\r\n\r\n    & .delete-button {\r\n      justify-content: center;\r\n      width: 100%;\r\n      border: none;\r\n      height: $item-height+10px;\r\n      background-color: rgb(236, 236, 236);\r\n      color: gray;\r\n\r\n      &:hover {\r\n        cursor: pointer;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.items-container {\r\n  width: 100%;\r\n  overflow-y: scroll;\r\n  position: relative;\r\n\r\n  #{&}__item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    padding: 0 5px;\r\n    height: $item-height;\r\n    border-bottom: 1px solid lightgrey;\r\n    transition: all 0.5s linear;\r\n\r\n    &.invisible {\r\n      transition: all 1s linear;\r\n      transform: translateX(-500px);\r\n    }\r\n\r\n    &:active {\r\n      background-color: rgba(255, 208, 0, 0.712);\r\n      border: 2px solid;\r\n    }\r\n\r\n    &.editor {\r\n      background-color: blanchedalmond;\r\n    }\r\n\r\n    & .number {\r\n      width: 10%;\r\n    }\r\n\r\n    & .description {\r\n      width: 50%;\r\n      border: none;\r\n      background-color: transparent;\r\n      padding: 0 3px;\r\n\r\n      &:enabled {\r\n        color: black;\r\n        border: 1px solid gray;\r\n      }\r\n\r\n      &:disabled {\r\n        color: black;\r\n      }\r\n    }\r\n\r\n    & i {\r\n      text-align: center;\r\n      width: 20px;\r\n\r\n      &:hover {\r\n        cursor: pointer;\r\n      }\r\n\r\n      &.hold {\r\n        transition: all 2s linear;\r\n        transform: scale(1.5);\r\n      }\r\n    }\r\n\r\n    & [type='checkbox'] {\r\n      width: 15px;\r\n      height: 15px;\r\n    }\r\n\r\n    & .btn-cancel {\r\n      background-color: transparent;\r\n      border: none;\r\n      text-decoration: underline;\r\n      font-size: 0.6em;\r\n      color: red;\r\n\r\n      &:hover {\r\n        cursor: pointer;\r\n      }\r\n    }\r\n  }\r\n\r\n  & .line-trhough {\r\n    text-decoration: line-through;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=main.js.map