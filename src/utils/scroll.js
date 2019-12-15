'use strict';

function makeCounter() {
  let currentCount = document.documentElement.clientHeight;

  return function() {
    return (currentCount =
      currentCount + document.documentElement.clientHeight);
  };
}

const counter = makeCounter(); // (*)

function scrollPage() {
  let height = counter();
  console.log(height);
  const scrollOptions = {
    left: 0,
    top: height,
    behavior: 'smooth',
  };

  window.scrollTo(scrollOptions);
}

export { scrollPage };
