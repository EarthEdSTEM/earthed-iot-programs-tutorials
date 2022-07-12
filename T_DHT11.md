# T_DHT11

<! To do:
    -Change URLs for Graphics
    - Change the variables graphics
>
<!  ---------------------------------------------------------------
    ----------------------- DHT11 TUTORIAL-------------------------
    --------------------------------------------------------------- >

## Step 1 Taking a Temperature @showdialog
Taking a Temperature using the DHT11
------------------------------------
In this tutorial, we will use the DHT11 sensor to take temperature and humidity readings. The values for these readings will be stored and then displayed on the micr:bit computer.
![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/Earth%20Ed%20Horizontal%20Logo.png)



## Step 2 - Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts: <br>
1x DHT111 Sensor, 1x IoT: Bit sheild, 1x micro: bit, 1x Connector Wire < br > <br>
![Parts Needed: 1x DHT11 Sensor, 1x IoT: Bit sheild, 1x micro: bit, 1x Connector Wire](https://raw.githubusercontent.com/EarthEdSTEM/IOT_Smart_City/main/Images/IoT_LED_Parts_List.svg)
<br>

## Step 3 - Connect Up!
Physical Connections
--------------------
1. Plug the micro:bit into the SensorBit sheild.
2. Use the wire to connect the DHT11 to Pin 2 (or other pin) on the SensorBit sheild. 
3. Connect the other end of the wire to the DHT11.
![image](https://raw.githubusercontent.com/EarthEdSTEM/IOT_Smart_City/main/Images/IoT_LED_Connections.svg)

## Step 4 - Prepare to Code!
Delete unused blocks
--------------------
**Skip to Step 5 if you are leaving your old code on the desktop. Otherwise:**
1. Clear the previous blocks by dragging them to the menu bar.
2. Place a ``||basic:forever||`` block and a ``||basic: on start||`` onto the work space.
![Deleting code](https://raw.githubusercontent.com/EarthEdSTEM/IOT_Smart_City/main/Images/Delete_code.png)

## Step 5 - Create Variables (Setting the Environment)
Coding: Creating Variables
--------------------------
When creating new code, it is good practice to 'declare' the variables you will use. This is called setting the environment.<br> Variables are containers that hold a value. For this task, we will store a temperature value and a humidity value.
1. Click ``||Variables: Make a Variable...||`` to create a variable and call it Temperature.
2. Click ``||Variables: Make a Variable...||`` to create a variable and call it Humdity.
3. Go to ``||Variables: Variables||`` and place the ``||Variables:Set Temperature to||`` block inside the ``||Basic:on Start||`` block.
4. Repeat for Humidity
![Making a variable](https://raw.githubusercontent.com/EarthEdSTEM/IOT_Smart_City/main/Images/Make_variable.jpg)



Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](/earthed-iot-programs-tutorials/README)**<br>
