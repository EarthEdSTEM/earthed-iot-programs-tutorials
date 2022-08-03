# Crash Sensor Tutorial

<!---------------------------------------------------------------
---------------Crash Sensor TUTORIAL---------------INComplete------
----------------------------------------------------------------->

## Step 1 Using the Crash Sensor as an input  @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/EarthEd_Horizontal_Logo.png)
Using the Contact Sensor as an input
------------------------------------

In this tutorial, we will use [variables](https://launchschool.com/books/ruby/read/variables) and [boolean operators](https://www.youtube.com/watch?v=KrR7D58Onzw) in conjunction with the light sensor, to control Light Emitting Diodes (LED).
Booleans work by comparing, adding or subtracting two values. This is a more advanced tutorial.

## Step 2 Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts: <br>
1x micro:bit, 1x iot:bit sheild, 4x Connector Wire, 1x Crash Sensor, 3x LED (Red, Green and Yellow) <br><br>
![Parts Needed: 1x micro:bit, 1x iot:bit sheild, 4x Connector Wire, 1x Crash Sensor, 3x LED (Red, Green and Yellow) ](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Crash_Sensor/IoT_Crash_Sensor_Parts_List.png)
<br>

## Step 3 Connect Up!
Physical connections
--------------------
1. Plug the micro:bit into the iot:bit sheild.
2. Use one wire to connect the Crash Sensor to Pin 2 on the iot:bit sheild.
3. Use the other wires to connect the LEDs to Pins 3, 4 and 5 on the iot:bit sheild.
4. Check that the wires are connected to the crash sensor and LEDs in the correct order.


![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Crash_Sensor/IoT_Crash_Sensor_Connections.png)

## Step 4 Prepare to Code!
Delete unused blocks
--------------------
**Skip to Step 5 if you are leaving your old code on the desktop. Otherwise:**
1. Clear the previous blocks by dragging them to the menu bar.
2. Place a ``||basic:forever||`` block and a ``||basic: on start||`` onto the work space.
![Deleting code](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Delete_blocks.png)

## Step 5 Create Variables (Setting the Environment)
Coding: creating variables
--------------------------
Variables are containers that hold a value. For this task, we will use the values 1 for 'true' and 0 for 'False'.
We will start by creating a new variable, adding it and then setting it to 'false' by entering '0'.
1. Click ``||Variables: Make a Variable...||`` to create a variable and call it CrashPressed.
2. Go to ``||Variables: Variables||`` and place the ``||Variables:Set CrashPressed to||`` block inside the ``||Basic:on Start||`` block.
3. Check that the value of the ``||Variables:Set CrashPressed to||`` block is set to '0' (for false).
Now, each time the program starts, the value of CrashPressed will be '0'.
![Making a variable](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Crash_Sensor/IoT_Crash_Sensor_Create_Variable.png)

```blocks
let CrashPressed = 0
```

## Step 6 Add a Conditional Block
Coding: add an If block
-----------------------
The switch for turning on the LEDs will be the Crash Sensor. We will use the 'If...then' Logic Block to check if the Crash Sensor is pressed and if the LEDs are off. 

1. Place a ``||logic:if||`` block from the Logic menu into the ``||basic.forever||`` block.

```blocks
let CrashPressed = 0
basic.forever(function () {
    if (true) {
    	
    }
})
```

## Step 7 Add the Extension
Coding: Add the Smart Home Extension
----------------------------------------
In this section, we will add an extension so that we can access the Crash Sensor block. Extensions are code that is supplied by developers to help 'extend' the functionality of the MakeCode app. Extensions only need to be added once.
1. Go to the ``||Extensions||`` menu and search for the Smarthome-kit extension. 
2. Click the Smarthome-kit extension to load it. New menu items will now appear, giving access to the ``||Smart Home||`` blocks.
3. Place a ``||Smart Home:Setup crash sensor at Pin||`` block in the ``||On start||`` block to initialise it.



## Step 8 Add a Conditional Block
Coding: Creating the Boolean for 'On'
-----------------------------------------------------
This section asks the question: "Is the Crash Sensor pressed and the LED switched **off**?" by using an ``||logic:and||`` boolean. If both conditions are True
then Pins 3,4 and 5 are set to '1' and power up. To code it:
1. Place a Boolean ``||logic:and||`` block from the Logic Menu into the placeholder at the top of the ``||logic:if||`` block. <br>
**Note: The ``||logic:and||`` block has two placeholders with rounded ends for adding variables and values.
2. Place a ``||Smart Home: Crash sensor pressed||`` block into the first placeholder of the  ``||logic:and||`` block. 
3. Place a Comparison ``||logic:equals||`` block from the Logic Menu into the second placeholder of ``||logic:and||`` block. 
4. Add a ``||variables:CrashPressed||`` to the first placeholder of the ``||logic:equals||`` block and a value of 0 to the second. 

```blocks
let CrashPressed = 0
smarthome.crashSensorSetup(DigitalPin.P2)
basic.forever(function () {
    if (smarthome.crashSensor() && CrashPressed == 0) {
    
    }
})
```

## Step 9 Add a Conditional Block
Coding: If True....Then switch on!
----------------------------------
The 'if' block checks if a condition is 'true' and executes commands if it is. Here, we enable Pin 3 then pause before enabling pin 4.
1. Set the CrashPressed variable to 1 (True) to indicate that Button A has been pressed.
2. Add a ``||pins:digital write pin||`` block to the ``||logic:if||`` and set it to 'P3' and 1.
3. Add a ``||control:waitMicros||`` and set it to 500 milliseconds. This creates a sequence for the LEDs.
4. Repeat steps 2 and 3 for each LEDs 
5. Set the CrashPressed variable to 1 (True) to indicate that Button A has been pressed.

```blocks
let CrashPressed = 0
smarthome.crashSensorSetup(DigitalPin.P2)
basic.forever(function () {
    if (smarthome.crashSensor() && CrashPressed == 0) {
        CrashPressed = 1
        pins.digitalWritePin(DigitalPin.P3, 1)
        control.waitMicros(500)
    }
})
```
## Step 10 Program Continued
Coding: Reverse the sequence
----------------------------
This section asks the question: "Is the A button pressed and the LED switched **on**?" by using an ``||logic:and||`` boolean. If both conditions are True
then the Pin 2 is set to '0' and powers down.
1. Click the 'plus' symbol on the if block to add an 'else' condition.
2. Add blocks to turn off the LED. Try it yourself or check the Hint to find out how.

```blocks
let CrashPressed = 0
smarthome.crashSensorSetup(DigitalPin.P2)
basic.forever(function () {
    if (smarthome.crashSensor() && CrashPressed == 0) {
        CrashPressed = 1
        pins.digitalWritePin(DigitalPin.P3, 1)
        control.waitMicros(500)
        pins.digitalWritePin(DigitalPin.P4, 1)
        control.waitMicros(500)
        pins.digitalWritePin(DigitalPin.P5, 1)
        control.waitMicros(5000)
        pins.digitalWritePin(DigitalPin.P4, 0)
        control.waitMicros(500)
        pins.digitalWritePin(DigitalPin.P3, 0)
        control.waitMicros(500)
        pins.digitalWritePin(DigitalPin.P5, 0)
        CrashPressed = 0
    }
})

```

## Step 10 Test It
Test it! Debug it!
------------------
Time to test your code. Download the code to the micro: bit and try it out. Observe what happens and adjust the values as needed.<br>
How could you adjust the code to turn of each LED in sequence like a traffic light?<br>
How could you integrate the other sensors into your code to trigger the servo in a different way?<br><br>


Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>


<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>

