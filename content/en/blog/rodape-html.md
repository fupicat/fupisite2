---
title: How to make an HTML footer
description: How to make an HTML footer that sticks to the bottom of the window as it should!
posted: 1637437784270
icon: /img/SiteIcon.png
tags: "#web #dev #tutorial #html #css"
---
## The problem

If you've ever tried to make a website using HTML you must have encountered this problem: you make a nice header and a footer, and then THIS happens:

![](/img/blog/rodape-html/RodapeRuim.png)

Your website can't reach the bottom of the window and the footer is floating.

I'll use this barebones website for the tutorial: https://codepen.io/fupicat/pen/QWMPjJr - **Click the link to follow along!!!**

## The process

The first thing I tried to fix this was just to specify a minimum height for the ``section`` element. I'm gonna use the size measure ```vh``` to tell it the percentage of screen height that I want the page to be:

```css{3}[main.css]
section {
  margin: 0rem 6rem;
  min-height: 73.5vh;
}
```

(to find the exact value of 73.5% I just kept testing larger values until I could make the scroll bar disappear)

That worked, but there's one problem: it only works on my screen size. If I zoom out, the scroll bar appears again. Someone with a larger screen would still see my footer floating a little bit, which is completely unacceptable.

![](/img/blog/rodape-html/RodapeMedio.png)

## The solution

Therefore, a more elegant and practical way to solve this problem is to use a flexbox - a resizable box that automatically distributes the elements inside it according to its own size. I am going to turn the entire body of the document into a flexbox and change its height to ```100vh``` so that it occupies 100% of the screen height:

```css{2-4}[main.css]
body {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
```

Now I'll just check the styles of the ```section``` element and change its height to ```100%```. This will cause the page to expand and take up as much space as possible in the flexbox, while respecting the header and footer's own space:

```css{3}[main.css]
section {
  margin: 0rem 6rem;
  height: 100%;
}
```

That's it! Now you can zoom in and out as much as you want, add any content to the page, and the footer will still stick to the bottom of the window.

![](/img/blog/rodape-html/RodapeBom.png)

## The summary

The final CSS you need looks like this (change ```section``` to whatever element you want to expand):

```css{}[main.css]
body {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

section {
  margin: 0rem 6rem;
  height: 100%;
}
```

See the complete project in action here: https://codepen.io/fupicat/pen/rNzbNxr