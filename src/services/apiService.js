'use strict';

// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ

const URL = 'https://pixabay.com/api/';
const API_KEY = '14594113-3565582ddf884392468dadf7f';

const apiService = {
  page: 1,
  query: '',

  async fetchImages() {
    const requestParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${API_KEY}`;

    const resp = await fetch(URL + requestParams);
    const { hits } = await resp.json();
    this.incrementPage();
    return hits;
  },

  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};

// apiService();

export { apiService };
