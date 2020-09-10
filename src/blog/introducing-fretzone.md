---
title: 'Introducing FretZone'
date: '2020-09-10'
tags:
  - fret-zone
  - react
# TODO image
---

[FretZone](https://fret.zone/) is a passion project I'm working on to teach myself React. It's a challenge I've undertaken to keep myself hireable.

## Background

When I suddenly landed back in the frontend developer job market earlier this year, I noticed that a ton of really interesting job postings at my level wanted applicants who have experience writing production React code for at least 1-2 years.

Although I've been using Angular to build UIs almost exclusively for the past 4 years, that requirement hasn't stopped me from applying to those jobs anyway. I believe that **willingness to learn**, a **firm grasp on programming fundamentals**, and **good communication skills** matter more than experience with a particular tool. All the same, I figured it couldn't hurt to spend my downtime learning a new skill.

### Tutorial hell

In the beginning of my React journey, I coded while following along with a ton of tutorials. The following guides stood out to me, in order of increasing complexity:

1. [Every UI Designer needs to learn React. Here’s why](https://blog.continuum.cl/every-ui-designer-needs-to-learn-react-heres-why-f2b8c2ff2c86), by Sergio Nouvel
2. [How to React](https://kentcdodds.com/blog/how-to-react), by Kent C. Dodds
3. [Framer Guide to React](https://www.framer.com/books/framer-guide-to-react/), by Koen Bok
4. [Getting Started with React](https://www.taniarascia.com/getting-started-with-react/), by Tania Rascia
5. [React: Getting Started - The Complete Tutorial for 2020](https://daveceddia.com/react-getting-started-tutorial/), by Dave Ceddia

There's a wealth of information here and elsewhere about **motivations for learning React in the first place**, **what React is** and **how it works**, how to make **simple standalone apps** that **demonstrate basic React principles**, and **additional resources for going deeper and learning more**. I'm immensely grateful that as a newbie I had access to these high-quality guides for absolutely free.

For a while, I _felt_ like I was learning a lot. [I was in motion, but not taking action](https://jamesclear.com/taking-action). Reading reference material alone wasn't enough to solidify my understanding. After a month or two, was I at a point where I could list React as a skill on my résumé with confidence? Not really.

#### Aside: On switching to React from Angular

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Me a week ago: &quot;Grid seems cool but FlexBox has always been good enough for me&quot;<br><br>Me today: &quot;Grind CSS Grid into a fine powder so I can snort it through a $100 bill&quot;</p>&mdash; Adam Rackis (@AdamRackis) <a href="https://twitter.com/AdamRackis/status/1283961272007102464?ref_src=twsrc%5Etfw">July 17, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I deeply relate not only to the CSS subject of this tweet&mdash;but also to how that powerful and exciting feeling feeling is _just_ like the one I've gotten from learning React after relying solely on Angular. Like many other developers, I immediately fell in love with the developer experience, with the most outstanding reason being that [React is simple](https://epicreact.dev/why-i-love-react/). In my experience,

- JSX is easier for me to understand than `@Input`/`@Output` decorators, data-binding with brackets and parentheses `[(likeThis)]`, and custom directives like `*ngFor`.
- React components can be extremely lightweight.
- Debugging React apps is essentially the same as debugging vanilla JavaScript. I didn't have to learn any weird new architectural concepts like `NgModule`s or handling dependency injection with `Provider`s. In contrast, React's error messages are helpful and easy to look up.
- I've found the React community to be very open and welcoming, with plenty of well-written docs and tutorials.

I'm _not_ saying that Angular should be obliterated, or that any web app that's not built with React is trash. The takeaway is similar to that of the aforementioned tweet. Whichever frontend framework you end up using depends on the needs of your app and the skillsets of your team, just like how whichever CSS layout you should use depends on the content you're styling and how it should behave responsively.

React is a tool I'd definitely like to work with more. (The same goes for Vue, which also seems to have very little cruft besides funny-looking custom directives.) I see learning it as a solid investment, because it seems like it'll be around for a while.

Now back to my story.

### The brutal job search

While I was in this React tutorial hell, I'd sent out dozens of job applications for frontend developer jobs but hadn't received many responses. During this time I found [this fascinating blog post](https://joshwcomeau.com/career/no-cs-degree-required/) by Josh W. Comeau that examines several salient factors in the tech job search.

With some of these factors, I was already in good shape. I'd been working as a UI/UX developer full-time in the 2 years since graduating college with a Computer Science degree. So I was well past the point where a coding bootcamp would be worthwhile.

I had less control some of the other factors, like my connections. My professional network was pretty small, and the COVID-19 pandemic had made expanding that network difficult. And being relatively early on in my career and not very entrepreneurial, starting my own business didn't seem like a viable option.

There was **one factor** mentioned, _well within_ my circle of influence, that I knew would help my personal situation more than anything else. [This section of Josh's post](https://joshwcomeau.com/career/no-cs-degree-required/#side-projects--freelancing) shows that some **non-production side project experience with a relevant technology** can have a _huge_ impact on one's ability to get a new software engineering job. I realized that I needed get some practice using React to build UIs beyond the tutorial level.

### I needed a project to work on

Plenty of frontend framework tutorials teach you how to create a to-do list app or something. That didn't sound very exciting. Instead, I took my first step outside of tutorial hell by using React to create a [music visualizer](https://codepen.io/dawneraq/pen/OJVNRgV). While that was a great learning experience, and I was super stoked that it got featured on the front page of CodePen, there wasn't much farther I could go with the visualizer in terms of building web UIs. (I do plan on coding up more music visualizers to practice using creative coding tools like [p5.js](https://p5js.org/) and [three.js](https://threejs.org/). I'd just like to not be unemployed anymore, first. 🙃)

To escape tutorial hell completely, I began hacking on FretZone.

## What's FretZone?

FretZone is my attempt at cloning [Guitar Pro](https://www.guitar-pro.com/en/index.php), a guitar tablature editor, with React.

Why would I want to do this?

**Less importantly:** As a frontend developer, creating a guitar tab editor with code is an interesting problem to solve in itself, because writing guitar tabs is something that can be done entirely client-side, without any servers or backend logic. In that sense, I'm taking inspiration from [Excalidraw](https://excalidraw.com/), an open-source collaborative drawing/diagramming app made with React which doesn't store users' drawings in a database. For example: if you want to save a drawing for later, you can export it to an `.excalidraw` file, which is just JSON. I plan on taking a similar approach eventually.

**More importantly:** There are two ideas I've heard several times in the past few months that have led me to this endeavor.

1. If you're learning a frontend framework, or even just beginning to learn HTML, CSS, and JavaScript, recreating the UI of an app or website you're familiar with can be a really helpful exercise.
2. If you're learning _any_ new programming technology, the process will be so much more self-motivating and rewarding if you use that technology to create something that _you_ specifically care about, and/or something that solves a specific problem that _you_ have.

Based on these ideas, I want to do this because **Guitar Pro as a piece of software is near and dear to me**.

## What's so great about Guitar Pro?

First it's necessary to understand what guitar tabs are in the first place.

### What are guitar tabs?

Tablature is a format that's been used to [notate music for stringed instruments like the lute since at least the 1500s](https://commons.wikimedia.org/wiki/File:Tablature_Luth_1521.jpg). Ever since picking up the guitar in 2007, I've pored over _hundreds_ of guitar tabs, mostly from the internet. Almost all of the tabs I found at first were basically just ASCII art, like this:

```
e ----------------
B ---0-1-3-0------
G -2---------0-2--
D ----------------
A ----------------
E ----------------
```

Tabs are the most widely accessible way to learn music on the guitar because this format is simple to make and share. The six horizontal lines represent the strings of a guitar, with the highest line corresponding to the highest-pitched string; the numbers indicate where on the guitar's neck you should press the strings with your fretting hand; and the sequence of numbers from left to right indicates the order in which the notes on each string should be played. All you need to write tabs like these are a good ear, a text editor, and a `fixed-width font`.

However, as every purist guitar teacher will tell you, where text-based tabs shine in simplicity, they fail in terms of musical accuracy and expressiveness. Sure, you can type `10/12` on a string to represent a slide from the 10th fret to the 12th fret, but...

- Is the `10` a grace note? If so, is it played _on_ the beat or _before_ the beat?
- How long does each note last in relation to the others?
- How does the reader of the tab know precisely where and how quickly to _accelerando_ or _diminuendo_?
- What's the time signature? Is there a triplet feel?
- If the reader wants to improvise, what key signature is this section in?

All of these questions are answered by sheet music symbols I've been aware of since taking piano lessons as a kid. And they don't even account for guitar-specific techniques like tapping or harmonics. How can any and all of that be articulated with text alone?

### Guitar Pro = tabs with superpowers

<!-- TODO Optimize images -->

![Screenshot of Guitar Pro 7. The opened document shows the guitar solo for "Letter Experiment" by Periphery. The left sidebar shows numerous musical articulations, and the lower menu bar shows that several other tracks like vocals and drums have also been transcribed.]({{ config.url }}/{{ config.paths.images }}/guitar-pro-letter-experiment-solo.png 'A behemoth of a UI, but for good reason')

Without any question, the most helpful (and generally least inaccurate) tabs I've come across have been Guitar Pro tabs. Those files are made specifically for Guitar Pro, a tab viewer and editor that addresses the above issues _by way of_ and _in addition to_ these features:

- Tablature synchronized with Western musical notation
- Audio playback
- Ability to program instruments besides guitars, like pianos and drums, to play over a full backing track
- Adjustable metronome so you can play difficult sections at half speed
- Ability to export programmed instruments as MIDI files, to aid in writing music

Guitar Pro tabs are freely available on [Ultimate Guitar](https://www.ultimate-guitar.com/). [Songsterr](https://www.songsterr.com/) (the most popular tab site, last time I checked [*citation needed*]) provides an interactive environment to view and hear Ultimate Guitar's Guitar Pro files, but with only limited ability to edit them. Songsterr users can submit revisions to existing tabs in the form of Guitar Pro files.

Guitar Pro tabs are also the de facto format for many artists' official transcriptions for sale, including mind-bendingly technical guitar heroes of mine like [Animals as Leaders](https://www.animalsasleaders.org/the-joy-of-motion-guitar-tabs), [Periphery](https://www.sheethappenspublishing.com/artists/periphery), and [Arch Echo](https://www.sheethappenspublishing.com/shop/666/arch-echo-arch-echo-complete-guitar-transcription).

### I love transcription

Guitar Pro matters to me not just because it's massively expanded my ability to learn new songs and write my own&mdash;but also because transcribing songs with it is a huge reason why I'm a frontend developer at all.

As I got into more challenging/obscure music, plenty of tabs I found&mdash;including Guitar Pro tabs&mdash;had wrong notes or were straight up missing notes, especially during fast solos. Too many songs I wanted to learn just didn't have tabs on the internet at all. (For example, [who would want to tab out a hidden track 10 minutes into a song from a prog metal band's debut deathcore EP?](https://www.youtube.com/watch?v=QQTFFLfh1tE) 🙋🏽‍♂️)

In 2008 I began making my own tabs with Power Tab Editor, which is free, but not very feature-rich. When I was 13 I saw what Guitar Pro was capable of through a free trial, like somewhat realistic-sounding digital instruments, and determined that it was more than worth the terrifying \$60 price tag.

Since then I've created dozens of Guitar Pro tabs, 20 of which I've uploaded to Ultimate Guitar. Most are metalcore songs I loved as a teenager. One of the earliest is a [Power Tab of Trogdor](https://tabs.ultimate-guitar.com/tab/strong-bad/trogdor-power-705638). Over the years I've accumulated unfinished tabs for at least 70 songs that I'm waiting to share until I can get them _juuust_ right.

As of today, my 20 uploaded tabs have totaled over 90,000 views and 1,074 favorites. All 13 that have been rated ≥ 3 times average a 4-star rating or higher. I know that those numbers mean next to nothing in today's internet. I'm just happy that my teenage self surfaced things from rabbit holes that have helped others enjoy music on a deeper level.

#### But what does any of that have to do with frontend development?

Transcription is a meticulous process that takes hours and hours. It certainly speeds things up if I can find video footage of the original artists performing each song, but not by a lot. Despite the tedium, I find the activity to be very zen. And it's remarkably gratifying to work out an accurate transcription of even a single riff or lick, and save it for posterity. It's so much plain old nerdy fun that I started transcribing non-guitar parts too. While the act of transcribing songs I want to play has undeniably made me a more skilled guitarist, it's also made me more well-rounded musician by strengthening my appreciation for instruments I don't play, like drums.

If you're a web developer, maybe some of this sounds familiar:

- The steps of imagining a result, then typing some stuff into a computer to make it a reality.
- The immediate feedback between editing a file and noticing how it changes that result.
- Memorizing a bunch of keyboard shortcuts to make your life easier.

I find that making transcriptions in Guitar Pro engages **the same mental muscles** as creating websites with HTML, CSS, and JavaScript&mdash;whether tabbing out an existing song (like implementing a mockup) or writing something new (like making a webpage from scratch).

## Isn't this just reinventing the wheel?

Yes. Learning a highly marketable skill like React, along with how invested I am in the app the I'm cloning, are already sufficient reasons for me to want to do this. But there are other small reasons why making a web clone of an existing app might be a good idea. For instance, one Guitar Pro license will only let you install it on up to 5 different machines.

And there's totally a use case for a free browser-based tab editor. Imagine being able to just open a URL and quickly jot down a short melody or riff in your head, without having to install anything! (I've needed this in an office setting on more than one occasion.) [Noteflight](https://www.noteflight.com/) offers a comparable experience, but you can only input notes using staves, not tabs. The latter are far more intuitive for me.

## Conclusion

I've been taking a lot of notes on FretZone since starting 5 months ago, thinking I'd put all of what I learned into a single blog post. But because I'm using it to learn React from scratch, there are way too many problems and solutions to all fit together in one post. So this is going to be just the first post in a series.

### Current state

FretZone is minimally working! At the time of writing, there's no audio playback, no musical notation graphics, and no export options&mdash;but you _can_ write text-based tabs for any number of six-string guitars in standard tuning, and the app will keep track of the length of each measure. The only available time signature is 4/4, and notes can be dotted and/or rests.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Progress on <a href="https://twitter.com/fret_zone?ref_src=twsrc%5Etfw">@fret_zone</a>! Cloning <a href="https://twitter.com/ArobasMusic?ref_src=twsrc%5Etfw">@ArobasMusic</a> Guitar Pro 7 with HTML/CSS/JavaScript to teach myself React.<br><br>1. I’ll trace the toolbar icons as SVG later so emojis will do for now.<br>2. I&#39;m a happy CSS grid convert after avoiding it for too long!<a href="https://twitter.com/hashtag/webdev?src=hash&amp;ref_src=twsrc%5Etfw">#webdev</a> <a href="https://twitter.com/hashtag/webdevelopment?src=hash&amp;ref_src=twsrc%5Etfw">#webdevelopment</a> <a href="https://twitter.com/hashtag/thall?src=hash&amp;ref_src=twsrc%5Etfw">#thall</a> <a href="https://t.co/JOxo2dmbt5">pic.twitter.com/JOxo2dmbt5</a></p>&mdash; Andrew Aquino (@aqandrew) <a href="https://twitter.com/aqandrew/status/1285231182884438017?ref_src=twsrc%5Etfw">July 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

In the beginning, I'm trying to rely on as few external libraries as possible. This is so I can struggle a bit and understand the problems that these libraries are solving. However, using Redux for state management was a choice I made early on for 4 reasons:

1. Redux is listed in quite a few frontend job postings' desired skills.
2. It seemed like a simple way to allow multiple components to dispatch the same action.
3. Prop drilling for the `EditionPalette` (left sidebar) seems like it would get ugly quickly.
4. Redux's docs sold me on its promises of predictability/ease of debugging.

Though I'm open to ditching Redux entirely and just using vanilla React's `useState`/`useReducer` if possible.

Style-wise: While the [BEM class naming convention](http://getbem.com/introduction/) has made FretZone's CSS pretty easy to write, I'm leaning towards using `styled-components`, because I like the API and the fact that it removes the need for a CSS file separate from its component's JSX file.

### What's next

For now I don't plan to monetize FretZone since it's just a fun educational side project.

I may have bitten off more than I can chew, and I may not ever truly finish cloning Guitar Pro. As I'm digging through Guitar Pro's UI to replicate it, I'm unearthing features that I never even knew it had, like a modal dialog that determines the exact scale/mode of a selected sequence of notes!

![Screenshot of Guitar Pro 7. The opened document shows the guitar solo for "Red Sky Harbor" by Corelia. One of the final measures of the solo has been selected, and Guitar Pro has determined that these notes follow an F altered scale.]({{ config.url }}/{{ config.paths.images }}/guitar-pro-red-sky-harbor-solo-scale.png 'Absolute game changer')

But this nascent project, massive in scope as it is, has been loads of fun so far. And I've learned so much already! I definitely recommend the clone-your-favorite-app approach for anyone learning a new tool/framework. It's a rough work in progress and needs to be refactored in several places, but I've gotten many more interviews since starting this project, in a few of which I've been asked to explain some of its code.

I'm looking forward to sharing my progress on [FretZone](https://fret.zone) with you, along with helpful bits of JavaScript and React I'm picking up along the way! 🤘🏽

**While you're here:** If you know any guitarists and/or frontend developers who might be interested in following this project, please have them [shoot me an email](mailto:{{ config.author.email }}) or a [message on Twitter](https://twitter.com/{{ config.author.twitter }})! If I gather enough interest, I may publish a semiregular newsletter, or just anounce updates via [FretZone's Twitter account](https://twitter.com/fret_zone).
