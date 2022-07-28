# T_OLED Tutorial

<!---------------------------------------------------------------
------------------------- OLED TUTORIAL--------INComplete----
----------------------------------------------------------------->

## Step 1 Using the OLED @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/EarthEd_Horizontal_Logo.png)
Displaying information using the OLED Display
-------------------------------------------

In this tutorial, we will connect the OLED display to the iot:bit and display a simple 'string'.
## Step 2 Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts:<br>
1x micro:bit, 1x iot:bit sheild, 1x Connector wire, 1x OLED display<br><br>
![Parts Needed: 1x micro:bit, 1x iot:bit sheild, 1x Connector wire, 1x OLED display](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Ultrasonic/IoT_Ultrasonic_Parts_List.png)
<br>

## Step 3 Connect Up!
Physical connections
--------------------
1. Plug the micro:bit into the iot:bit sheild.
2. Use the wire to connect the OLED display into I2C interface (middle black plug) on the iot:bit sheild. There are two rows of connectors. Either row will work.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Ultrasonic/IoT_Ultrasonic_Sensor_Connections.png)

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
When creating new code, it is good practice to 'declare' the variables you will use. This is called setting the environment.<br> Variables are containers that hold a value. For this task, we will store a distance value.
1. Click ``||Variables: Make a Variable...||`` to create a variable and call it Distance.
3. Go to ``||Variables: Variables||`` and place the ``||Variables:Set Distance to||`` block inside the ``||Basic:on Start||`` block.
![Making a variable](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Ultrasonic/IoT_Ultrasonic_Create_Variable.png)

```blocks
Distance = 0
```

## Step 6 Display Text
Coding: Displaying text on the micro:bit
----------------------------------------
The ``||Basic: String||`` block displays text on the LED array on the front of the micro:bit computer. In coding, strings are lines of text. 
1. Place a ``||Basic: String||`` block inside the ``||basic:forever||`` block. 
2. Click on ``||Advanced||``, then ``||Advanced:Text||`` and select the ``||Advanced:Join||`` block.
3. Type the word 'Distance: ' in the first placeholder. Join is used to combine two string values.<br>
** Note:This section is only needed if you wish to display the Distance value on the LED array on the micro:bit.
```blocks
basic.forever(function () {
    basic.showString("Distance: " + " ")
})
```

## Step 7 Add the Extension
Coding: Add the Smart Science Extension
----------------------------------------
In this section, we will add an extension so that we can access the readings from the Ultrasonic sensor. Extensions are code that is supplied by developers to help 'extend' the functionality of the MakeCode app. Extensions only need to be added once.
1. Go to the ``||Extensions||`` menu and search for the Environment-and-Science-iot extension. 
2. Click the Environment-and-Science-iot extension to load it. New menu items will now appear, giving access to the ``||Extensions:Octopus||`` sensors.

## Step 8 Add the Extension
Coding: Add the Ultrasonic sensor readings
-------------------------------------
While the light sensor readings can be added directly to a string block, by placing the values in a variable, they can be used again in other sections of code.
1. Place a ``||Variables:Set Distance to||`` block above the Distance string block you made previously.
2. Click on the ``||Octopus||`` menu.
3. Drag the ``||ultrasonic distance in unit mm at pin 16||`` block and put it in the ``||Variables:Set Distance to ||`` placeholder. Ensure that the pin number matches the pin the sensor is connected to and units are centimetres.
<br>**Note that the placeholder has rounded ends. Only blocks with rounded ends can fit.

```blocks
Distance = 0
basic.forever(function () {
    Distance = Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P2)
})
```
## Step 10 Join Command
Coding: Combining two string elements
-------------------------------------
1. Make sure that the first placeholder on the ``||Advanced:Join||`` block says "Light Level: ".
2. Drag a ``||Variables:Distance||`` variable block and put it in the second placeholder on the ``||Advanced:Join||`` block.
3. Click the '+' symbol on the ``||Advanced:Join||`` block and add the text ' cm' to the new placeholder.

```blocks
Distance = 0
basic.forever(function () {
    Distance = Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P2)
    basic.showString("Distance: " + Distance + " cm")
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
