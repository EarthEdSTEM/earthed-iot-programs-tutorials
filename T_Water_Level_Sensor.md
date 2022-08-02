# Water Level Sensor Tutorial
![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/EarthEd_Horizontal_Logo.png)
Measuring water level using the Water Level Sensor

<!---------------------------------------------------------------
----Water Level Sensor TUTORIAL Activity 1 -  Incomplete --------
----------------------------------------------------------------->

## Activity 1 - Set up the Water Level Sensor @showdialog
---------------------------------------------
In this tutorial, we will use the water level sensor to measure water depth. By using nested conditional statements, we will also output messages to an OLED display.

### Step 1 -Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts:<br>
1x micro:bit, 1x iot:bit sheild, 1x Connector wire, 1x Water level sensor<br><br>
![Parts Needed: 1x micro:bit, 1x iot:bit sheild, 1x Connector wire, 1x Water level sensor](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Water_Level_Sensor/IoT_Water_Level_Parts_List.png)
<br>

## Step 2 Connect Up!
Physical connections
--------------------
1. Plug the micro:bit into the iot:bit sheild.
2. Use the wire to connect the water level sensor to Pin 2 (or other pin) on the iot:bit sheild. 
3. Connect the other end of the wire to the water level sensor.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Water_Level_Sensor/IoT_Water_Level_Sensor.png)

### Step 3 Prepare to Code!
Delete unused blocks
--------------------
**Skip to Step 5 if you are leaving your old code on the desktop. Otherwise:**
1. Clear the previous blocks by dragging them to the menu bar.
2. Place a ``||basic:forever||`` block and a ``||basic: on start||`` onto the work space.
![Deleting code](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Delete_blocks.png)

### Step 4 Add the Extension
Coding: Add the Smart Science Extension
----------------------------------------
In this section, we will add an extension so that we can access the readings from the light sensor. Extensions are code that is supplied by developers to help 'extend' the functionality of the MakeCode app. Extensions only need to be added once.
1. Go to the ``||Extensions||`` menu and search for the Environment-and-Science-iot extension. 
2. Click the Environment-and-Science-iot extension to load it. New menu items will now appear, giving access to the ``||Extensions:Octopus||`` sensors.

### Step 5 Measure the Water Level
Coding: Measure and display the Water Level
----------------------------------------
The ``||Basic: Number||`` block displays numbers on the LED array on the front of the micro:bit computer. Use Number if you need to perform a mathematical function on a numeric value. 
1. Place a ``||Basic: Number||`` block inside the ``||basic:forever||`` block. 
2. 2. Click on ``||Pins||``, then drag the ``||Pins:analogReadPin||`` block into the placeholder on the ``||Basic: Number||`` block.<br>

```blocks
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
```
### Step 6 Test It
Test it! Debug it!
------------------
Time to test this section of code. Download the code to the micro: bit and try it out. Observe what happens.<br>




<!---------------------------------------------------------------
----Water Level Sensor TUTORIAL Activity 2 -  Incomplete --------
----------------------------------------------------------------->

## Activity 2 - Collect and display the data @showdialog
---------------------------------------------
In this section of the tutorial, we will use nested conditional statements to determine what information is outputed to the OLED display.

### Step 1 -Collect the parts. @unplugged
Collect the parts
-----------------
1.Leave the water level sensor and micro:bit connected to the SensorBit.
2.Attach the OLED display making sure the 'G' Pin is match to the 'G' label on the I2C connector on teh micro:bit.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_OLED/OLED_Connections.png)

## Step 2 Nested Conditionals
Coding: Create a conditional statement
-------------------------------------
Conditional statements allow a question or query to be made, with actions taken based on the result.
1. Place a ``||Logic:if||`` block in the ``||Basic:Forever||`` block under the existing ``||Basic: Number||`` block.
2. Drag a ``||Logic: <||`` (less than) block from the ``||Logic||`` menu into the placeholder in the ``||Logic:if||`` block.
3. Place a ``||Pins:analogReadPin||`` block into the first placeholder on the ``||Logic: >||`` block.
4. Enter the value 300 into the second placeholder.

 ```blocks
OLED.init(128, 64)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 300) {
        }
})
```

## Step 3 Nested Conditionals
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
## Step 4 Nested Conditionals
Coding: Create a nested conditional statement
-------------------------------------
Nesting is when one command is placed inside of another. Here, we will put an 'If' inside an 'If'!
1. Click the plus sign on the ``||Logic:if||`` if block to expand it. You will see another 'Else' section.
2. In this section we will add a ``||OLED:clear||`` block to refresh the OLED screen.
3. We will add a ``||OLED: 

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

## Step 9 Test It
Test it! Debug it!
------------------
Time to test your code. Download the code to the micro: bit and try it out. Observe what happens.<br>
How could you integrate the sensors into your code to trigger the servo or LED lights or both?<br><br>

Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>
