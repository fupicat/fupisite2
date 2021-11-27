---
title: Old Flash game audio
description: How to compress a song so that it sounds like it came from the internet of the 2000s.
posted: 1637971790112
icon: /img/icons/flash-lixo.png
tags: "#audio #music #tutorial"
---
## The problem

If you grew up playing Flash games you may have heard this song:

<vid-yt url="https://www.youtube.com/watch?v=8x8SQSgA2Do"></vid-yt>

It's the song from the classic *The World's Hardest Game*, a true hit in computer classes around the world. Just listening to that song surely brings back many memories, and this is a feeling shared by many others who lived through that same era of gaming! Seems like many zoomers have some sort of bizarre obsession with this style of electronic acid music that sounds like it's being played through the speakers of a CRT PC. Nostalgia is a strange beast.

If you have never heard the original, uncompressed version of the song, here it is:

<vid-yt url="https://www.youtube.com/watch?v=T1xZBHetmGI"></vid-yt>

It's like cleaning 30 years of wax out your ear.

This got me thinking: why does this happen? Why did old Flash games have this iconic sound? And how can I replicate this sound for nostalgia's sake?

## The process

I think the reason why this happens is pretty obvious: for the time, Flash games and animations were super heavy. All optimization was welcome, and audio files were especially problematic. In order to encourage light downloads, to make the program more accessible, and not force the user to compress the audio files themselves, the program did this automatically by default. This also explains why so many games had these compression artifacts: the app's default behavior was to compress the audio to *absurd* bitrates. (And apparently [it still is??](https://community.adobe.com/t5/animate-discussions/sound-quality/td-p/10213942) Wtf Adobe)

To replicate this effect, the first thing I needed to do was just some research. To no one's surprise, there's not a lot of documentation on exactly what settings Flash used to make its audio so static-y. So I had to download an old Flash version (Macromedia Flash MX 2004) and try not to catch a virus on the way.

## The solution

![](/img/blog/comprimir-audio-flash/flashui.png)

After having a bout of nostalgia seeing these old templates I created a new document. All I wanted was to see what audio settings the program used, and I quickly found it:

![](/img/blog/comprimir-audio-flash/achei.png)

I decided to test it by putting the music from the Hardest Game, [which I downloaded from Newgrounds](https://www.newgrounds.com/audio/listen/94726), into the project and exporting it as an SWF file. Found out that I needed to click "Override sound settings" first. The result was unexpected....... I heard a crappy compressed version of the song, like in the game, just the way I wanted! Who woulda thunk?

Maybe it sounds obvious but I really didn't expect this to work first try.

Cool, we have an SWF file with a compressed song inside. Now, how do we get the file out so we can use it? As I understand it, you can't open SWF files using Flash MX 2004, it can't do decompilation, so another program is needed. For that, I used [JPEXS Free Flash Decompiler](https://github.com/jindrapetrik/jpexs-decompiler). This program lets you see and extract all the contents of an SWF file.

Easy then, just drag the SWF file into the app and find the sound in the *Sounds* folder. After selecting it, I just click *Export Selection* and save it wherever I want.

![](/img/blog/comprimir-audio-flash/som.png)

## The summary

To compress a sound to death, you just need to:

1. Download an old version of Flash.
2. Open the program and create a new document.
3. Go to *File > Import > Import to Library...* and import your music. Drag it from the *Library* to your scene.
4. Go to *File > Export > Export Movie...* and export your movie as an SWF file.
5. Download [JPEXS Free Flash Decompiler](https://github.com/jindrapetrik/jpexs-decompiler).
6. Open the program and drag your SWF file into it.
7. Open the *sounds* folder and select the *DefineSound (1)* file.
8. Click *Export selection* and choose a folder to save it in.

At the end of this whole process you will have a super compressed, old Flash game style song.

## The alternative

There's also another way in which you can get a *similar* effect... just not the same, which involves using an online converter:

1. Go to [this online audio file converter](https://audio.online-convert.com/convert-to-mp3).
2. Drag your music into that big green area:

![](/img/blog/comprimir-audio-flash/arraste.png)

3. Scroll down and you'll see some options. Change the bitrate to 24 kbps and the frequency to 11025 Hz. Why 24 kbps and not 16, like Flash uses? Idk, this converter must use a different compression algorithm than Flash, all I know is that if you choose 16 kbps, it sounds like hot garbage. Trust me and choose 24 kbps:

![](/img/blog/comprimir-audio-flash/mude.png)

4. Click on the *Start!* button:

![](/img/blog/comprimir-audio-flash/start.png)

When the conversion is finished, your music should start downloading immediately.