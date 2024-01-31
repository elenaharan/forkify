import View from './View.js';
import icons from 'url:../../img/icons.svg';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generatePrevBtn(currPage) {
    return `
      <button data-goto="${
        currPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currPage - 1}</span>
      </button>
    `;
  }

  _generateNextBtn(currPage) {
    return `
    <button data-goto="${
      currPage + 1
    }" class="btn--inline pagination__btn--next">
    <span>Page ${currPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>
    `;
  }

  _generateMarkup() {
    const currPage = this._data.currentPage;
    const totalPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //Page 1, other pages
    if (currPage === 1 && totalPages > 1)
      return this._generateNextBtn(currPage);
    //Page 1, NO other pages
    if (currPage === 1 && totalPages === 1) return '';
    //Last page
    if (currPage === totalPages && totalPages > 1)
      return this._generatePrevBtn(currPage);
    //Other page
    if (currPage !== 1 && currPage < totalPages) {
      return this._generatePrevBtn(currPage) + this._generateNextBtn(currPage);
    }
    return '';
  }
}

export default new paginationView();
