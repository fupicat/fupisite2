---
title: A way too long post about my Ludum Dare experience
description: Old post I made in 15/5/2020 when I took part in Ludum Dare 46.
posted: 1589511600000
icon: /img/HeartyDose.png
tags: "#jam #game #ludum-dare #old"
---
Hello! I'm writing this post to tell you about my experience at Ludum Dare, the biggest game jam on the internet. The voting phase ended two days ago and I am very happy because I managed to make a very polished game in practically just one day!

<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/2_DaXlkwK4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is it

For those not familiar with [Ludum Dare](https://ldjam.com/), it is a twice-a-year event that anyone can join, and the goal of the competition is to create a videogame in 72 hours, based on a theme chosen by the community. The jam happens in four steps:

### Choice of theme

This step takes place one week before the competition. First, each participant can suggest three themes (for example, the theme for Ludum Dare 46 was "Keep it alive"). After the time to submit themes is up, the first round of voting takes place (Theme Slaughter), where we have to decide for each of the themes individually whether it is a good theme or not.

![](https://1.bp.blogspot.com/-8WX-_kMhwX8/Xr75RH73O7I/AAAAAAAAEIE/7ES6a67IZlINgO-DYklSruFTzu60vQ1yACK4BGAsYHg/13x6oihxmmry.png)

Usually there are over 5000 themes, but in round 2, where the theme voting really starts, we are presented with only about 15 themes at a time, and we can decide if it's a good theme, a bad theme, or if we are indifferent.

![](https://1.bp.blogspot.com/-SSBa3nkYUgY/Xr75jHBbsiI/AAAAAAAAEIY/hQiaMm1VExAsiLmhkH15pUV2dhF13-TOACK4BGAsYHg/s320/Ds7sEE9WwAIn6Ng.jpg)

These rounds of 15 themes at a time are repeated 3 times, once a day until the day the theme is announced, and the competition begins immediately.

### Jam

There are two competition categories: Jam and Compo. You can enter either one, but they have separate rules. Jam lasts 72 hours and you can use any engine, codebase, template, graphics, music, and other assets that you are allowed to use. The Compo lasts 48 hours, and you cannot use graphics, audio or other assets that were not made during the competition, and you must share the source code. You can still use any engine and codebase, but Compo competitors tend to be stricter in their voting. If someone notices that you just edited a template and sent it to Compo, your game will not do very well.

When you finish your game, you create a page on the Ludum Dare website and publish your game somewhere else to distribute it (Itch, Gamejolt, Google Drive...) and post the link on your game page with a description and pictures.

### Feedback

After dev time is up, it's play and rate time. Whether you participated in the Compo or the Jam, everyone can vote on everyone else's games. You play the game and then rate it from 0 to 5 stars in the categories General, Fun, Innovation, Theme, Graphics, Audio, Humor, and Mood (Mood is made for horror games, or other such games that are made to cause a strong emotional response).

Besides rating, it is also nice to leave comments to give the creator an idea of what they should improve, and thus gain more views on your own game as well. The more comments you give, the more the site will recommend your game, and you need at least 20 ratings to qualify.

### The End

When feedback time is up (from one to two weeks), you'll see where your game stands compared to the others, and how you did in each of the voting categories! There is no prize for the winners.

## Ludum Dare 45

For my first Ludum Dare, the theme was "Start with nothing", so I created a game called [God Complex](https://ldjam.com/events/ludum-dare/45/god-complex). In this game you are a god who must gather elements, build a universe, gain devotees, and destroy everything in the end by merging two black holes. There were about 5000 participants and I did very well! Especially in the Theme category. In the end, I thought I created a very interesting but extremely unbalanced game.

![](https://1.bp.blogspot.com/-8S0tA_WiMaQ/Xr77C78rR8I/AAAAAAAAEJE/9RKvyUq8UxExjF99khoWZnisIsM1ldvLQCK4BGAsYHg/w400-h234/25f73.png)

I vowed that next time I would make a much simpler game. My first game was too ambitious. I managed to create a very simple system to add more elements and different levels of rarity, but the balancing was all wrong. It took ages for things to happen, and the prices in the store where you buy elements made no sense, as dirt became very valuable near the end of the game but was still the cheapest thing to buy. I also realized that the only useful planet to create was the dirt planet, since it gave you money. The stone planet only made more junk appear on the screen and the gaseous planet only needed to be made once, and made dirt even rarer, so it was a straight-up downgrade.

I don't want to have to deal with this balance problem, so I am not going to update this game or add more elements. That's also why I decided that, in the next game jam, I would simplify the concept a lot more and make something super simple.

## Ludum Dare 46

This time, the theme was "Keep it alive". I already had it in my head that I wanted to make a highscore based game where you had to multitask quickly using only the mouse. My first idea was a doctor simulator, where you'd be in an ambulance and had to keep a patient alive as long as possible. It would be a cartoonish game, and you would have to use a defibrillator, an IV, and do chest compressions in a certain rhythm to keep them alive. I didn't go with that, but it was my first idea.

Then I thought about making a game where you have to inflate a balloon as much as possible and avoid spikes falling into it. I programmed the balloon part and even made graphics, but, in the end, I couldn't think of how the challenge of the game would work.

My last idea was to make one of those games where you have a planet in the middle of the screen and you must rotate around it to defend it from projectiles, but instead of defending a planet, you would defend a heart from invading cells by controlling two defending cells using the mouse. One would follow the mouse, the other would follow the opposite position of the mouse, and each defender cell could only kill invading cells of the same color as itself.

In the first four hours I had already implemented the basis of the whole game:

<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/amcFTXCqxXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Then it was already 1 AM, and I had to go to sleep. The next day, I didn't have much to do, so the first thing I added were better graphics:

<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/Q8Qf0zAogx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Then I added a menu to access two game modes. Since it would be super easy to implement local multiplayer, I added that too. One player uses WASD and the other uses IJKL.

So I finished the game on the second day of the jam and posted my game under the name [Hearty Dose](https://ldjam.com/events/ludum-dare/46/hearty-dose).

When the results came out, I definitely didn't do as well as last year, but also, this time there were 2x as many games submitted (because everyone was home), so there were a lot more places I could stand and, of course, a lot more competitors who were better than me. ;-; But I was glad I did well in the Innovation category, because I had never really seen a game that controlled like that!

In the end, the game I made turned out to be kind of uninteresting. It is just a little high score arcade game without much variety, that you play for 5 minutes and forget about. As unbalanced as my previous Ludum Dare game was, at least it was ambitious and more memorable.

## Next jam

The next jam I'm going to do is the [GMTK Game Jam](https://itch.io/jam/gmtk-2020), which is a competition created by a youtuber I used to watch called Game Maker's Toolkit, who talks about game design. I already participated last year with the game [Nowhere but Forward](https://itch.io/jam/gmtk-2019/rate/460975), and this year I will again, if everything goes well! The concept is pretty much the same as Ludum Dare, except that the theme is chosen only by the host, and there are a lot less voting categories. Since this jam is more game design focused than presentation focused, the categories are Theme, Originality, and Design. Your final grade is an average of all the grades you received. So in this jam, the most important thing is to have a well structured game, rather than a pretty or flashy game (or at least that's how it should be).

My idea for the next jam is something like Nowhere but Forward, a game with a beginning, middle and end, instead of being infinite like Hearty Dose. I'm thinking of doing something that involves level design, because I realized that most of the games I liked from this jam had levels, or some other kind of linear progression.

## My favorite games

Here are some recommendations as the best games I played this jam:

### My Pet's Dungeon

![](https://1.bp.blogspot.com/-h4iN6oFpexc/Xr8aVkWEXSI/AAAAAAAAEJo/p7Ta8rJKLkYsneGgBaUxJpMiPdGAACfqwCK4BGAsYHg/2b89f.png)

<a class="text-center" href="https://ldjam.com/events/ludum-dare/46/my-pets-dungeon">Play it!</a>

This was my favorite game this jam, very creative! It's a mix between Tamagotchi and an RPG. You have to take care of a pet that loves to go into caves and kill monsters, but you can't let it die. In the dungeon, he attacks monters automatically, and you have to decide when to run away, but if your pet is low on happiness he will attack slower and may refuse to run away! You need to feed and give medicine to your pet, but some items make your pet sad or damage him, so you have to manage your items well until you reach the end.

### Son of a Liche

![](https://1.bp.blogspot.com/-uGhY0Laz3Qk/Xr8b2VHGyKI/AAAAAAAAEKE/XhQAeBLmjCULK_WkpQhBo4abPHvQ69X2wCK4BGAsYHg/2dac9.png)

<a class="text-center" href="https://ldjam.com/events/ludum-dare/46/son-of-a-liche">Play it!</a>

You are a dead wizard and you must get your skeleton to a ritual to resurrect you. Unfortunately the skeleton bumbles around like an idiot so you have to help him by creating paths and throwing explosions at enemies so he can cross safely. It was the most innovative game I played at the jam.

### Custom Critter Fighter

![](https://1.bp.blogspot.com/-KOD8uXjHSI4/Xr8c8T2FFgI/AAAAAAAAEKc/rmrvYCH_LFgwBQvL69vFInwr-z47CRWHACK4BGAsYHg/s320/32909.png)

<a class="text-center" href="https://ldjam.com/events/ludum-dare/46/custom-creature-fighter">Play it!</a>

A Galaga style game where you control your creature through randomly generated levels and must survive until the end. At the end of the level, you get points that you can spend by adding new parts to your critter. Some levels give you more points, others give you less points but give you food (which you need to enter levels), and there are many parts to add and various kinds of upgrades to your critter. Even though it is not super original, it is a super stylish game. The graphics and music complement each other expertly, and it's very satisfying to complete your alien and shoot everything.

Thank you for reading!