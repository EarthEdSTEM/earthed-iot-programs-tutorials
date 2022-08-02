# Water Level Sensor Tutorial

<!---------------------------------------------------------------
-------------Water Level Sensor TUTORIAL -  Incomplete ----------
----------------------------------------------------------------->

## Step 1 Measuring Water Level @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/EarthEd_Horizontal_Logo.png)
Measuring water level using the Water Level Sensor
-------------------------------------------

In this tutorial, we will use the water level sensor to measure water depth. The values for these readings will be stored and then displayed on the micro:bit computer. We will also add an extension to MakeCode, to help us access the light sensor readings.

## Step 2 Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts:<br>
1x micro:bit, 1x iot:bit sheild, 1x Connector wire, 1x Water Level sensor<br><br>
![Parts Needed: 1x micro:bit, 1x iot:bit sheild, 1x Connector wire, 1x Water Level sensor](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Water_Level_Sensor/IoT_Water_Level_Sensor_Parts_List.png)
<br>

## Step 3 Connect Up!
Physical connections
--------------------
1. Plug the micro:bit into the iot:bit sheild.
2. Use the wire to connect the water level sensor to Pin 2 (or other pin) on the iot:bit sheild. 
3. Connect the other end of the wire to the water level sensor.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Water_Level_Sensor/IoT_Water_Level_Sensor_Connections.png)

## Step 4 Prepare to Code!
Delete unused blocks
--------------------
**Skip to Step 5 if you are leaving your old code on the desktop. Otherwise:**
1. Clear the previous blocks by dragging them to the menu bar.
2. Place a ``||basic:forever||`` block and a ``||basic: on start||`` onto the work space.
![Deleting code](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Delete_blocks.png)

## Step 5 Create Variables (Setting the Environment)
Coding: Creating variables
--------------------------
In coding, a 'constant' is like a variable, except that contains a set value. We will use this constant to compare the numerical value returned by the water level sensor with a target value defined by us.  
1. To create the constant, click ``||Variables: Make a Variable...||`` and call it MaxWaterLevel.
2. Go to ``||Variables: Variables||`` and place the ``||Variables:Set MaxWaterLevel to||`` block inside the ``||Basic:on Start||`` block.
3. Go to the Text menu and drag the ``||Text:Parse to Number||`` block into the Set Water Level block. Set the value to 10.
The ``||Text:Parse to Number||`` command is used to convert an input into a number. This is important here, because we will wan to be able to compare it 
![Making a variable](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Water_Level_Sensor/IoT_Water_Level_Sensor_Create_Variable.png)

```blocks
let WaterLevel = parseFloat("10")
```

## Step 6 Add the Extension
Coding: Add the Smart Science Extension
----------------------------------------
In this section, we will add an extension so that we can access the readings from the light sensor. Extensions are code that is supplied by developers to help 'extend' the functionality of the MakeCode app. Extensions only need to be added once.
1. Go to the ``||Extensions||`` menu and search for the Environment-and-Science-iot extension. 
2. Click the Environment-and-Science-iot extension to load it. New menu items will now appear, giving access to the ``||Extensions:Octopus||`` sensors.

## Step 7 Get the Water Level
Coding: Get the Water Level
----------------------------------------
The ``||Basic: String||`` block displays text on the LED array on the front of the micro:bit computer. In coding, strings are lines of text. 
1. Place a ``||Basic: String||`` block inside the ``||basic:forever||`` block. 
2. 2. Click on ``||Advanced||``, then ``||Advanced:Text||`` and select the ``||Advanced:Join||`` block.
3. Type the words 'Water Level: ' in the first placeholder. Join is used to combine two string values.<br>
** Note:This section is only needed if you wish to display the light value on the LED array on the micro:bit.
```blocks
basic.forever(function () {
    basic.showString("Water Level: " + " ")
})
```

## Step 8 Add the Extension
Coding: Add the light sensor readings
-------------------------------------
While the light sensor readings can be added directly to a string block, by placing the values in a variable, they can be used again in other sections of code.
1. Place a ``||Variables:Set WaterLevel to||`` block above the LightValue string block you made previously.
2. Click on the ``||Octopus||`` menu.
3. Drag the ``||value of light intensity (0~100) at pin||`` block and put it in the ``||Variables:Set LightValue to ||`` placeholder. Ensure that the pin number matches the pin the sensor is connected to.
<br>**Note that the placeholder has rounded ends. Only blocks with rounded ends can fit.

```blocks
let LightValue = 0
basic.forever(function () {
    LightValue = Environment.ReadLightIntensity(AnalogPin.P2)
    basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
```
## Step 10 Join Command
Coding: Combining two string elements
-------------------------------------
1. Make sure that the first placeholder on the ``||Advanced:Join||`` block says "Light Level: ".
2. Drag a ``||Variables:LightValue||`` variable block and put it in the second placeholder on the ``||Advanced:Join||`` block.

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
