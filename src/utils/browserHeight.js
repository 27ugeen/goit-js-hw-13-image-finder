'use strict';

const getBrowserHeight = () => {
  const browserHeight = document.documentElement.clientHeight;

  return browserHeight;
};

let currentHeight = 0;

const setCurrentHeightValue = appendHeight => {
  appendHeight = getBrowserHeight();

  currentHeight = currentHeight + appendHeight * 2;

  return currentHeight;
};

export { setCurrentHeightValue };
