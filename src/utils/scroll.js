'use strict';

import { setCurrentHeightValue } from './browserHeight';

const scrollPage = () => {
  setTimeout(() => {
    let height = setCurrentHeightValue();

    const scrollOptions = {
      left: 0,
      top: height,
      behavior: 'smooth',
    };

    window.scrollTo(scrollOptions);
  }, 0);
};

export { scrollPage };

//======================================

// const container = refs.body;

//   container.style.height = 'auto';

//   /** Get the computed height of the container. */
//   const height = container.clientHeight + 'px';

//   /** Set the height of the content as 0px, */
//   /** so we can trigger the slide down animation. */
//   container.style.height = '0px';

//   /** Do this after the 0px has applied. */
//   /** It's like a delay or something. MAGIC! */
//   setTimeout(() => {
//     container.style.height = height;
//   }, 0);
