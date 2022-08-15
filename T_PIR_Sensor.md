# PIR Sensor Tutorial

<!---------------------------------------------------------------
----------------PIR Sensor TUTORIAL -  Complete ----------------
----------------------------------------------------------------->


## Step 1 - Detect Motion @showdialog

![](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_PIR_Sensor/PIR_Sensor_Banner.gif)
Detect motion
---------------------------------

In this tutorial we will use a Passive Infra-Red (PIR) sensor as an input to trigger a LED. A PIR sensor works by detecting heat as an object passes by it.

## Step 2 - Collect the parts. @unplugged
Collect the parts
-----------------
For this tutorial, you will need these parts: <br>
1x iot:bit sheild, 1x micro:bit, 1x Connector Wire, 1x PIR Sensor, 1x LED <br><br>
![Parts Needed: 1x iot:bit sheild, 1x micro:bit, 1x Connector Wire, 1x PIR Sensor, 1x LED](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_PIR_Sensor/IoT_PIR_Sensor_Parts_List.png)
<br>

## Step 3 - Connect Up!
Connect the parts together
--------------------------
1. Plug the micro: bit into the iot:bit sheild.
2. Connect the wire to Pin 1 on the iot:bit sheild.
3. Connect the other end of the wire to the PIR sensor.
4. Connect the LED to Pin 2 using the same method.
![image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/T_PIR_Sensor/IoT_Soil_Moisture_Sensor_Connections.png)


## Step 4 - Prepare to Code!
Delete unused blocks if needed
------------------------------
**Skip to Step 5 if you are leaving your old code on the desktop. Otherwise:**
1. If starting fresh, clear the previous blocks by dragging them to the menu bar where a 'bin' will appear.
2. Place a ``||basic: forever||`` block and a ``||on start||`` onto the work space.
![Image](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Delete_blocks.png)


## Step 5 Add the Extension @unplugged
Coding: Add the SmartHome-Kit extension
----------------------------------------
An extension is code that is supplied by a developer to help 'extend' the functionality of the MakeCode app. Extensions add extra blocks to the block menu and only need to be added once. 
<br>The blocks for this tutorial are already present in the menu, however you will normally have to do the following:
1. Go to the ``||Extensions||`` menu and search for the **SmartHome-Kit** extension. 
2. Click the Environment-and-Science-iot extension to load it. New menu items will now appear, giving access to the ``||Extensions:Octopus||`` sensors.
![Add the extension](https://raw.githubusercontent.com/EarthEdSTEM/earthed-iot-programs-tutorials/master/Images/General/Add_Extension.gif)


## Step 6 Setting up the If...Then...Else
Coding: Setting up the if...then...else
--------------------------
if...then...else statements are a type of conditional statement. They are used to ask a question then act according to the response.
1. Click the ``|| Logic: if ||`` block in the ``|| Logic ||`` menu and place it in the ``|| Basic: forever ||`` block.
2. Go to the  ``|| Logic: if ||`` block you just created and click the **'+'** button to add an ``|| Logic: else ||`` section.<br>
This creates the if...then...else statement.

```blocks
if (true) {
	
} else {
	
}
basic.forever(function () {
	
})
```

## Step 7 Ask the question
Coding: Ask the question
--------------------------
Next, we will set up the query. We will ask: **"Is the PIR sensor detecting movement?"**
1. Navigate to the ``|| SmartHome ||`` menu. 
2. Select the ``|| SmartHome: PIR sensor detects motion ||`` block and drag it into the place holder in the ``|| Logic: if ||`` block.
3. Ensure that the pin number is set to **Pin 1**.

```blocks
if (smarthome.PIR(DigitalPin.P1)) {
    
} else {
    
}
basic.forever(function () {
	
})
```

## Step 8 Set the Response
Coding: Set the response
--------------------------
Once the ``|| Logic: if ||`` is set then we need to state what happens. **If** motion is true, **then** turn on LED at Pin 2.
1. Navigate to the ``|| SmartHome ||`` menu. 
2. Select the ``|| SmartHome: Toggle LED to ||`` block and drag it into the ``|| Logic: if ||`` block.
3. Ensure that the pin number is set to **Pin 2** and that the toggle is set to **on**.
4. Add a ``|| Basic: pause ||`` below the LED block and set the duration to **1000**

```blocks
if (smarthome.PIR(DigitalPin.P1)) {
    smarthome.ledBrightness(AnalogPin.P2, true)
    basic.pause(1000)
} else {

}
basic.forever(function () {
	
})
```
## Step 9 What Else?
Coding: Use the Else command
--------------------------
The **else** command states what happens if the condition is not true. **If** motion is not true, turn off LED at Pin 2.
1. Navigate to the ``|| SmartHome ||`` menu. 
2. Select the ``|| SmartHome: Toggle LED to ||`` block and drag it into the ``|| Logic: else ||`` section of the ``|| Logic: If ||`` block.
3. Ensure that the ``|| SmartHome: Toggle LED to ||`` block is set to Pin 2 and that the toggle is set to **off**.

```blocks
if (smarthome.PIR(DigitalPin.P1)) {
    smarthome.ledBrightness(AnalogPin.P2, true)
    basic.pause(1000)
} else {
    smarthome.ledBrightness(AnalogPin.P2, false)
}
basic.forever(function () {
	
})
```

## Step 10 - Test It
Test It! Debug it!
------------------
Time to test your code. Download the code to the micro:bit and try it out. Observe what happens and adjust the values as needed.<br>
How could you integrate the other sensors into your code to trigger the servo in a different way?<br><br>


Congratulations! You have finished this tutorial.
** [- Click here to return to the menu](https://sites.google.com/earthed.vic.edu.au/tutorial-iot/home)**<br>


<script src="https://makecode.com/gh-pages-embed.js" > </script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{ { site.github.repository_name } } ");</script>
