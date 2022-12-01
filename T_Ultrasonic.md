# Ultrasonic Sensor Tutorial

<!---------------------------------------------------------------
------------------------- Ultrasonic TUTORIAL--------Complete----
----------------------------------------------------------------->

## Step 1 Measuring Distance @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Ultrasonic/Ultrasonic_Banner.gif)
Measuring distance using the Ultrasonic Sensor
-------------------------------------------

In this tutorial, we will use the Ultrasonic sensor to measure distance. Ultrasonic sensors send out sound signals then measure how long they take to bounce off an object and return back. The longer the time, the greater the distance. This is like the sonar on a submarine or how bats use echo location. The values for these readings are in centimetres - they will be stored in a variable and then displayed on the micro:bit computer. The Ultrasonic sensor requires an extension to access readings.

## Step 2 Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts:<br>
1x micro:bit, 1x GPIO shield, 1x Connector wire, 1x Sensorbit:sonar Ultrasonic sensor<br><br>
![Parts Needed: 1x micro:bit, 1x GPIO shield, 1x Connector wire, 1x Sonar sensor](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Ultrasonic/IoT_Ultrasonic_Parts_List.png)
<br>

## Step 3 Connect Up!
Physical connections
--------------------
1. Plug the micro:bit into the GPIO shield.
2. Use the wire to connect the Ultrasonic sensor to Pin 2 (or other pin) on the GPIO shield. 
3. Connect the other end of the wire to the Ultrasonic sensor.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Ultrasonic/IoT_Ultrasonic_Sensor_Connections.png)

## Step 4 Prepare to Code!
Using MakeCode
------------------------------
Using MakeCode
------------------------------
The software we are using is called MakeCode. In these tutorials, if you see coloured words such as ``||basic: forever||``, 
this is a command that can be found and dragged out of a menu. The command colour corresponds with the menu colour. 
The commands click together like a jigsaw. 
If you need to delete blocks, dragging them to the menu bar will cause a 'bin' to appear. 
You can delete single blocks or groups of blocks, but make sure that you leave 
a ``||basic: forever||`` block and a ``||basic: on start||`` block on the work space.
![Image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Delete_blocks.png)

## Step 5 Create Variables (Setting the Environment)
Coding: Creating variables
--------------------------
When creating new code, it is good practice to 'declare' the variables you will use. This is called setting the environment.<br> 
Variables are containers that hold a value. For this task, we will store a distance value.
1. Click ``||Variables: Make a Variable...||`` to create a variable and call it **Distance**.
3. Go to ``||Variables: Variables||`` and place the ``||Variables:Set Distance to||`` block inside the ``||Basic:on Start||`` block.
![Making a variable](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Ultrasonic/IoT_Ultrasonic_Create_Variable.png)

```blocks
Distance = 0
```

## Step 6 Display Text
Coding: Displaying text on the micro:bit
----------------------------------------
The ``||Basic: Show string||`` block displays text on the LED array on the front of the micro:bit computer. In coding, strings are lines of text. 
1. Place a ``||Basic: Show string||`` block inside the ``||basic:forever||`` block. 
2. Click on ``||Advanced||``, then ``||Text: Text||`` and select the ``||Text: Join||`` block. **Join** is used to combine two string values to create a sentence.
3. Type the word **'Distance: '** in the first placeholder.<br>
** Note:This section is only needed if you wish to display the Distance value on the LED array on the micro:bit.
```blocks
basic.forever(function () {
    basic.showString("Distance: " + " ")
})
```

## Step 7 Add the Extension @unplugged
Coding: Add the Environment-and-Science-iot extension
----------------------------------------
An extension is code that is supplied by a developer to help 'extend' the functionality of the MakeCode app. Extensions add extra blocks to the block menu and only need to be added once. 
<br>The blocks for this tutorial are already present in the menu, however you will normally have to do the following:
1. Go to the ``||Extensions||`` menu and search for the Environment-and-Science-iot extension. 
2. Click the Environment-and-Science-iot extension to load it. New menu items will now appear, giving access to the ``||Extensions:Octopus||`` sensors.
![Add the extension](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Add_Extension.gif)

## Step 8 Add the Extension 
Coding: Add the Ultrasonic sensor readings
-------------------------------------
While the light sensor readings can be added directly to a string block, by placing the values in a variable, they can be used again in other sections of code.
1. Place a ``||Variables:Set Distance to||`` inside the ``||basic:forever||`` block.
2. Click on the ``||Octopus||`` menu.
3. Drag the ``||ultrasonic distance in unit mm at pin 16||`` block and put it in the ``||Variables:Set Distance to ||`` placeholder. Ensure that the pin number matches the pin the sensor is connected to and units are centimetres.
<br>**Note that the placeholder has rounded ends. Only blocks with rounded ends can fit.

```blocks
Distance = 0
basic.forever(function () {
    Distance = Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P2)
})
```
## Step 9 Join Command
Coding: Combining two string elements
-------------------------------------
1. Place a ``||basic:show string||`` block below the ``||Variables:Set Distance to ||`` block in the ``||basic:forever||`` block.
2. Make sure that the first placeholder on the ``|| Text: Join ||`` block says "Light Level: ".
3. Drag a ``|| Variables: Distance ||`` variable block and put it in the second placeholder on the ``|| Text: Join ||`` block.
4. Click the '+' symbol on the ``|| Text: Join ||`` block and add the text **' cm'** to the new placeholder.

```blocks
Distance = 0
basic.forever(function () {
    Distance = Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P2)
    basic.showString("Distance: " + Distance + " cm")
})
```

## Step 10 Test It
Test it! Debug it!
------------------
Time to test your code. Download the code to the micro: bit and try it out. Observe what happens.<br>
How could you integrate the ULtrasonic sensor into your code to trigger an event or model a real world situation?<br><br>

Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>
