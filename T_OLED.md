# OLED Display Tutorial

<!----T_OLED TUTORIAL--------------------------------Complete----
------Display text strings on an OLED dissplay-------------------
----------------------------------------------------------------->

## Step 1 Using the OLED @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_OLED/OLED_Banner.gif)
Displaying information using the OLED Display
-------------------------------------------

In this tutorial, we will connect the OLED display to the GPIO shield using the I2C connector and display a text message. In coding, a line of text is called a 'string'.
## Step 2 Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts:<br>
1x micro:bit, 1x GPIO shield, 1x OLED display<br><br>
![Parts Needed: 1x micro:bit, 1x GPIO shield, 1x OLED display](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_OLED/IoT_OLED_Parts_List.png)
<br>

## Step 3 Connect Up!
Physical connections
--------------------
1. Plug the micro:bit into the GPIO shield.
2. The OLED display is plugged directly into the I2C interface (middle black plug) on the GPIO shield. <br>
**Note: The I2C interface has a 'G' pin - ensure that the 'G' pin on the OLED is connected to it, by turning the OLED over and looking at the labels next to each of the pins. Look for 'G,V,CL,SD'.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_OLED/OLED_Connections.png)

## Step 4 Prepare to Code!
Using MakeCode
------------------------------
The software we are using is called MakeCode. In these tutorials, if you see coloured words such as ``||basic: forever||``, 
this is a command that can be found and dragged out of a menu. The command colour corresponds with the menu colour. 
The commands click together like a jigsaw. 
If you need to delete blocks, dragging them to the menu bar will cause a 'bin' to appear. 
You can delete single blocks or groups of blocks, but make sure that you leave 
a ``||basic: forever||`` block and a ``||basic: on start||`` block on the work space.
![Image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Delete_blocks.png)

## Step 5 Add the Extension @unplugged
Coding: Add the Smart Science Extension
----------------------------------------
An extension is code that is supplied by a developer to help 'extend' the functionality of the MakeCode app. Extensions add extra blocks to the block menu and only need to be added once. 
<br>The blocks for this tutorial are already present in the menu, however, if you need to add an extension in your own project you will have to do the following:
1. Go to the ``||Extensions||`` menu and search for the Environment-and-Science-iot extension. 
2. Click the Environment-and-Science-iot extension to load it. New menu items will now appear, giving access to the ``||Extensions:Octopus||`` sensors.
![Add the extension](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Add_Extension.gif)

## Step 6 Initialise the OLED Display
Coding: Initialise the OLED display
--------------------------
Before it can be used, the OLED needs to be initialised. In other words, the software needs to be told that it is there.<br>
1. Go to the ``||OLED||`` menu and drag the ``||OLED: Initialise||`` block into the ``||Basic:Start||`` block.

```blocks
OLED.init(128, 64)
```

## Step 7 Display Text
Coding: Displaying text on the micro:bit
----------------------------------------
In coding, a line of text is called a string. Strings can contain a numerical digits, but don't have a value as a number. Here we will display a string on the OLED using a 'Show String' command.
1. In the Forever block, go to the ``||OLED||`` menu and drag a ``||OLED:Show String||`` block into it. 
2. Type 'Hello World' into the place holder. This message can be changed at any time.

```blocks
OLED.init(128, 64)
basic.forever(function () {
    OLED.writeStringNewLine("Hello World")
})
```
## Step 8 Test It
Test it! Debug it!
------------------
Time to test your code. Download the code to the micro: bit and try it out. Observe what happens.<br>
How could you integrate the OLED into a project to output information gained from other sensors?<br><br>

Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>
