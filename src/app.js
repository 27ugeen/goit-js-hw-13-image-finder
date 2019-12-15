'use strict';

import debounce from 'lodash.debounce';
import { messageNeedInput } from './utils/pnotify';

import { refs } from './utils/refs';
import { apiService } from './services/apiService';

import { fetchImages, deleteItem } from './services/buildMarkup';
import { scrollPage } from './utils/scroll';

function searchFromInput(event) {
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

  // input.value = '';
}

function loadMoreBtnHandler() {
  const input = apiService.query;

  if (!input) {
    messageNeedInput();
    return;
  }
  fetchImages();

  setTimeout(() => {
    scrollPage();
    // let element = document.querySelectorAll('ul > li:last-child');
    // // console.log(element[0]);
    // element[0].scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'end',
    //   inline: 'nearest',
    // });
  }, 1500);
}
refs.searchForm.addEventListener('input', debounce(searchFromInput, 1000));
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);
