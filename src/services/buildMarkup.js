'use strict';

import { refs } from '../utils/refs';
import gallery from '../templates/gallery.hbs';
import { apiService } from './apiService';
import { messageBadInput, messageTakeResult } from '../utils/pnotify';

function insertItems(item) {
  refs.gallery.insertAdjacentHTML('beforeend', item);
}

function createList(items) {
  return gallery(items);
}

function deleteItem() {
  refs.gallery.innerHTML = '';
}
function fetchImages() {
  apiService
    .fetchImages()
    .then(data => {
      const listItems = createList(data);
      insertItems(listItems);
      if (listItems) {
        messageTakeResult();
      } else {
        messageBadInput();
        return;
      }
    })
    .catch(error => {
      console.warn(error);
    });
}

export { fetchImages, insertItems, createList, deleteItem };
