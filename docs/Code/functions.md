---
id: functions
title: Functions
slug: functions
---

:::caution Unfinished Page
This page of the documentation isn't finished. We'll get to it eventually, but if you want to help you can use the "Edit this page" link at the bottom of the page!
:::

This is a link to [another document.](doc1.md) This is a link to an [external page.](http://www.example.com/)

## What is a function?

A function is a group of code that is put together and given a name so that it can be reused very easily. 

## Simple example

This function will say "Hello World!" to everyone when you run it in Minecraft.

```javascript
function hello() {
  console.log("Hello World!");
}
```

## What can functions do?

Functions are for blah blah

## More examples

Here, Huyang uses the `build_pillar()` function to avoid repeating the code needed to build a tower of blocks.

```javascript
var Huyang = new vMod.Drone()

function build_wall() {
  for (var j = 0; j < 7; j++) {
    build_pillar()
  }
}

function build_pillar() {
  for (var k = 0; k < 3; k++) {
    Huyang.setblock('~ ~ ~', 'yellow_wool')
    Huyang.moveUp(1)
  }
  Huyang.moveDown(3)
  Huyang.moveForwards(1)
}
```
