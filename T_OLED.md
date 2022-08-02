# T_OLED Tutorial - Simple Text Display

<!---------------------------------------------------------------
------------------------- OLED TUTORIAL--------INComplete----
----------------------------------------------------------------->

## Step 1 Using the OLED @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/EarthEd_Horizontal_Logo.png)
Displaying information using the OLED Display
-------------------------------------------

In the first part of this tutorial, we will connect the OLED display to the iot:bit and display a simple 'string'.
## Step 2 Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts:<br>
1x micro:bit, 1x iot:bit sheild, 1x OLED display<br><br>
![Parts Needed: 1x micro:bit, 1x iot:bit sheild, 1x OLED display](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Ultrasonic/IoT_Ultrasonic_Parts_List.png)
<br>

## Step 3 Connect Up!
Physical connections
--------------------
1. Plug the micro:bit into the iot:bit sheild.
2. The OLED display is plugged directly into the I2C interface (middle black plug) on the iot:bit sheild. The I2C interface has a 'G' pin - ensure that the 'G' pin on the OLED is connected to it.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Ultrasonic/IoT_Ultrasonic_Sensor_Connections.png)

## Step 4 Prepare to Code!
Delete unused blocks
--------------------
**Skip to Step 5 if you are leaving your old code on the desktop. Otherwise:**
1. Clear the previous blocks by dragging them to the menu bar.
2. Place a ``||basic:forever||`` block and a ``||basic: on start||`` onto the work space.
![Deleting code](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Delete_blocks.png)

## Step 5 Add the Extension
Coding: Add the Smart Science Extension
----------------------------------------
The blocks for the OLED display aren't a part of the standard micro:bit MakeCode program and need to have an extension added to be used. 
1. Go to the ``||Extensions||`` menu and search for the Environment-and-Science-iot extension. 
2. Click the <b>Environment-and-Science-iot<b> extension to load it. New menu items will now appear, giving access to the ``||Extensions:Octopus||`` sensors.

## Step 6 Initialise the OLED Display
Coding: Initialise the OLED display
--------------------------
Before it can be used, OLED needs to be initialised - the software needs to be told that it is there.<br>
1. Go to the ``||OLED||`` menu and drag the ``||OLED: Initialise||`` block into the Start block.

```blocks
OLED.init(128, 64)
```

## Step 7 Display Text
Coding: Displaying text on the micro:bit
----------------------------------------
In coding, a line of text is called a string. Strings don't have a numerical value even if they contain a numerical digit. Here we will display a string on the OLED using a 'Show String' command.
1. In the Forever block, go to the ``||OLED||`` menu and drag a ``||OLED:Show String||`` block into it. 
2. Type 'Hello world' into the place holder.

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
How could you integrate the OLED into your code to output information?<br><br>

Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>