'use strict';

import debounce from 'lodash.debounce';
import { messageNeedInput } from './utils/pnotify';

import { refs } from './utils/refs';
import { apiService } from './services/apiService';

import { fetchImages, deleteItem } from './services/buildMarkup';
import { scrollPage } from './utils/scroll';

const searchFromInput = event => {
  if (event.keyCode === 13) {
    event.preventDefault();

    const input = event.target;
    if (input.value === '') {
      messageNeedInput();
      return;
    }

    deleteItem();

    // console.log(input);
    apiService.resetPage();
    apiService.searchQuery = input.value;
    fetchImages();
  }

  // input.value = '';
};

const loadMoreBtnHandler = () => {
  const input = apiService.query;

  if (!input) {
    messageNeedInput();
    return;
  }
  fetchImages();

  setTimeout(() => scrollPage(), 1500);
};

refs.searchForm.addEventListener('keyup', debounce(searchFromInput, 500));
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);
