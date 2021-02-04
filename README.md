# vMod

**vMod** is the open source library behind the [**vanillamod.com**](https://www.vanillamod.com/) website. **vMod** translates JavaScript into Minecraft commands (like `/gamemode creative`). The result is the practicality of a real programming language, with the features and compatibility of vanilla Minecraft. **vMod** only works for Minecraft Java Edition.

This repository holds the [documentation](https://meta.vanillamod.com/docs/), transpiler, and code editor used on the [**vanillamod.com**](https://www.vanillamod.com/) website. There is also a live playground for the transpiler and editor: https://meta.vanillamod.com/playground

Talk with the community and the TechLX team on the [VanillaMod Discord Server](https://discord.gg/WPMCMjy)!

## What does vMod do?

This is best illustrated with an example. Here is some JavaScript:

```javascript
// Counts down from 10 to liftoff!

function countdown() {
  console.log("Initiating countdown sequence!")
  for (let counter = 10; counter > 0; counter--) {
    console.log(counter, "seconds remaining")
  }
  console.log("Liftoff!")
}
```

vMod will parse this JavaScript code and turn it into a datapack with several `.mcfunction` files. Expand the section below to see the files that would be generated by the above code, with comments describing where each line comes from.

<details>
  <summary>Click to expand!</summary>
  
  #### The body of `countdown()`

  ```mcfunction 
  # File - ./PACK_NAME/data/v_mod_playground/functions/countdown/main.mcfunction

  # First console.log
  tellraw @p ["","Initiating countdown sequence!"," "]
  # Initialize the "counter" variable
  function v_mod_playground:countdown/line0005_for-loop/init
  # Check the for loop condition (counter > 0)
  execute store success score @s vMod_LastSuccess if score @e[tag=vMod-v_mod_playground-var-counter-line-5-column-7,limit=1] vMod_Variable matches 1..
  # If the condition passes, run the body of the for loop
  execute if entity @s[scores={vMod_LastSuccess=1..}] run function v_mod_playground:countdown/line0005_for-loop/body
  # Delete the variable "counter" created by the for loop
  kill @e[tag=v_mod_playground.countdown.line0005_for-loop-depth-1]
  # Last console.log
  tellraw @p ["","Liftoff!"," "]
  ```

  #### Initializing the variable `counter`

  ```mcfunction
  # File - ./PACK_NAME/data/v_mod_playground/functions/countdown/line0005_for-loop/init.mcfunction

  # Create an entity to hold the value of "counter"
  summon minecraft:area_effect_cloud ~ ~ ~ {CustomName:"\"int-counter\"",NoGravity:1b,Duration:2147483647,Tags:["vMod-v_mod_playground","v_mod_playground.countdown.line0005_for-loop-depth-1","vMod-v_mod_playground-var-counter-line-5-column-7"]}
  # Set "counter" to 10
  scoreboard players set @e[tag=vMod-v_mod_playground-var-counter-line-5-column-7] vMod_Variable 10
  ```

  #### The body of the for loop

  ```mcfunction
  # File - ./PACK_NAME/data/v_mod_playground/functions/countdown/line0005_for-loop/body.mcfunction

  # Log the value of "counter" followed by the string "seconds remaining"
  tellraw @p ["",{"score":{"name":"@e[tag=vMod-v_mod_playground-var-counter-line-5-column-7]","objective":"vMod_Variable"}}," ","seconds remaining"," "]
  # Subtract 1 from the value of "counter" (as specified in the for loop)
  scoreboard players remove @e[tag=vMod-v_mod_playground-var-counter-line-5-column-7] vMod_Variable 1
  # Check the for loop condition (counter > 0)
  execute store success score @s vMod_LastSuccess if score @e[tag=vMod-v_mod_playground-var-counter-line-5-column-7,limit=1] vMod_Variable matches 1..
  # If the condition passes, run the body of the for loop
  execute if entity @s[scores={vMod_LastSuccess=1..}] run function v_mod_playground:countdown/line0005_for-loop/body
  ```
</details>

## Contributing:

Download the repo then

```console
yarn install
yarn start
```

`yarn install` downloads the required packages, and `yarn start` initiates a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.
