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
let cycleIndex = 0;
let textElem;
let gradientIntervalId;

// Register properties
colorNames.forEach((name, index) => {
  CSS.registerProperty({
    name,
    syntax: '<color>',
    inherits: false,
    initialValue: rainbowColors[index],
  });
});

const setGradientColorCustomProperties = (colors) => {
  // Apply these new colors, update the DOM.
  colorNames.forEach((name, index) => {
    textElem.style.setProperty(name, colors[index]);
  });
};

const activateMagicGradient = () => {
  textElem = document.querySelector('#hero-text');

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

    setGradientColorCustomProperties(nextColors);

    // increment the cycle count, so that we advance
    // the colors in the next loop.
    cycleIndex++;
  }
};

const handleTurbolinksLoad = () => {
  clearInterval(gradientIntervalId);

  // Activate magic gradient on homepage
  if (window.location.pathname === '/') {
    gradientIntervalId = window.setInterval(
      activateMagicGradient,
      intervalDelay
    );
  } else {
    // Otherwise, set magic rainbow color properties back to initial values,
    //   to prevent flicker when revisiting homepage
    setGradientColorCustomProperties(rainbowColors);
  }
};

document.addEventListener('turbolinks:load', handleTurbolinksLoad);
