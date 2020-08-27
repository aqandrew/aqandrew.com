import Turbolinks from 'turbolinks';

/**
 * Init Turbolinks within the site
 */
Turbolinks.start();

/**
 * Gradient hero text
 */
// https://joshwcomeau.com/react/rainbow-button/#a-vanilla-js-demo
// See app.pcss for custom properties
const rainbowColors = [
  'yellow', // var(--yellow)
  '#843ff3', // var(--purple)
  'cadetblue', // var(--teal) // TODO should be aquamarine in dark mode
];

const paletteSize = rainbowColors.length;

// Number of milliseconds for each update
const intervalDelay = 2000;
const colorNames = [
  '--magic-rainbow-color-0',
  '--magic-rainbow-color-1',
  '--magic-rainbow-color-2',
];

// Register properties
colorNames.forEach((name, index) => {
  CSS.registerProperty({
    name,
    syntax: '<color>',
    inherits: false,
    initialValue: rainbowColors[index],
  });
});

const textElem = document.querySelector('#hero-text');
let cycleIndex = 0;

window.setInterval(() => {
  // TODO CSS custom property cycling only occurs if initially loaded page is homepage,
  //   and breaks when navigating away and back
  if (textElem) {
    // Shift every color up by one position.
    //
    // `% paletteSize` is a handy trick to ensure
    // that values "wrap around"; if we've exceeded
    // the number of items in the array, it loops
    // back to 0.
    const nextColors = [
      rainbowColors[(cycleIndex + 1) % paletteSize],
      rainbowColors[(cycleIndex + 2) % paletteSize],
      rainbowColors[(cycleIndex + 3) % paletteSize],
    ];

    // Apply these new colors, update the DOM.
    colorNames.forEach((name, index) => {
      textElem.style.setProperty(name, nextColors[index]);
    });

    // increment the cycle count, so that we advance
    // the colors in the next loop.
    cycleIndex++;
  }
}, intervalDelay);
