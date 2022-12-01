# Water Level Sensor Tutorial

<!---------------------------------------------------------------
----Water Level Sensor TUTORIAL Activity 1 -  Complete --------
----------------------------------------------------------------->

## Step 1 Set up the Water Level Sensor @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Water_Level_Sensor/Water_Level_Banner.gif)
Measuring water level using the Water Level Sensor
-----------------------------------------------------
In this tutorial, we will use the water level sensor to measure water depth. By using nested conditional statements, we will also output messages to an OLED display.

## Step 2 -Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts:<br>
1x micro:bit, 1x GPIO sheild, 1x Connector wire, 1x Water level sensor<br><br>
![Parts Needed: 1x micro:bit, 1x GPIO sheild, 1x Connector wire, 1x Water level sensor](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Water_Level_Sensor/IoT_Water_Level_Parts_List.png)
<br>

## Step 3 Connect Up!
Physical connections
--------------------
1. Plug the micro:bit into the GPIO sheild.
2. Use the wire to connect the water level sensor to Pin 1 (or other pin) on the GPIO sheild. 
3. Connect the other end of the wire to the water level sensor.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Water_Level_Sensor/IoT_Water_Level_Sensor.png)

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

## Step 3 Add the Extension @unplugged
Coding: Add the Environment-and-Science-iot extension
----------------------------------------
An extension is code that is supplied by a developer to help 'extend' the functionality of the MakeCode app. Extensions add extra blocks to the block menu and only need to be added once. 
<br>The blocks for this tutorial are already present in the menu, however you will normally have to do the following:
1. Go to the ``||Extensions||`` menu and search for the Environment-and-Science-iot extension. 
2. Click the Environment-and-Science-iot extension to load it. New menu items will now appear, giving access to the ``||Extensions:Octopus||`` sensors.
![Add the extension](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Add_Extension.gif)

## Step 4 Measure the Water Level
Coding: Measure and display the water level
----------------------------------------
The ``||Basic: Number||`` block displays numbers on the LED array on the front of the micro:bit computer. Use Number if you need to perform a mathematical function on a numeric value. 
1. Place a ``||Basic: Number||`` block inside the ``||basic:forever||`` block. 
2. 2. Click on ``||Pins||``, then drag the ``||Pins:analogReadPin||`` block into the placeholder on the ``||Basic: Number||`` block.<br>

```blocks
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
```
## Step 5 Test It
Test it! Debug it!
------------------
Time to test this section of code. Download the code to the micro: bit and try it out. Observe what happens.<br>

## Step 6 - Collect and display the data @showdialog
Make the user experience better
---------------------------------------------
You may have noticed that the numbers that were displayed were hard to understand. In this next section of the tutorial, we will improve the user experience by using nested conditional statements to simplify the information that is outputed to the OLED display.

## Step 7 -Collect the parts. @unplugged
Collect the parts
-----------------
1.Leave the water level sensor and micro:bit connected to the SensorBit.
2.Attach the OLED display making sure the 'G' Pin is matched to the 'G' label on the I2C connector on the micro:bit.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_OLED/OLED_Connections.png)

## Step 8 Nested Conditionals
Coding: Create a conditional statement
-------------------------------------
Conditional statements allow a question or query to be made, with actions taken based on the result.
1. Place a ``|| Logic: if ||`` block in the ``|| Basic: Forever ||`` block under the existing ``|| Basic: Number ||`` block.
2. Drag a ``|| Logic: < ||`` (less than) block from the ``|| Logic: Logic ||`` menu into the placeholder in the ``|| Logic :if ||`` block.
3. Place a ``|| Pins: analogReadPin ||`` block into the first placeholder on the ``|| Logic: > ||`` block.
4. Enter the value 300 into the second placeholder.

 ```blocks
OLED.init(128, 64)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 300) {
        }
})
```

## Step 9 Nested Conditionals
Coding: Create a nested conditional statement
-------------------------------------
Nesting is when one command is placed inside of another. Here, we will put an 'If' inside an 'If'!
1. Click the plus sign on the ``||Logic:if||`` if block to expand it. You will see an 'Else' section. 
2. Place a ``||Logic:if||`` block in the new 'Else' section.
3. Drag a ``||Logic: >||`` (greater than) block from the Logic menu into the placeholder in the new ``||Logic:if||`` block.
4. Place a ``||Pins:analogReadPin||`` block into the first placeholder on the ``||Logic: >||`` block.
5. Enter the value 450 into the second placeholder.
We now have a conditional that that checks to see if the value received from the water level sensor less than 300 (low) or more than 450 (high).

```blocks
OLED.init(128, 64)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 300) {
    } else if (pins.analogReadPin(AnalogPin.P1) > 450) {
    }
})

```
## Step 10 Nested Conditionals
Coding: Create a nested conditional statement
-------------------------------------
Nesting is when one command is placed inside of another. Here, we will put an 'If' inside an 'If'!
1. Click the plus sign on the ``||Logic:if||`` block to expand it. You will see another 'Else' section.
2. In this section we will add a ``||OLED:clear||`` block to refresh the OLED screen.
3. We will add a ``||OLED: show string||`` next, placing the words 'Water level OK' into the placeholder.
4. Add a ``||Basic: pause||`` block last and give a value of 500 ms.<br>
This section of code clears the screen, reads data from the water level sensor and then if it is in the range of 300 and 450, displays 'Water level OK' on the OLED display, pausing so the reader can view it.

```blocks
OLED.init(128, 64)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 30) {

    } else if (pins.analogReadPin(AnalogPin.P1) > 440) {

    } else {
        OLED.clear()
        OLED.writeStringNewLine("Water Level OK.")
        basic.pause(500)
    }
})
```
## Step 11 Nested Conditionals
Coding: Complete the code
-------------------------------------
Using the scheme from the previous step, add 'Water low' and 'Water high' warnings.

```blocks
OLED.init(128, 64)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 30) {
        OLED.clear()
        OLED.writeStringNewLine("Water Level Low")
        basic.pause(500)
    } else if (pins.analogReadPin(AnalogPin.P1) > 440) {
        OLED.clear()
        OLED.writeStringNewLine("Warning! Water Level High")
        basic.pause(500)
    } else {
        OLED.clear()
        OLED.writeStringNewLine("Water Level OK.")
        basic.pause(500)
    }
})

```

#### Step 12 Test It
Test it! Debug it!
------------------
Time to test your code. Download the code to the micro: bit and try it out. Observe what happens. You may need to tweak the ranges so that the code works consistently.<br>
How could you integrate the water level sensor into your project to trigger the servo or LED lights or other device?<br><br>

Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>
