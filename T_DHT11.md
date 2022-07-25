# DHT11 Tutorial

<!---------------------------------------------------------------
------------------------- DHT11 TUTORIAL-------------------------
----------------------------------------------------------------->

## Step 1 Taking a Temperature @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/EarthEd_Horizontal_Logo.png)
Taking a Temperature using the DHT11 sensor
-------------------------------------------

In this tutorial, we will use the DHT11 sensor to take temperature and humidity readings. The values for these readings will be stored and then displayed on the micro:bit computer. We will also add an extension to MakeCode, to help us access the DHT11 sensor readings.  Extensions only need to be added once.

## Step 2 Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts:<br>
1x micro:bit, 1x iot:bit sheild, 1x Connector wire, 1x DHT11 sensor<br><br>
![Parts Needed: 1x micro:bit, 1x iot:bit sheild, 1x Connector wire, 1x DHT11 sensor](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/IoT_DHT11_Parts_List.png)
<br>

## Step 3 Connect Up!
Physical connections
--------------------
1. Plug the micro:bit into the iot:bit sheild.
2. Use the wire to connect the DHT11 to Pin 2 (or other pin) on the iot:bit sheild. 
3. Connect the other end of the wire to the DHT11 sensor.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/IoT_DHT11_Connections.png)

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
When creating new code, it is good practice to 'declare' the variables you will use. This is called setting the environment.<br> Variables are containers that hold a value. For this task, we will store a temperature value and a humidity value.
1. Click ``||Variables: Make a Variable...||`` to create a variable and call it Temperature.
2. Click ``||Variables: Make a Variable...||`` to create a variable and call it Humdity.
3. Go to ``||Variables: Variables||`` and place the ``||Variables:Set Temperature to||`` block inside the ``||Basic:on Start||`` block.
4. Repeat for Humidity
![Making a variable](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_DHT11/IoT_DHT11_Create_Variable.png)

## Step 6 Display Text
Coding: Displaying text on the micro:bit
----------------------------------------
The ``||Basic: String||`` block displays text on the LED array on the front of the micro:bit computer. In coding, strings are lines of text. 
1. Place a ``||Basic: String||`` block inside the ``||basic:forever||`` block. Type the word 'Temperature: ' in the placeholder.
2. Place a second ``||Basic: String||`` block inside the ``||basic:forever||`` block. Type the word 'Humidity: ' in the placeholder.

```blocks
basic.forever(function () {
    basic.showString("Temperature:")
    basic.showString("Humidity:")
})
```

## Step 7 Add the Extension
Coding: Add the Smart Science Extension
----------------------------------------
In this section, we will add an extension so that we can access the readings from the DHT11 sensor. Extensions are code that is supplied by developers to help 'extend' the functionality of the MakeCode app.
1. Go to the ``||Extensions||`` menu and search for the Environment-and-Science-iot extension. 
2. Click the Environment-and-Science-iot extension to load it. New menu items will now appear, giving access to the ``||Extensions:Octopus||`` sensors.

## Step 8 Add the Extension
Coding: Add the DHT11 sensor readings
-------------------------------------
While the DHT11 sensor readings can be added directly to a string block, by placing the values in a variable, they can be used again in other sections of code.
1. Place a ``||Variables:Set Temperature to||`` block above the Temperature string block you made previously.
2. Click on the ``||Octopus||`` menu and then click ``||...More||``.
3. Drag the ``||Value of dht11 temperature||`` block and put it in the ``||Variables:Set Temperature to ||`` placeholder.
<br>**Note that the placeholder has rounded ends. Only blocks with rounded ends can fit.

4. Place a new ``||Basic: String||`` block underneath the Temperature string block.
5. Drag a ``||Variables:Temperature||`` variable block and put it in the ``||Basic: String||`` placeholder.
6. Repeat to for humidity

```blocks
let Temperature = 0
let Humidity = 0
basic.forever(function () {
    Temperature = Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P2)
    basic.showString("Temperature: ")
    basic.showString("" + (Temperature))
    Temperature = Environment.dht11value(Environment.DHT11Type.DHT11_humidity, DigitalPin.P2)
    basic.showString("Humidity: " + Humidity)
})
```
** Note: In the sample code shown here, the join block has been used to added to items of text together.
 
## Step 9 Test It
Test it! Debug it!
------------------
Time to test your code. Download the code to the micro: bit and try it out. Observe what happens.<br>
How could you integrate the sensors into your code to trigger the servo or LED lights or both?<br><br>

Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](https://makecode.microbit.org/#tutorial:github:earthedstem/earthed-iot-programs-tutorials/README)**<br>

<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>
