---
title: 'Web Components: The Basics'
date: '2020-08-26'
tags:
  - web-components
metaDesc: I learned how to use Web Components for a take-home coding challenge! Here's a small collection of useful information I gathered.
# TODO image: square peg in a round hole
---

{{ metaDesc }}

(I'm assuming you have a solid foundation of HTML/JavaScript knowledge.)

## Quick links

1. [tl;dr](#tldr)
2. [Hello World example code](https://codepen.io/dawneraq/pen/wvGJaow)
3. [My implementation notes](#implementation-notes)
4. [Web Components documentation on Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

The `ColorPicker` web component I made:

<iframe height="640" style="width: 100%;" scrolling="no" title="Color Picker Web Component" src="https://codepen.io/dawneraq/embed/YzqWQYa?height=640&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/dawneraq/pen/YzqWQYa'>Color Picker Web Component</a> by Andrew Aquino
  (<a href='https://codepen.io/dawneraq'>@dawneraq</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Background

I'll be honest. I love take-home coding challenges for interviews.

Yes, I'm not getting paid to write code for some company on my personal time&mdash;but I'd choose it over a "traditional" data structures / algorithms technical interview **any** day.

- No one's observing me, so there's no performance anxiety.
- The problem-solving I'm asked to demonstrate is usually _relevant to the work I'm expected to do for a role_.
- I can look up documentation.
- The time constraints are much more flexible.
- I can make subjective design decisions, work how I like to, then discuss those decisions later.
- Sometimes there's an opportunity to share what I've learned. 😉

Recently I was presented with the following take-home challenge as part of one company's interview process.

**The challenge:** Create a color swatch picker in a public CodePen.

**Requirements**

1. Build the component using only vanilla JavaScript.
2. Two or more of these components should be able to exist on the same page.

After toying around with some not-very-good ideas on how to approach this, I decided to give Web Components a try.

### Why Web Components?

Even though Web Components was introduced by Google in 2011, I only started hearing some buzz about it within the past year. Particularly with respect to [Eleventy](https://www.11ty.dev/), which is [said to play pretty nicely with it](https://twitter.com/justinfagnani/status/1212847104718061569).

Eleventy's ability to cooperate with Web Components makes it quite powerful as a static site generator, even though it doesn't rely on any frontend JavaScript frameworks like React or Vue. While either one of those would be perfectly capable of creating a reusable and extensible color picker component, pulling in a frontend framework would **not** be vanilla JavaScript&mdash;and would certainly be overkill for a small project like this.

That said, I still wanted a method that was more elegant and less bug-prone than the first one that came to mind:

1. ```html
   <!-- Create two or more of these divs -->
   <div class="color-picker"></div>
   <div class="color-picker"></div>
   ```
2. ```js
   const colorPickers = document.getElementsByClassName('color-picker');

   Array.prototype.forEach.call(colorPickers, (colorPicker) => {
     /* Set innerHTML and add event listeners here */
   });
   ```

Above all, it's always cool to learn about useful functionality that's provided natively by web technologies. For example:

- Showing diffs with semantic HTML elements like [`<ins>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins) and [`<del>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)
- Displaying your own form validation messages with [`setCustomValidity`](https://twitter.com/sulco/status/1297882082430132232?s=20)

## Implementation notes

- I mostly based my implementation off of these guides:
  - [Custom Elements &mdash; Google Web Fundamentals](https://developers.google.com/web/fundamentals/web-components/customelements)
  - [Attributes and Properties in Custom Elements &mdash; Alligator.io](https://alligator.io/web-components/attributes-properties/)
- At first I thought, "There's no way this is gonna work..." when I typed this in the Pen:
  <iframe height="265" style="width: 100%;" scrolling="no" title="Web Components - Hello World example" src="https://codepen.io/dawneraq/embed/wvGJaow?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href='https://codepen.io/dawneraq/pen/wvGJaow'>Web Components - Hello World example</a> by Andrew Aquino
    (<a href='https://codepen.io/dawneraq'>@dawneraq</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>
- Eventually I moved the component's template HTML above the `<style>` tag, to more closely resemble the structure of a Vue single-file component (template first, style afterward).
- In the interest of time, I didn't look up any Web Component best practices. So I just followed my React intuition.

  _Aside: I'm officially very invested in the React ecosystem. Even though I've used Angular for just about my whole career, some of the details have gotten a little fuzzy since I've been tinkering with React for the past 7 months. Last week I built a small Angular app for a different take-home challenge, and was thoroughly confused by several things:_

  - _How to globally update `@angular/cli`_
  - _How to upgrade from Angular 5 to Angular 10_
  - _What the heck an `InjectorError` is_
  - _You have to set `this.JSON = JSON` in an Angular component in order to call `JSON.parse` within its template???_

- `this` is as tricky as ever.

  ```js
  this.setPreviewColor = this.setPreviewColor.bind(this);
  ```

  Like I found out firsthand from my [React music visualizer](https://codepen.io/dawneraq/pen/OJVNRgV), it's sometimes necessary to bind an object's method to the parent object itself. This way, when that method is passed as a callback to another function (like `addEventListener`), it's still aware of the parent object's context.

  Without that binding, the highlighted line below throws the following error when executed:

  ```js/3
  setPreviewColor(event) {
    const color = event.target.dataset.color;

    this.previewElement.style.backgroundColor = color;
  }
  ```

  ```js
  Uncaught TypeError: Cannot read property 'style' of undefined
    at HTMLDivElement.setPreviewColor
  ```

- Can I pass props into this thing? How?

  I'd seen [`data-*` attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) used in Bootstrap (`data-toggle="dropdown"`, for example), but I'd never used them myself. It turns out they provide a nice way to pass data into your web components. Their values are available in `HTMLElement.dataset` as camelCased property names.

  ```html
  <color-picker
    data-palette='[
      "#355070",
      "#6d597a",
      "#b56576",
      "#e56b6f",
      "#eaac8b",
      "#e5dcc5"
    ]'
  ></color-picker>
  ```

  ```js/1
  // Initialize palette based on data attributes, if possible
  const dataPalette = this.dataset.palette;
  const defaultPalette = [
    '#e62e25',
    '#68f312',
    '#35a3fa',
    '#f29f27',
    '#e140fe',
  ];
  const palette = dataPalette ? JSON.parse(dataPalette) : defaultPalette;
  ```

  I do wonder if there's a nicer-looking way to embed JSON objects inside data attributes. That is, still being able to use double quotes for the `data-palette` attribute, while being able to call `JSON.parse()`, which expects to see all strings wrapped in double quotes.

<!-- TODO Write about this later? -->
<!-- - I'm still not quite sure how React and Web Components solve different problems... -->

## tl;dr

**What is Web Components?**

[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) is an API that allows you to define custom HTML elements. The reusability it promotes is kind of like CSS custom properties, but you can reuse (and override) HTML templates, JavaScript functionality, _and_ styles that are specific to your component. The API consists of three technologies:

1. [Custom HTML elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements), which define a web component's tag name (something like `<accordion-menu>`), internal properties, and behaviors
2. [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM), used with custom elements to safely separate a web component's own <abbr title="document object model">DOM</abbr> subtree from the containing document
3. The [`<template>` and `<slot>`](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots) HTML elements, which enable component HTML reuse and "plugging in" values into components, like a styled button's label

_In case it's confusing...I refer to Web Components (the proper noun) as singular, and web components (the common noun) as plural._

**What browsers support Web Components?**

At the time of writing, Web Components is [fully supported](https://caniuse.com/#feat=custom-elementsv1) on Firefox and Chromium-based browsers, partially supported on Safari (mobile and desktop), and not supported on Internet Explorer.

**What's a shadow root?**

A `ShadowRoot` provides a means to access the shadow DOM that's owned by an instance of a web component. It exposes DOM functions like `querySelector` and `appendChild`.

**What's `attachShadow({ mode: 'open' })`?**

It's called on an `HTMLElement`, and returns a reference to its `ShadowRoot`.

If `{ mode: 'closed' }` is used, `null` will be returned, and you won't be able to access the element's `ShadowRoot` from the context in which `attachShadow` is called.

**What's `cloneNode(true)`?**

`cloneNode` returns a `Node` that's a copy of the `Node` it was called on.

`true` is a value for `deep`, the one argument that can be passed to `cloneNode`.

`deep` is optional, and defaults to `false`. If `deep === true`, the node and its subtree (including `Text` nodes) will be cloned.

```html
<ol id="someList">
  Only two things are infinite:
  <li>The universe</li>
  <li>Human stupidity</li>
</ol>
```

```js
let shallowClone = someList.cloneNode();
// => <ol id="someList"></ol>

let deepClone = someList.cloneNode(true);
// => <ol id="someList">Only two things...<li>...</li><li>...</li></ol>
```

**Why are `<template>` and its children invisible?**

`<template>` elements aren't rendered in the document. But they can be accessed from within JavaScript, and are useful for inserting custom elements into a document using a predictable HTML structure.

**What's `disconnectedCallback`?**

`disconnectedCallback` is kind of like React's `componentWillUnmount` or Vue's `beforeDestroy`. This is where you perform cleanup like removing event listeners.

It's part of a [series of lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks) that are executed at specific times in the lifecycle of a custom element.

**What's `:host`?**

Within `template > style`, the `:host` CSS selector targets the component itself. This allows you to write scoped styles, including CSS custom properties.

## Conclusion

I've barely scratched the surface here. Web Components is a highly flexible set of web features that allow you to customize and extend HTML elements, which is pretty compelling. If you've got some custom functionality you want to reuse, defining an `<accordion-menu>` will be a lot more semantic and future-proof than `div > div + div ...`

While web components are still evolving, there's a lot of support for them in the open-source community&mdash;in the forms of both component authoring tools, as well as libraries of published components&mdash;like [Polymer](https://www.polymer-project.org/) and [WebComponents.org](https://www.webcomponents.org/), respectively.

For a more detailed and practical look at Web Components, check out [this CSS-Tricks guide](https://css-tricks.com/an-introduction-to-web-components/) that I found immediately after submitting my coding challenge. 🙃

Hopefully "Web Components" still looks like real words to you after reading it so many times.
