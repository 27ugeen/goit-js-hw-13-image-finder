'use strict';

import debounce from 'lodash.debounce';
import { messageNeedInput } from './utils/pnotify';

import { refs } from './utils/refs';
import { apiService } from './services/apiService';

import { fetchImages, deleteItem } from './services/buildMarkup';

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
    // scrollPage();
    let element = document.querySelectorAll('ul > li:last-child');
    // console.log(element[0]);
    element[0].scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, 1500);
}
refs.searchForm.addEventListener('input', debounce(searchFromInput, 1000));
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

// function scroll() {
//   let element = document.querySelectorAll('ul > li:last-child');
//   console.log(element[0]);
//   element[0].scrollIntoView({
//     behavior: 'smooth',
//     block: 'end',
//     inline: 'nearest',
//   });
// }

// function makeCounter() {
//   let currentCount = document.documentElement.clientHeight * 2;

//   return function() {
//     return (currentCount = Math.ceil(
//       (currentCount + document.documentElement.clientHeight) * 0.9,
//     ));
//   };
// }

// const counter = makeCounter(); // (*)

// function scrollPage() {
//   let height = counter();
//   console.log(height);
//   const scrollOptions = {
//     left: 0,
//     top: height,
//     behavior: 'smooth',
//   };

//   window.scrollTo(scrollOptions);
// }
