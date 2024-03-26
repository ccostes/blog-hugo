---
date: 2018-01-15
layout: post
title: "Jekyll Image Organization"
draft: false
---

I recently started writing blog posts again and had a dilemma. Jekyll provides a great framework for easily generating a site, but one area it doesn't seem to have an opinion on is what to do with images that go along with posts. Putting them all in a single 'images' folder seemed like it would get messy over time, but I didn't know of any established best-practice that would be better.

After some googling I came across a [post on Eduardo Bouças' blog](https://eduardoboucas.com/blog/2014/12/07/including-and-managing-images-in-jekyll.html) with a really elegant solution. <!--more-->It handles inserting the HTML boilerplate and even supports image captions using `<figure>` and `<figcaption>` tags. The trick is a clever file in the _includes folder that takes a line like {% raw %}{% include image.html name="img.jpg" caption="Image Caption!" %} {% endraw %} and maps it to the corresponding image. Images are stored in the assets folder, with a subfolder for each post to keep things organized.

Eduardo's post is from 2014, and it looks like he's made some enhancements to the original snippet to support video files as well as extra image properties like width and alt-text. The updated file, along with the corresponding CSS for the figure styling, are in the gists below.

Thanks to Eduardo for this great solution!

<script src="https://gist.github.com/ccostes/26a7e1ae77d065cc91ec98ece7178efb.js"></script>

<script src="https://gist.github.com/ccostes/9ab7864429442ae4377517c7dbd251a8.js"></script>