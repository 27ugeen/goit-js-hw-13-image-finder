'use strict';

import { refs } from '../utils/refs';
import gallery from '../templates/gallery.hbs';
import { apiService } from './apiService';
import { messageBadInput, messageTakeResult } from '../utils/pnotify';

const insertItems = item => {
  refs.gallery.insertAdjacentHTML('beforeend', item);
};

const createList = items => {
  return gallery(items);
};

const deleteItem = () => {
  refs.gallery.innerHTML = '';
};
const fetchImages = () => {
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
};

export { fetchImages, insertItems, createList, deleteItem };
