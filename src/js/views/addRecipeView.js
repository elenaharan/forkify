import View from './View.js';

class addRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleHiddenClass() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
    this.addHandlerUpload();
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleHiddenClass.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleHiddenClass.bind(this));
    this._overlay.addEventListener('click', this.toggleHiddenClass.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      //FormData is a modern browser API
      const dataArray = [...new FormData(this)];
      //Object.fromEntries creates object from array
      const data = Object.fromEntries(dataArray);
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new addRecipeView();
