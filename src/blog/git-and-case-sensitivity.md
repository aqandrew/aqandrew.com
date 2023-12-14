---
title: 'Git and Case Sensitivity'
date: '2020-11-04'
tags:
  - fret-zone
  - git
metaDesc: Ever wonder why Git doesn't quite get it when you change the capitalization of a folder/file name?
# TODO image
---

{{metaDesc}}

In case you don't want my life story, [here's the solution](#solution).

## Background

Imagine the following scenario:

> Me: Hey, check out this sweet side project I'm working on!
>
> You (potentially **not** a programmer): What is it?
>
> Me: It's a guitar tabs editor in your browser!
>
> You: Neato! Can I see it?
>
> Me: Sure! Just navigate to [https://github.com/dawneraq/fret-zone](https://github.com/dawneraq/fret-zone), clone the repository, run `yarn`, then `yarn develop`, then it'll run on your machine at [http://localhost:3000/](http://localhost:3000/). You're comfortable with the command line, right?

If I want to show a non-developer [my sweet side project](/{{ config.paths.blogdir }}/introducing-fretzone), I'm probably not going to get very far if I tell them to clone, build, and serve it themselves. For everyone's convenience, I knew early on that the app would have to be hosted somewhere.

### Netlify to the rescue

These past few months, Netlify has made itself known to me as an awesome hosting solution for frontend-focused web apps. You just point it at a Git repo you own, specify a build command (like `yarn build`) and a directory containing built files (like `build/`), then they host it at [https://whatever-url-you-want.netlify.app/](https://whatever-url-you-want.netlify.app/). Netlify also makes it easy to [deploy to a custom domain](https://docs.netlify.com/domains-https/custom-domains/)! (They're not paying me to say that. I just really like their platform.)

Having just read [a free chapter of swyx's Coding Career Handbook](https://www.learninpublic.org/v1-tactics-marketing-yourself.pdf), I was excited to do just that. I was ready make this hobby project-in-progress into part of my professional identity by showcasing it on a silly pun domain.

Because I initialized FretZone with `create-react-app`, Netlify already knew the proper build command, as well as the directory from which to deploy. Great! All I had to do was make sure the app could deploy successfully, then I could migrate from [https://fret-zone.netlify.app/](https://fret-zone.netlify.app/) to my shiny new domain [https://fret.zone/](https://fret.zone/). ✨

### But it failed to build

The app worked on my machine. [My Netlify build log](https://app.netlify.com/sites/fret-zone/deploys/5f11e25677ac78019c6c1f26) told a different story:

```
10:40:20 AM: $ yarn build
10:40:21 AM: yarn run v1.22.4
10:40:21 AM: $ react-scripts build
10:40:22 AM: Creating an optimized production build...
10:40:27 AM: Failed to compile.
10:40:27 AM:
10:40:27 AM: ./src/App.jsx
10:40:27 AM: Cannot find file './components/ToolBar/Zoom' in './src'.
10:40:27 AM: error Command failed with exit code 1.
10:40:27 AM: info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

"Cannot find file"? One of the folders in that file's path _used to be_ called `Toolbar`, but I'd recently pushed a commit that renamed it to `ToolBar` with a capital 'B'.

I double-checked the relevant import in `App.jsx`. Looked fine.

```jsx
// App.jsx

import Zoom from './components/ToolBar/Zoom';
```

I double-checked the path in my local filesystem. Looked fine.

![Screenshot from Visual Studio Code's file explorer clearly showing that `src/components/ToolBar/Zoom.jsx` is a valid path.](/{{ config.paths.images }}/git-casing-filetree.png)

I double-checked the error message. Looked fine.

```
10:40:27 AM: Cannot find file './components/ToolBar/Zoom' in './src'.
```

I triple- and quadruple-checked those three things again. Why was I being gaslighted like this?

### Netlify Support Guides to the rescue

Looking up 'netlify "cannot find file"' led me to [this support guide](https://community.netlify.com/t/support-guide-netlify-app-builds-locally-but-fails-on-deploy-case-sensitivity/10754).

> ...most people realize they are having a case issue when they try and build on Netlify, as the problem doesn’t occur locally. This almost always means that the file(s) have been committed to Git and pushed to a provider such as GitHub.

So it was a case sensitivity issue? No way!

I flew into a nerd rage. The `ToolBar` folder definitely had the correct name. It's right there in the file explorer screenshot above. Hadn't that change been pushed in the commit I mentioned earlier?

![Screenshot from GitHub showing the summary of a simple renaming commit I'd recently made. The inserted/deleted lines show that any imports referencing the folder `Toolbar` (with a lowercase 'b') now reference `Toolbar` (with a capital 'B'.)](/{{ config.paths.images }}/git-casing-commit-detail-1.png)

Apparently not. What do you mean "1 changed file"? The changelog only shows changes to import statements in that one file. I changed the directory name! All of the files within the `ToolBar` folder should have had their names changed too.

If that's not the case...what does the path look like in the GitHub repo?

![Screenshot from GitHub showing the file in question, `Zoom.jsx`. Interestingly, the parent folder name on GitHub is `Toolbar` with a lowercase 'b'.)](/{{ config.paths.images }}/git-casing-commit-detail-2.png)

Interesting!

### What's going on here?

While my commit did register that the paths in `App.jsx`'s component imports changed, it didn't register that the file paths themselves changed.

macOS, my local development environment, is **case-insensitive**. This is why `ls ~/Documents` and `ls ~/documents` output the same thing. Git is case-insensitive too&mdash;the Netlify support guide I found also had this to say:

> Simply renaming the file and re-committing and pushing it does not generally work because **Git’s default setting is to ignore case**, and so those changes aren’t always registered. 😕

Changing the capitalization of a folder or file name that's under version control is a little trickier than simply renaming it.

I tend to rename my files by right-clicking in Visual Studio Code's file explorer. However, I've noticed that Git's understanding of a file renamed this way is as follows:

1. The original file has been deleted.
2. A new file with the original file's contents has been added under a different name.

![Screenshot from Visual Studio Code's Source Control sidebar. The changes detected are that the file `about.md` has been deleted, and the file `aboot.md` has been added.](/{{ config.paths.images }}/git-casing-naive-rename-1.png)

Git doesn't recognize that a file has been renamed until both of those changes have been staged.

![Screenshot from Visual Studio Code's Source Control sidebar. The change detected, which has been staged, is that some file was renamed to `aboot.md`.](/{{ config.paths.images }}/git-casing-naive-rename-2.png)

## Solution

The tracked file or folder you want to recapitalize has to be explicitly renamed using a Git command. `git mv` works the same as [`mv`](https://dashdash.io/1/mv), except it informs Git that a file or folder has been renamed by immediately staging the change.

### For files

The approach in [the Stack Overflow answer](https://stackoverflow.com/questions/17683458/how-do-i-commit-case-sensitive-only-filename-changes-in-git) linked in the Netlify support guide gave me an invalid argument error. This command used just once works for renaming individual files, but it does **not** work for folders.

```bash
➜  components git:(master) ✗ git mv -f Toolbar ToolBar
fatal: renaming 'src/components/Toolbar' failed: Invalid argument
```

(If you're changing the capitalization of a single file, the `-f` flag isn't necessary.)

### For folders

I ended up using [this Stack Overflow answer](https://stackoverflow.com/a/11183844/6432160)'s approach instead.

```bash
➜  components git:(master) git mv Toolbar tmp
➜  components git:(master) ✗ git mv tmp ToolBar
```

## Further reading

- [Netlify Support Guide - Netlify app builds locally but fails on deploy (case sensitivity)](https://community.netlify.com/t/support-guide-netlify-app-builds-locally-but-fails-on-deploy-case-sensitivity/10754)
- [Stack Overflow - Configuring Git to ignore/acknowledge letter case](https://stackoverflow.com/a/17688308/6432160)
- [Stack Overflow - What's the purpose of git-mv?](https://stackoverflow.com/questions/1094269/whats-the-purpose-of-git-mv/19330589)
