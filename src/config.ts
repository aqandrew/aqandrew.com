export const config = {
  name: 'Andrew Aquino',
  shortDesc:
    "I'm a frontend developer in Southern California. These are my projects and notes about JavaScript, CSS, design, and anything else I'm learning.",
  url: 'https://aqandrew.com',
  lang: 'en',
  author: {
    name: 'Andrew Aquino',
    email: 'hi@aqandrew.com',
    twitter: 'aqandrew',
    github: 'aqandrew',
    codepen: 'aqandrew',
  },
  lookingForWork: false,
  paymentPointer: 'https://ko-fi.com/aqandrew',
  syntaxTheme: 'prism-night-owl.css',
  permalinkClass: ['permalink'],
  iframeClass: ['iframes-wrapper'],
  codeClass: ['code-wrapper'],
  figureClass: ['figure'],
  paths: {
    src: 'src',
    images: 'img',
    blogdir: 'blog',
    includes: 'components',
    output: 'dist',
  },
};

export const navigation = {
  items: [
    {
      text: 'Andrew Aquino',
      url: '/',
    },
    {
      text: 'Resume',
      url: '/Andrew-Aquino-Resume.pdf',
    },
    {
      text: 'About',
      url: '/about/',
    },
    {
      text: 'Blog',
      url: '/blog/',
    },
  ],
};