# Light Sensor Tutorial

<!----Light Sensor TUTORIAL--------------------------Complete----
------Use a light sensor to measure light------------------------
----------------------------------------------------------------->

## Step 1 Sensing Light @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Light_Sensor/Light_Banner.gif)
Measuring light using the Light Sensor
-------------------------------------------

In this tutorial, we will use the light sensor to measure the amount of light in the environment. 
The values for these readings will be stored and then displayed on the micro:bit computer. 
We will also learn how to add an extension to MakeCode, to help access the light sensor readings.

## Step 2 Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts:<br>
1x micro:bit, 1x GPIO shield, 1x Connector wire, 1x Light sensor<br><br>
![Parts Needed: 1x micro:bit, 1x GPIO shield, 1x Connector wire, 1x DHT11 sensor](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Light_Sensor/IoT_Light_Sensor_Parts_List.png)
<br>

## Step 3 Connect Up!
Physical connections
--------------------
1. Plug the micro:bit into the GPIO shield.
2. Use the wire to connect the light sensor to Pin 2 (or other pin) on the GPIO shield. 
3. Connect the other end of the wire to the light sensor.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Light_Sensor/IoT_Light_Sensor_Connections.png)

## Step 4 Prepare to Code!
How to delete blocks
------------------------------
Using MakeCode
------------------------------
The software we are using is called MakeCode. In these tutorials, if you see coloured words such as ``||basic: forever||``, this is a commond that can be found and dragged out of a menu. THe corresponds with the menu colour. The commands click together like a jigsaw. 
If you need to delete blocks, dragging them to the menu bar will cause a 'bin' to appear. 
You can delete single blocks or groups of blocks, but make sure that you leave 
a ``||basic: forever||`` block and a ``||basic: on start||`` block on the work space.
![Image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Delete_blocks.png)

## Step 5 Create Variables (Setting the Environment)
Coding: Creating variables
--------------------------
When creating new code, it is good practice to 'declare' the variables you will use. This is called setting the environment.<br> 
Variables are containers that hold a value. When choosing a name for a variable ensure that it makes sense - code can contain many variables. 
For this task, we will use a variable called 'LightValue' to store a light level value.
1. Click ``||Variables: Make a Variable...||`` to create a variable and call it 'LightValue'.
3. Go to ``||Variables: Variables||`` and place the ``||Variables:Set LightValue to||`` block inside the ``||Basic:on Start||`` block.
![Making a variable](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_Light_Sensor/IoT_Light_Sensor_Create_Variable.png)

```blocks
LightValue = 0
```

## Step 6 Display Text
Coding: Displaying text on the micro:bit
----------------------------------------
The ``||Basic: String||`` block displays text on the LED array that is located on the front of the micro:bit computer.
In coding, a line of text is called a string. Strings can contain a numerical digits, but don't have a value as a number.
1. Place a ``||Basic: String||`` block inside the ``||basic:forever||`` block. 
2. Click on ``||Advanced||``, then ``||Advanced:Text||`` and select the ``||Advanced:Join||`` block.
3. Type the word 'Light Level: ' in the first placeholder. Join is used to combine two string values.<br>
** Note:This section is only needed if you wish to display the light value on the LED array on the micro:bit.
```blocks
basic.forever(function () {
    basic.showString("Light Level: " + " ")
})
```

## Step 7 Add the Extension @unplugged
Coding: Add the Smart Science Extension
----------------------------------------
An extension is code that is supplied by a developer to help 'extend' the functionality of the MakeCode app. Extensions add extra blocks to the block menu and only need to be added once. 
<br>The blocks for this tutorial are already present in the menu, however, if you need to add an extension in your own project you will have to do the following:
1. Go to the ``||Extensions||`` menu and search for the Environment-and-Science-iot extension. 
2. Click the Environment-and-Science-iot extension to load it. New menu items will now appear, giving access to the ``||Extensions:Octopus||`` sensors.
![Add the extension](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Add_Extension.gif)

## Step 8 Add the Extension
Coding: Add the light sensor readings
-------------------------------------
While the light sensor readings can be added directly to a string block, by placing the values in a variable, they can be used again in other sections of code.
1. Place a ``||Variables:Set LightValue to||`` block above the LightValue string block you made previously.
2. Click on the ``||Octopus||`` menu.
3. Drag the ``||value of light intensity (0~100) at pin||`` block and put it in the ``||Variables:Set LightValue to ||`` placeholder. Ensure that the pin number matches the pin the sensor is connected to.
<br>**Note that the placeholder has rounded ends. Only blocks with rounded ends can fit.

```blocks
let LightValue = 0
basic.forever(function () {
    LightValue = Environment.ReadLightIntensity(AnalogPin.P2)
})
```
## Step 9 Join Command
Coding: Combining two string elements
-------------------------------------
1. Make sure that the first placeholder on the ``||Advanced:Join||`` block says "Light Level: ".
2. Drag a ``||Variables:LightValue||`` variable block and put it in the second placeholder on the ``||Advanced:Join||`` block. 
More items can be added by clicking the 'plus' icon on the Join block. 

```blocks
LightValue = 0
basic.forever(function () {
    LightValue = Environment.ReadLightIntensity(AnalogPin.P2)
    basic.showString("Light Level: " + LightValue)
})
```

## Step 10 Test It
Test it! Debug it!
------------------
Time to test your code. Download the code to the micro: bit and try it out. Observe what happens.<br>
How could you integrate the sensors into your code to trigger the servo or LED lights or both?<br><br>

Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>
