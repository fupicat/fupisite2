---
layout: blog
slug: boas-vindas-novo-site
title: Welcome to my new website!!
description: Why is this my fifth personal website?
posted: "1648071419173"
icon: /img/uploads/novo-site.png
cover: /img/uploads/uhu.png
tags: "#web #announcement #dev #html #css #js"
---
Welcome to my new site! WOOOOOOO

![Fupi and Fupicat celebrating](/img/uploads/uhu.png)

This website is a project I've been working on since June 2021; I hope you like it!

In case you don't know me, and fell into this site by typing random things into Google, I'm Fupi, internet *thing* maker. I make games, music, videos, tools, art, and even websites. In fact, this is already my fifth personal website.

*For the love of God, **fifth**?!?!?!?!"* - Yes! But... with good reason.

## Why have I had so many sites?

Since I was a child, I wanted to have a website, just because. I like to have things. I had already created several random blogs, but nothing worthwhile.

Then one day I was digging around and discovered Wix, a platform that lets you create sites visually by dragging elements around. I created 3 websites on it in the course of a few years, trying to become better and better...

But I always knew that real websites were not made like this (no offense to Wix). So, I wanted to dig deeper and make a "real" site, actually coding it.

## How does a website work?

If you don't know, websites are basically made with 3 technologies:

**[HTML](https://en.wikipedia.org/wiki/HTML):** Code to put elements on your site. *E.g. text, titles, images, buttons.*

**[CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets):** Code for changing colors, shapes and styles of elements. *E.g. site colors, size of images, fonts, animations on mouse hover*

**[JS](https://en.wikipedia.org/wiki/JavaScript):** Code to create extra interactivity on your site. *Ex: Make a button to switch the site to dark mode, create a language selector for content, create a comment box that sends the comment to a database.*

![Illustration of the process of adding HTML, CSS and JS to a website.](/img/uploads/htmlcssjs.png)

Underneath the scenes, all web sites run under these 3 technologies. Put them together, you have enough flexibility to do whatever you want, and you have a lot of typing to do as well.

I started learning this stuff by watching a very dated tutorial on how to make a simple website with these code languages. The product of this tutorial... was my previous website.

Yep, straight out of a tutorial.

Sure, I changed a lot of things in the design, but my knowledge after that got a bit stale, and the site became more and more tiresome to use.

## The flaws of my old site

* Adding new projects was a pain. I had to copy and paste the button code, change the texts, then copy and paste a whole new page and write the content right into the HTML code.
* Since I had dozens of duplicate pages and buttons on the site, making any design changes was difficult, as I had many lines and files to change.

Because of this, my site continued to look like a tutorial site. I even made some automations here and there, like on my projects page, to make it easier to add new buttons, but it still wasn't what I wanted.

## How to solve these problems?

As I found out, this is by far the most common problem with having a website! Making adding content to a page and design changes easier. So there are several solutions to this:

* Server: The most common method on the old internet. Save the content of the site in a database and leave a computer (or more) on 24 hours a day to receive the users that enter your site, taking the content from the database, creating the HTML file on the fly, and showing it to the user. This method is good for sites with content in a database that changes very fast, such as YouTube, which receives several new videos per second, and the site needs to be always up to date.
* Pure Javascript: Save the site content in files on the PC, create a site with ready-made pages and design, but no content, and then use Javascript to create the necessary elements one by one and add the content of the files to them automatically. The problem with this method is that creating HTML elements using Javascript is extremely tedious and results in long and often unintelligible code.
* Framework: Use an extension to Javascript called a "framework" to create the layout of the site in a component-based way, which can be reused and customized with whatever content you want.

I have considered and even tried all these methods. But what I used for this site was a framework, because there are many services that can host projects made with frameworks for free! There are many different frameworks, each with their own way of writing and dealing with components. I used [Vue](https://vuejs.org/) for this site, but any one you choose will have very similar concepts.

Since I am using a framework, I can split up my most repetitive site components, such as the buttons, the design pages and the categories, each into their own file. So if I want to change the button design, I just change that one file, and all the buttons will change at the same time!

The other part of the solution is to separate the content from the page layout. Instead of writing the instructions, trivia, and the game all directly in an HTML file, I separated them into ordinary text files, which are much more readable. The moment the user accesses a project page, or a blog, the site just accesses that file, grabs the content he needs and adds it to the page!

## To sum up...

Anyway, if you didn't understand anything or don't care, just know that now it is much easier to edit the site and add projects.

Ok let's see what's new on the site.

## New things

**New projects!**  New and old projects that were not in the previous site.

![Games](/img/uploads/jogos.png)

**Quotations!** Random crazy lines on the home page. [Send yours!](/about#contact)

Quantity is better than quality, for those who are bored enough.](/img/uploads/quote.png)

**Fanarts!** A section on the homepage for my favorite fanarts. If you've made some, [submit yours!](/about#contact)

![Fanart section](/img/uploads/fanarts.png)

**Blog!** My blog is back, with some tutorials. I want to do more tutorials and posts in the future!

![Blog](/img/uploads/blog.png)

**Songs!** Finally, all my songs presentable in one place.

![Songs](/img/uploads/musicas.png)

Content Filter: Some things on this site may not be appropriate for all ages, including fantasy violence and swearing. All such content does not appear by default. If you are aware and want to see potentially inappropriate projects, turn off the "Content Filter" by clicking the button in the middle of the site footer. Disabling the content filter also gives you access to the comment sections of the projects, but keep in mind that moderation will be quite liberal.

## In Conclusion

Thank you so much for reading this post, and showing up at the launch of my new site! I can't believe it's finally up. Anyway, I hope you enjoy it! See you next time!